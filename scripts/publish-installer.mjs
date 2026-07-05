/**
 * Publish the Windows installer to a GitHub Release.
 *
 * The installer (~116 MB) is too large for a normal Git repo (GitHub blocks
 * files > 100 MB), so it is hosted as a Release asset with a *fixed* tag and
 * *fixed* file name. That gives the "Download app" button on the portfolio a
 * stable, permanent URL:
 *
 *   https://github.com/<owner>/<repo>/releases/download/installer-latest/Ram-Setup.exe
 *
 * Every time this script runs it replaces the asset in-place, so the same URL
 * always serves the newest build. No token needs to be stored anywhere — it is
 * read on the fly from the local Git credential helper (the same login you use
 * for `git push`).
 *
 * Usage:  node scripts/publish-installer.mjs   (run automatically by `npm run release:win`)
 */
import { execSync } from 'node:child_process'
import { existsSync, statSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const TAG = 'installer-latest'
const ASSET_NAME = 'Ram-Setup.exe'
const ASSET_PATH = resolve(ROOT, 'dist', ASSET_NAME)

const API = 'https://api.github.com'
const UPLOADS = 'https://uploads.github.com'

function fail(msg) {
  console.error(`\n✖ ${msg}\n`)
  process.exit(1)
}

/** Read owner/repo from the `origin` remote URL. */
function getRepo() {
  const url = execSync('git config --get remote.origin.url', { cwd: ROOT }).toString().trim()
  const m = url.match(/github\.com[:/]([^/]+)\/(.+?)(?:\.git)?$/)
  if (!m) fail(`Could not parse owner/repo from remote URL: ${url}`)
  return { owner: m[1], repo: m[2] }
}

/** Ask the local Git credential helper for a GitHub token (never printed). */
function getToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN
  try {
    const out = execSync('git credential fill', {
      cwd: ROOT,
      input: 'protocol=https\nhost=github.com\n\n'
    }).toString()
    const line = out.split('\n').find((l) => l.startsWith('password='))
    if (line) return line.slice('password='.length).trim()
  } catch {
    /* fall through */
  }
  fail(
    'No GitHub token found. Set GITHUB_TOKEN or make sure `git push` works ' +
      '(so a credential is cached for github.com).'
  )
}

async function gh(token, url, init = {}) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init.headers || {})
    }
  })
  return res
}

async function main() {
  if (!existsSync(ASSET_PATH)) {
    fail(`Installer not found at ${ASSET_PATH}. Run \`npm run build:win\` first.`)
  }
  const sizeMB = (statSync(ASSET_PATH).size / 1024 / 1024).toFixed(1)
  const { owner, repo } = getRepo()
  const token = getToken()
  const base = `${API}/repos/${owner}/${repo}`
  console.log(`→ Publishing ${ASSET_NAME} (${sizeMB} MB) to ${owner}/${repo} @ ${TAG}`)

  // 1. Find or create the release for our fixed tag.
  let release
  let res = await gh(token, `${base}/releases/tags/${TAG}`)
  if (res.status === 200) {
    release = await res.json()
  } else if (res.status === 404) {
    console.log('→ Creating release (first run)…')
    res = await gh(token, `${base}/releases`, {
      method: 'POST',
      body: JSON.stringify({
        tag_name: TAG,
        name: 'Ram — Desktop App (latest)',
        body: 'Windows installer for the Ram portfolio desktop app. Automatically replaced on every new build.'
      })
    })
    if (!res.ok) fail(`Failed to create release: ${res.status} ${await res.text()}`)
    release = await res.json()
  } else {
    fail(`Unexpected response fetching release: ${res.status} ${await res.text()}`)
  }

  // 2. Remove an existing asset of the same name (so we can re-upload).
  const existing = (release.assets || []).find((a) => a.name === ASSET_NAME)
  if (existing) {
    console.log('→ Removing previous asset…')
    res = await gh(token, `${base}/releases/assets/${existing.id}`, { method: 'DELETE' })
    if (!res.ok && res.status !== 404) {
      fail(`Failed to delete old asset: ${res.status} ${await res.text()}`)
    }
  }

  // 3. Upload the fresh installer (via curl — reliable for large files).
  console.log('→ Uploading installer… (this can take a minute)')
  const uploadUrl = `${UPLOADS}/repos/${owner}/${repo}/releases/${release.id}/assets?name=${ASSET_NAME}`
  const curlConfig = [
    `url = "${uploadUrl}"`,
    'request = "POST"',
    `header = "Authorization: Bearer ${token}"`,
    'header = "Accept: application/vnd.github+json"',
    'header = "X-GitHub-Api-Version: 2022-11-28"',
    'header = "Content-Type: application/octet-stream"',
    `data-binary = "@${ASSET_PATH.replace(/\\/g, '/')}"`,
    'silent',
    'show-error',
    'fail-with-body'
  ].join('\n')
  let asset
  try {
    const out = execSync('curl -K -', {
      cwd: ROOT,
      input: curlConfig,
      maxBuffer: 32 * 1024 * 1024
    }).toString()
    asset = JSON.parse(out)
  } catch (e) {
    const body = (e.stdout && e.stdout.toString()) || e.message
    fail(`Upload failed: ${body}`)
  }
  if (!asset || !asset.browser_download_url) {
    fail(`Upload did not return a download URL: ${JSON.stringify(asset)}`)
  }

  console.log(`\n✔ Done. Download URL:\n  ${asset.browser_download_url}\n`)
}

main().catch((e) => fail(e.stack || e.message))
