const colorTokens = require('../../tokens').colors
const colorPalettes = colorTokens['color-palettes']

module.exports = {
  white: colorTokens.white,
  black: colorTokens.black,
  terminal: colorTokens.terminal,
  brand: colorPalettes.brand['500'],

  // success_hovered: colorTokens['button-state-colors']['success-hovered'],
  // success_active: colorTokens['button-state-colors']['success-active'],

  // danger_hovered: colorTokens['button-state-colors']['danger-hovered'],
  // danger_active: colorTokens['button-state-colors']['danger-active'],
  
  // warning_hovered: colorTokens['button-state-colors']['warning-hovered'],
  // warning_active: colorTokens['button-state-colors']['warning-active'],
  
  // info_hovered: colorTokens['button-state-colors']['info-hovered'],
  // info_active: colorTokens['button-state-colors']['info-active'],
  
  green: colorPalettes.green['500'],
  blue: colorPalettes.blue['500'],
  orange: colorPalettes.orange['500'],
  red: colorPalettes.red['500'],
  yellow: colorPalettes.yellow['500'],
  purple: colorPalettes.purple['500'],
  magenta: colorPalettes.magenta['500'],
  
  grey_light: colorPalettes['grey-light'],
  grey_dark: colorPalettes['grey-dark'],

  brand_scale: colorPalettes.brand,
  green_scale: colorPalettes.green,
  blue_scale: colorPalettes.blue,
  orange_scale: colorPalettes.orange,
  red_scale: colorPalettes.red,
  yellow_scale: colorPalettes.yellow,
  purple_scale: colorPalettes.purple,
  magenta_scale: colorPalettes.magenta,

  dark: {
    text: {
      primary: colorTokens.dark['text-primary'],
      secondary: colorTokens.dark['text-secondary'],
      tertiary: colorTokens.dark['text-tertiary'],
    },
    bg: {
      body: colorTokens.dark['bg-body'],
      window: colorTokens.dark['bg-window'],
    },
    border: {
      body: colorTokens.dark['border-body'],
      window: colorTokens.dark['border-window'],
    },
  },
  light: {
    text: {
      primary: colorTokens.light['text-primary'],
      secondary: colorTokens.light['text-secondary'],
      tertiary: colorTokens.light['text-tertiary'],
    },
    bg: {
      body: colorTokens.light['bg-body'],
      window: colorTokens.light['bg-window'],
    },
    border: {
      body: colorTokens.light['border-body'],
      window: colorTokens.light['border-window'],
    },
  },
}
