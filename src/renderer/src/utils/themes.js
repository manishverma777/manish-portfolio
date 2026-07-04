/**
 * THEMES REGISTRY
 * ---------------
 * Metadata for the 5 white-label themes. Colors here are used only for
 * the theme-switcher swatches — the real palettes live in main.css and
 * are applied via the [data-theme] attribute on <html>.
 */
export const THEMES = [
  {
    key: 'aurora',
    name: 'Aurora',
    description: 'Indigo & violet',
    font: 'Sora',
    swatch: ['#7c5cff', '#22d3ee', '#f472b6']
  },
  {
    key: 'emerald',
    name: 'Emerald',
    description: 'Green & teal',
    font: 'Plus Jakarta Sans',
    swatch: ['#10d98f', '#38bdf8', '#a3e635']
  },
  {
    key: 'sunset',
    name: 'Sunset',
    description: 'Orange & rose',
    font: 'Outfit',
    swatch: ['#ff6a3d', '#ffb020', '#ff4d6d']
  },
  {
    key: 'ocean',
    name: 'Ocean',
    description: 'Blue & cyan',
    font: 'DM Sans',
    swatch: ['#38a3ff', '#22d3ee', '#818cf8']
  },
  {
    key: 'rose',
    name: 'Rose',
    description: 'Pink & fuchsia',
    font: 'Manrope',
    swatch: ['#ff5ca8', '#c084fc', '#fb7185']
  }
]

export const THEME_KEYS = THEMES.map((t) => t.key)
export const MODES = ['light', 'dark']

/**
 * GLASS STYLES
 * ------------
 * Configurable frosted-glass appearance applied app-wide via the
 * [data-glass] attribute on <html>. Real values live in main.css.
 */
export const GLASS_STYLES = [
  {
    key: 'frosted',
    name: 'Frosted',
    description: 'Balanced blur — the classic look'
  },
  {
    key: 'liquid',
    name: 'Liquid',
    description: 'Heavy blur & vivid saturation'
  },
  {
    key: 'clear',
    name: 'Clear',
    description: 'Light, see-through glass'
  },
  {
    key: 'tinted',
    name: 'Tinted',
    description: 'Rich, tinted, more opaque'
  },
  {
    key: 'solid',
    name: 'Solid',
    description: 'No blur — best readability'
  }
]

export const GLASS_KEYS = GLASS_STYLES.map((g) => g.key)
