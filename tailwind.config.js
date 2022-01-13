const colors = require('./src/hb_ui/constants/colors')
const breakpoints = require('./src/hb_ui/constants/media-queries/breakpoints')

module.exports = {
  darkMode: 'class',
  theme: {
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
      'white': '#ffffff',
      'red': colors.red,
      'red-hovered': '#d64f4f',
      'red-active': '#a73e3e',
      'red-light': '#f9cbcb',
      'red-superlight': '#fdeeee',
      'blue': colors.blue_bright,
      'blue-hovered': '#2d80e8',
      'blue-active': '#2364b5',
      'blue-light': '#bfdcff',
      'blue-superlight': '#eaf4ff',
      'blue_light': colors.blue_light,
      'blue_pale': colors.blue_pale,
      'blue_grey': colors.blue_grey,
      'green': colors.green_primary,
      'green-hovered': '#00b1bb',
      'green-active': '#008a92',
      'green-light': '#b0ecf0',
      'green-superlight': '#e6f9fa',
      'green_classic': colors.green_classic,
      'green_light': colors.green_light,
      'green_dark_1': colors.green_dark_1,
      'green_dark_2': colors.green_dark_2,
      'yellow': colors.yellow,
      'purple': colors.purple,
      'magenta': colors.magenta,
      'orange': colors.orange,
      'orange-hovered': '#da7b23',
      'orange-active': '#aa601c',
      'orange-light': '#fadabc',
      'orange-superlight': '#fef3e9',
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