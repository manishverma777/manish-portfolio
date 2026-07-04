import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Standalone WEB build of the renderer (the portfolio) for GitHub Pages.
 * `base: './'` uses relative asset paths so it works at the site root
 * (user page) or under a sub-path (project page) without extra config.
 */
export default defineConfig({
  root: 'src/renderer',
  base: './',
  resolve: {
    alias: {
      '@renderer': resolve('src/renderer/src')
    }
  },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: resolve('dist-web'),
    emptyOutDir: true
  }
})
