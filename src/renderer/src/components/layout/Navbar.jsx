import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { navLinks, siteConfig } from '../../utils/config'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import ProfileMark from '../ui/ProfileMark'

const ids = navLinks.map((l) => l.id)

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(ids)
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3"
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6',
          scrolled ? 'glass shadow-lg' : 'border border-transparent bg-transparent'
        )}
      >
        {/* Brand */}
        <button onClick={() => go('home')} className="flex items-center gap-2.5">
          <ProfileMark
            className="glow size-9 shrink-0 ring-2 ring-primary/40"
            imgClass="object-cover object-[50%_25%]"
            textClassName="text-base"
          />
          <span className="flex flex-col text-left leading-tight">
            <span className="text-sm font-bold tracking-tight text-content">
              {siteConfig.owner.name}
            </span>
            <span className="text-xs font-medium text-muted">{siteConfig.roleShort}</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={cn(
                  'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                  active === link.id ? 'text-content' : 'text-muted hover:text-content'
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-surface-2"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle color mode"
            className="flex size-9 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-primary hover:text-primary"
          >
            {isDark ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
          </button>
          <span className="hidden md:inline-flex">
            <Button size="sm" onClick={() => go('contact')}>
              Let&apos;s talk
            </Button>
          </span>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex size-9 items-center justify-center rounded-xl border border-border text-content md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-2 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={cn(
                  'block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors',
                  active === link.id
                    ? 'bg-surface-2 text-content'
                    : 'text-muted hover:bg-surface-2 hover:text-content'
                )}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
