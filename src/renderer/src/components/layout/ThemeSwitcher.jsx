import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Moon, Sun, Check, X, Layers } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { THEMES, GLASS_STYLES } from '../../utils/themes'
import { cn } from '../../utils/cn'

/**
 * Floating theme control: toggles light/dark, switches between the
 * 5 white-label color themes and picks a glass style.
 * State is global (redux) + persisted.
 */
function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const { theme, isDark, glass, toggle, changeTheme, changeGlass } = useTheme()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="glass max-h-[78vh] w-72 overflow-y-auto rounded-2xl p-4 shadow-2xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-content">Appearance</p>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-muted hover:bg-surface-2 hover:text-content"
                aria-label="Close theme panel"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Mode toggle */}
            <button
              onClick={toggle}
              className="mb-4 flex w-full items-center justify-between rounded-xl border border-border bg-surface-2 px-4 py-3 transition-colors hover:border-primary"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-content">
                {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
                {isDark ? 'Dark' : 'Light'} mode
              </span>
              <span
                className={cn(
                  'relative h-6 w-11 rounded-full transition-colors',
                  isDark ? 'bg-primary' : 'bg-border'
                )}
              >
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={cn(
                    'absolute top-0.5 size-5 rounded-full bg-white shadow',
                    isDark ? 'right-0.5' : 'left-0.5'
                  )}
                />
              </span>
            </button>

            {/* Theme swatches */}
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
              Color theme
            </p>
            <div className="grid grid-cols-1 gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => changeTheme(t.key)}
                  className={cn(
                    'flex items-center justify-between rounded-xl border px-3 py-2.5 transition-all',
                    theme === t.key
                      ? 'border-primary bg-surface-2'
                      : 'border-border hover:border-primary/50'
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex -space-x-1.5">
                      {t.swatch.map((c, i) => (
                        <span
                          key={i}
                          className="size-4 rounded-full ring-2 ring-surface"
                          style={{ background: c }}
                        />
                      ))}
                    </span>
                    <span className="text-left">
                      <span className="block text-sm font-medium text-content">{t.name}</span>
                      <span className="block text-xs text-muted">
                        {t.description} · {t.font}
                      </span>
                    </span>
                  </span>
                  {theme === t.key && <Check className="size-4 text-primary" />}
                </button>
              ))}
            </div>

            {/* Glass style */}
            <p className="mb-2 mt-4 text-xs font-medium uppercase tracking-wide text-muted">
              Glass style
            </p>
            <div className="grid grid-cols-1 gap-2">
              {GLASS_STYLES.map((g) => (
                <button
                  key={g.key}
                  onClick={() => changeGlass(g.key)}
                  className={cn(
                    'flex items-center justify-between rounded-xl border px-3 py-2.5 transition-all',
                    glass === g.key
                      ? 'border-primary bg-surface-2'
                      : 'border-border hover:border-primary/50'
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-surface-2 text-primary">
                      <Layers className="size-4" />
                    </span>
                    <span className="text-left">
                      <span className="block text-sm font-medium text-content">{g.name}</span>
                      <span className="block text-xs text-muted">{g.description}</span>
                    </span>
                  </span>
                  {glass === g.key && <Check className="size-4 text-primary" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06, rotate: 8 }}
        whileTap={{ scale: 0.94 }}
        className="glow flex size-14 items-center justify-center rounded-full bg-primary text-primary-fg shadow-xl"
        aria-label="Open theme switcher"
      >
        <Palette className="size-6" />
      </motion.button>
    </div>
  )
}

export default ThemeSwitcher
