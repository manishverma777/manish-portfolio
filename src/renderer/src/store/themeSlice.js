import { createSlice } from '@reduxjs/toolkit'
import { siteConfig } from '../utils/config'
import { THEME_KEYS, MODES, GLASS_KEYS } from '../utils/themes'

const { storageKeys, defaultTheme, defaultMode, defaultGlass } = siteConfig

/** Safely read a persisted value, falling back to config defaults. */
function readStored(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value && allowed.includes(value) ? value : fallback
  } catch {
    return fallback
  }
}

const initialState = {
  theme: readStored(storageKeys.theme, THEME_KEYS, defaultTheme),
  mode: readStored(storageKeys.mode, MODES, defaultMode),
  glass: readStored(storageKeys.glass, GLASS_KEYS, defaultGlass)
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      if (THEME_KEYS.includes(action.payload)) state.theme = action.payload
    },
    setMode(state, action) {
      if (MODES.includes(action.payload)) state.mode = action.payload
    },
    toggleMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
    setGlass(state, action) {
      if (GLASS_KEYS.includes(action.payload)) state.glass = action.payload
    }
  }
})

export const { setTheme, setMode, toggleMode, setGlass } = themeSlice.actions
export default themeSlice.reducer
