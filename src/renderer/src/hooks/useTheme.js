import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, setMode, toggleMode, setGlass } from '../store/themeSlice'
import { siteConfig } from '../utils/config'

const { storageKeys } = siteConfig

/**
 * Central theme hook.
 * - Reads theme + mode + glass style from the redux store.
 * - Applies them to <html> as data-attributes (drives the CSS palettes).
 * - Persists changes to localStorage.
 */
export function useTheme() {
  const dispatch = useDispatch()
  const theme = useSelector((s) => s.theme.theme)
  const mode = useSelector((s) => s.theme.mode)
  const glass = useSelector((s) => s.theme.glass)

  // Apply + persist whenever the theme, mode or glass style changes.
  // useLayoutEffect applies attributes before the first paint (no flash).
  useLayoutEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.setAttribute('data-mode', mode)
    root.setAttribute('data-glass', glass)
    root.style.colorScheme = mode
    try {
      localStorage.setItem(storageKeys.theme, theme)
      localStorage.setItem(storageKeys.mode, mode)
      localStorage.setItem(storageKeys.glass, glass)
    } catch {
      /* storage unavailable — ignore */
    }
  }, [theme, mode, glass])

  return {
    theme,
    mode,
    glass,
    isDark: mode === 'dark',
    changeTheme: (key) => dispatch(setTheme(key)),
    changeMode: (value) => dispatch(setMode(value)),
    changeGlass: (value) => dispatch(setGlass(value)),
    toggle: () => dispatch(toggleMode())
  }
}
