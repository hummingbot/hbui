const colorTokens = require('../../../../tokens/tokens')

module.exports = {
  white: colorTokens.colors.white,
  black: colorTokens.colors.black,
  green_terminal: colorTokens.colors.terminal,
  brand: colorTokens.colors.brand['500'],

  green_light: colorTokens.colors.green['100'],
  green_superlight: colorTokens.colors.green['50'],
  green_hovered: colorTokens.colors.green['600'],
  green_active: colorTokens.colors.green['700'],

  red_light: colorTokens.colors.red['100'],
  red_superlight: colorTokens.colors.red['50'],
  red_hovered: colorTokens.colors.red['600'],
  red_active: colorTokens.colors.red['700'],
  
  orange_light: colorTokens.colors.orange['100'],
  orange_superlight: colorTokens.colors.orange['50'],
  orange_hovered: colorTokens.colors.orange['600'],
  orange_active: colorTokens.colors.orange['700'],
  
  blue_light: colorTokens.colors.blue['100'],
  blue_superlight: colorTokens.colors.blue['50'],
  blue_hovered: colorTokens.colors.blue['600'],
  blue_active: colorTokens.colors.blue['700'],
  
  green: colorTokens.colors.green['500'],
  blue: colorTokens.colors.blue['500'],
  orange: colorTokens.colors.orange['500'],
  red: colorTokens.colors.red['500'],
  yellow: colorTokens.colors.yellow['500'],
  purple: colorTokens.colors.purple['500'],
  magenta: colorTokens.colors.magenta['500'],
  
  grey_light: colorTokens.colors['grey-light'],
  grey_dark: colorTokens.colors['grey-dark'],
  brand_scale: colorTokens.colors.brand,
  green_scale: colorTokens.colors.green,
  blue_scale: colorTokens.colors.blue,
  orange_scale: colorTokens.colors.orange,
  red_scale: colorTokens.colors.red,
  yellow_scale: colorTokens.colors.yellow,
  purple_scale: colorTokens.colors.purple,
  magenta_scale: colorTokens.colors.magenta,
  dark: {
    text: {
      primary: colorTokens.colors.dark['text-primary'],
      secondary: colorTokens.colors.dark['text-secondary'],
      tertiary: colorTokens.colors.dark['text-tertiary'],
      quaternary: colorTokens.colors.dark['text-quaternary'],
      quintenary: colorTokens.colors.dark['text-quintenary'],
    },
    bg: {
      primary: colorTokens.colors.dark['bg-primary'],
      secondary: colorTokens.colors.dark['bg-secondary'],
      tertiary: colorTokens.colors.dark['bg-tertiary'],
      quaternary: colorTokens.colors.dark['bg-quaternary'],
      quintenary: colorTokens.colors.dark['bg-quintenary'],
    },
    border: {
      primary: colorTokens.colors.dark['border-primary'],
      secondary: colorTokens.colors.dark['border-secondary'],
      tertiary: colorTokens.colors.dark['border-tertiary'],
      quaternary: colorTokens.colors.dark['border-quaternary'],
      quintenary: colorTokens.colors.dark['border-quintenary'],
    },
  },
  light: {
    text: {
      primary: colorTokens.colors.dark['text-primary'],
      secondary: colorTokens.colors.dark['text-secondary'],
      tertiary: colorTokens.colors.dark['text-tertiary'],
      quaternary: colorTokens.colors.dark['text-quaternary'],
      quintenary: colorTokens.colors.dark['text-quintenary'],
    },
    bg: {
      primary: colorTokens.colors.light['bg-primary'],
      secondary: colorTokens.colors.light['bg-secondary'],
      tertiary: colorTokens.colors.light['bg-tertiary'],
      quaternary: colorTokens.colors.light['bg-quaternary'],
      quintenary: colorTokens.colors.light['bg-quintenary'],
    },
    border: {
      primary: colorTokens.colors.light['border-primary'],
      secondary: colorTokens.colors.light['border-secondary'],
      tertiary: colorTokens.colors.light['border-tertiary'],
      quaternary: colorTokens.colors.light['border-quaternary'],
      quintenary: colorTokens.colors.light['border-quintenary'],
    },
  },
}
