const colors = require('./src/hb_ui/constants/colors')
const breakpoints = require('./src/hb_ui/constants/media-queries/breakpoints')

module.exports = {
  darkMode: 'class',
  theme: {
    screens: {
      'sm': breakpoints.sm,
      'md': breakpoints.md,
      'lg': breakpoints.lg,
      'xl': breakpoints.xl,
      '2xl': breakpoints.xxl
    },
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '24px',
      '6': '32px',
      '7': '48px',
      '8': '80px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': colors.custom_black,
      'white': '#ffffff',
      'red': colors.red,
      'blue': colors.blue_bright,
      'green': colors.green_primary,
      'green_classic': colors.green_classic,
      'green_light': colors.green_light,
      'green_hovered': colors.green_hovered,
      'green_pressed': colors.green_pressed,
      'green_dark_1': colors.green_dark_1,
      'green_dark_2': colors.green_dark_2,
      'yellow': colors.yellow,
      'purple': colors.purple,
      'magenta': colors.magenta,
      'orange': colors.orange,
      'grey-light': {
        100: colors.greyscale_light_100,
        200: colors.greyscale_light_200,
        300: colors.greyscale_light_300,
        400: colors.greyscale_light_400,
        500: colors.greyscale_light_500,
        600: colors.greyscale_light_600,
        700: colors.greyscale_light_700,
      },
      'grey-dark': {
        100: colors.greyscale_dark_100,
        200: colors.greyscale_dark_200,
        300: colors.greyscale_dark_300,
        400: colors.greyscale_dark_400,
        500: colors.greyscale_dark_500,
        600: colors.greyscale_dark_600,
        700: colors.greyscale_dark_700,
      },
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
      serif: ['Courier New', 'serif'],
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        info: "var(--color-info)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)"
      },
      backgroundColor: {
        brand: "var(--bg-brand)",
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)",
        quaternary: "var(--bg-quaternary)"
      },
      borderColor: {
        brand: "var(--border-brand)",
        primary: "var(--border-primary)",
      },
      textColor: {
        brand: "var(--text-brand)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        dim: "var(--text-dim)"
      },
      fillColor: {
        brand: "var(--fill-brand)",
        primary: "var(--fill-primary)",
        secondary: "var(--fill-secondary)",
        tertiary: "var(--fill-tertiary)"
      },
    }
  },
  plugins: [],
}