const colorTokens = require('../../../../tokens/tokens').colors

module.exports = {
  white: colorTokens.white,
  black: colorTokens.black,
  green_terminal: colorTokens.terminal,
  brand: colorTokens.brand['500'],

  success_hovered: colorTokens['button-state-colors']['success-hovered'],
  success_active: colorTokens['button-state-colors']['success-active'],

  danger_hovered: colorTokens['button-state-colors']['danger-hovered'],
  danger_active: colorTokens['button-state-colors']['danger-active'],
  
  warning_hovered: colorTokens['button-state-colors']['warning-hovered'],
  warning_active: colorTokens['button-state-colors']['warning-active'],
  
  info_hovered: colorTokens['button-state-colors']['info-hovered'],
  info_active: colorTokens['button-state-colors']['info-active'],
  
  green: colorTokens.green['500'],
  blue: colorTokens.blue['500'],
  orange: colorTokens.orange['500'],
  red: colorTokens.red['500'],
  yellow: colorTokens.yellow['500'],
  purple: colorTokens.purple['500'],
  magenta: colorTokens.magenta['500'],
  
  grey_light: colorTokens['grey-light'],
  grey_dark: colorTokens['grey-dark'],
  brand_scale: colorTokens.brand,
  green_scale: colorTokens.green,
  blue_scale: colorTokens.blue,
  orange_scale: colorTokens.orange,
  red_scale: colorTokens.red,
  yellow_scale: colorTokens.yellow,
  purple_scale: colorTokens.purple,
  magenta_scale: colorTokens.magenta,
  dark: {
    text: {
      primary: colorTokens.dark['text-primary'],
      secondary: colorTokens.dark['text-secondary'],
      tertiary: colorTokens.dark['text-tertiary'],
      quaternary: colorTokens.dark['text-quaternary'],
      quintenary: colorTokens.dark['text-quintenary'],
    },
    bg: {
      primary: colorTokens.dark['bg-primary'],
      secondary: colorTokens.dark['bg-secondary'],
      tertiary: colorTokens.dark['bg-tertiary'],
      quaternary: colorTokens.dark['bg-quaternary'],
      quintenary: colorTokens.dark['bg-quintenary'],
    },
    border: {
      primary: colorTokens.dark['border-primary'],
      secondary: colorTokens.dark['border-secondary'],
      tertiary: colorTokens.dark['border-tertiary'],
      quaternary: colorTokens.dark['border-quaternary'],
      quintenary: colorTokens.dark['border-quintenary'],
    },
  },
  light: {
    text: {
      primary: colorTokens.dark['text-primary'],
      secondary: colorTokens.dark['text-secondary'],
      tertiary: colorTokens.dark['text-tertiary'],
      quaternary: colorTokens.dark['text-quaternary'],
      quintenary: colorTokens.dark['text-quintenary'],
    },
    bg: {
      primary: colorTokens.light['bg-primary'],
      secondary: colorTokens.light['bg-secondary'],
      tertiary: colorTokens.light['bg-tertiary'],
      quaternary: colorTokens.light['bg-quaternary'],
      quintenary: colorTokens.light['bg-quintenary'],
    },
    border: {
      primary: colorTokens.light['border-primary'],
      secondary: colorTokens.light['border-secondary'],
      tertiary: colorTokens.light['border-tertiary'],
      quaternary: colorTokens.light['border-quaternary'],
      quintenary: colorTokens.light['border-quintenary'],
    },
  },
}
