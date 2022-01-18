const colors = require('./src/hb_ui/constants/colors')
const breakpoints = require('./src/hb_ui/constants/media-queries/breakpoints')

module.exports = {
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      'sm': breakpoints.px.sm,
      'md': breakpoints.px.md,
      'lg': breakpoints.px.lg,
      'xl': breakpoints.px.xl,
      '2xl': breakpoints.px.xxl
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': colors.green_primary,
      'black': colors.custom_black,
      'white': colors.white,
      'red': colors.red,
      'red-hovered': colors.hovered,
      'red-active': colors.red_active,
      'red-light': colors.light,
      'red-superlight': colors.superlight,
      'blue': colors.blue_bright,
      'blue-hovered': colors.hovered,
      'blue-active': colors.blue_active,
      'blue-light': colors.light,
      'blue-superlight': colors.superlight,
      'blue_light': colors.blue_light,
      'blue_pale': colors.blue_pale,
      'blue_grey': colors.blue_grey,
      'green': colors.green_primary,
      'green-hovered': colors.hovered,
      'green-active': colors.green_active,
      'green-light': colors.light,
      'green-superlight': colors.superlight,
      'green_classic': colors.green_classic,
      'green_light': colors.green_light,
      'green_dark_1': colors.green_dark_1,
      'green_dark_2': colors.green_dark_2,
      'yellow': colors.yellow,
      'purple': colors.purple,
      'magenta': colors.magenta,
      'orange': colors.orange,
      'orange-hovered': colors.hovered,
      'orange-active': colors.orange_active,
      'orange-light': colors.light,
      'orange-superlight': colors.superlight,
      'grey-light': {
        100: colors.greyscale_light_100,
        200: colors.greyscale_light_200,
        300: colors.greyscale_light_300,
        400: colors.greyscale_light_400,
        500: colors.greyscale_light_500,
        600: colors.greyscale_light_600,
        700: colors.greyscale_light_700
      },
      'grey-dark': {
        100: colors.greyscale_dark_100,
        200: colors.greyscale_dark_200,
        300: colors.greyscale_dark_300,
        400: colors.greyscale_dark_400,
        500: colors.greyscale_dark_500,
        600: colors.greyscale_dark_600,
        700: colors.greyscale_dark_700
      },
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
      serif: ['Courier New', 'serif'],
    },
    extend: {
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
        secondary: "var(--border-secondary)",
      },
      fillColor: {
        brand: "var(--fill-brand)",
        primary: "var(--fill-primary)",
        secondary: "var(--fill-secondary)",
        tertiary: "var(--fill-tertiary)"
      },
      textColor: {
        brand: "var(--text-brand)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        dim: "var(--text-dim)"
      }
    }
  },
  plugins: [],
}