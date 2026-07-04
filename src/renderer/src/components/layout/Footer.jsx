import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { navLinks, siteConfig } from '../../utils/config'
import { socials } from '../../utils/data'
import ProfileMark from '../ui/ProfileMark'

function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <ProfileMark
                className="glow size-9 shrink-0 ring-2 ring-primary/40"
                imgClass="object-cover object-[50%_25%]"
                textClassName="text-base"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-content">{siteConfig.owner.name}</span>
                <span className="text-xs font-medium text-muted">{siteConfig.roleShort}</span>
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  whileHover={{ y: -3 }}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-4.5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-14">
            <div>
              <p className="mb-3 text-sm font-semibold text-content">Navigate</p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() =>
                        document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-content">Contact</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>{siteConfig.owner.location}</li>
                <li>
                  <a href={`mailto:${siteConfig.owner.email}`} className="hover:text-primary">
                    {siteConfig.owner.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.owner.name}. Crafted with care.
          </p>
          <motion.button
            onClick={toTop}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-primary hover:text-primary"
          >
            Back to top <ArrowUp className="size-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
