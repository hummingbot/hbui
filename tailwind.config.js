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
      'red-hovered': colors.red_hovered,
      'red-active': colors.red_active,
      'red-light': colors.red_light,
      'red-superlight': colors.red_superlight,
      'blue': colors.blue_bright,
      'blue-hovered': colors.blue_hovered,
      'blue-active': colors.blue_active,
      'blue-light': colors.blue_light,
      'blue-superlight': colors.blue_superlight,
      'blue_light': colors.blue_light,
      'blue_pale': colors.blue_pale,
      'blue_grey': colors.blue_grey,
      'green': colors.green_primary,
      'green-hovered': colors.green_hovered,
      'green-active': colors.green_active,
      'green-light': colors.green_light,
      'green-superlight': colors.green_superlight,
      'green_classic': colors.green_classic,
      'green_light': colors.green_light,
      'green_dark_1': colors.green_dark_1,
      'green_dark_2': colors.green_dark_2,
      'yellow': colors.yellow,
      'purple': colors.purple,
      'magenta': colors.magenta,
      'orange': colors.orange,
      'orange-hovered': colors.orange_hovered,
      'orange-active': colors.orange_active,
      'orange-light': colors.orange_light,
      'orange-superlight': colors.orange_superlight,
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
      'green-ui': {
        50: colors.green_ui_50,
        100: colors.green_ui_100,
        200: colors.green_ui_200,
        300: colors.green_ui_300,
        400: colors.green_ui_400,
        500: colors.green_ui_500,
        600: colors.green_ui_600,
        700: colors.green_ui_700,
        800: colors.green_ui_800,
        900: colors.green_ui_900
      },
      'blue-ui': {
        50: colors.blue_ui_50,
        100: colors.blue_ui_100,
        200: colors.blue_ui_200,
        300: colors.blue_ui_300,
        400: colors.blue_ui_400,
        500: colors.blue_ui_500,
        600: colors.blue_ui_600,
        700: colors.blue_ui_700,
        800: colors.blue_ui_800,
        900: colors.blue_ui_900
      },
        'red-ui': {
        50: colors.red_ui_50,
        100: colors.red_ui_100,
        200: colors.red_ui_200,
        300: colors.red_ui_300,
        400: colors.red_ui_400,
        500: colors.red_ui_500,
        600: colors.red_ui_600,
        700: colors.red_ui_700,
        800: colors.red_ui_800,
        900: colors.red_ui_900
      },
        'orange-ui': {
        50: colors.orange_ui_50,
        100: colors.orange_ui_100,
        200: colors.orange_ui_200,
        300: colors.orange_ui_300,
        400: colors.orange_ui_400,
        500: colors.orange_ui_500,
        600: colors.orange_ui_600,
        700: colors.orange_ui_700,
        800: colors.orange_ui_800,
        900: colors.orange_ui_900
      },
        'yellow-ui': {
        50: colors.yellow_ui_50,
        100: colors.yellow_ui_100,
        200: colors.yellow_ui_200,
        300: colors.yellow_ui_300,
        400: colors.yellow_ui_400,
        500: colors.yellow_ui_500,
        600: colors.yellow_ui_600,
        700: colors.yellow_ui_700,
        800: colors.yellow_ui_800,
        900: colors.yellow_ui_900
      },
        'purple-ui': {
        50: colors.purple_ui_50,
        100: colors.purple_ui_100,
        200: colors.purple_ui_200,
        300: colors.purple_ui_300,
        400: colors.purple_ui_400,
        500: colors.purple_ui_500,
        600: colors.purple_ui_600,
        700: colors.purple_ui_700,
        800: colors.purple_ui_800,
        900: colors.purple_ui_900
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
        tertiary: "var(--border-tertiary)",
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