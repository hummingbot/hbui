const colors = require('./src/hb_ui/constants/colors')
const tokens = require('./specify/tokens')
const breakpoints = require('./src/hb_ui/constants/media-queries/breakpoints')

module.exports = {
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': [tokens.fontSize['text-xs'], {
        lineHeight: tokens.lineHeight['text-xs'],
      }],
      'sm': [tokens.fontSize['text-sm'], {
        lineHeight: tokens.lineHeight['text-sm'],
      }],
      'base': [tokens.fontSize['text-base'], {
        lineHeight: tokens.lineHeight['text-base'],
      }],
      'lg': [tokens.fontSize['text-lg'], {
        lineHeight: tokens.lineHeight['text-lg'],
      }],
      'xl': [tokens.fontSize['text-xl'], {
        lineHeight: tokens.lineHeight['text-xl'],
      }],
      '2xl': [tokens.fontSize['text-2-xl'], {
        lineHeight: tokens.lineHeight['text-2-xl'],
      }],
      '3xl': [tokens.fontSize['text-3-xl'], {
        lineHeight: tokens.lineHeight['text-3-xl'],
      }],
      '4xl': [tokens.fontSize['text-4-xl'], {
        lineHeight: tokens.lineHeight['text-4-xl'],
      }],
      '5xl': [tokens.fontSize['text-5-xl'], {
        lineHeight: tokens.lineHeight['text-5-xl'],
      }],
      '6xl': [tokens.fontSize['text-6-xl'], {
        lineHeight: tokens.lineHeight['text-6-xl'],
      }],
      '7xl': [tokens.fontSize['text-7-xl'], {
        lineHeight: tokens.lineHeight['text-7-xl'],
      }]
    },
    screens: {
      'sm': breakpoints.px.sm,
      'md': breakpoints.px.md,
      'lg': breakpoints.px.lg,
      'xl': breakpoints.px.xl,
      '2xl': breakpoints.px.xxl
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
      serif: ['Courier New', 'serif'],
      mono: ['SF Mono', 'mono']
    },
    dropShadow: {
      'sm': tokens.boxShadow['shadow-sm'],
      'base': tokens.boxShadow.shadow,
      'md': tokens.boxShadow['shadow-sm'],
      'lg': tokens.boxShadow['shadow-lg'],
      'xl': tokens.boxShadow['shadow-xl'],
      '2xl': tokens.boxShadow['shadow-2-xl'],
      'inner': tokens.boxShadow['shadow-inner'],
      'none': 'box-shadow: 0 0 #0000',
    },
    colors: {
      // 'blue_light': colors.blue_light,
      // 'blue_pale': colors.blue_pale,
      // 'blue_grey': colors.blue_grey,
      // 'green_classic': colors.green_classic,
      // 'green_light': colors.green_light,
      // 'green_dark_1': colors.green_dark_1,
      // 'green_dark_2': colors.green_dark_2,

      transparent: 'transparent',
      current: 'currentColor',
      
      'black': colors.black,
      'white': colors.white,

      'primary': colors.brand,
      'brand': colors.brand,

      'green': colors.green_scale['500'],
      'red': colors.red_scale['500'],
      'blue': colors.blue_scale['500'],
      'yellow': colors.yellow_scale['500'],
      'purple': colors.purple_scale['500'],
      'magenta': colors.magenta_scale['500'],
      'orange': colors.orange_scale['500'],

      'red-hovered': colors.red_hovered,
      'red-active': colors.red_active,
      'red-light': colors.red_light,
      'red-superlight': colors.red_superlight,

      'blue-hovered': colors.blue_hovered,
      'blue-active': colors.blue_active,
      'blue-light': colors.blue_light,
      'blue-superlight': colors.blue_superlight,

      'green-hovered': colors.green_hovered,
      'green-active': colors.green_active,
      'green-light': colors.green_light,
      'green-superlight': colors.green_superlight,

      'orange-hovered': colors.orange_hovered,
      'orange-active': colors.orange_active,
      'orange-light': colors.orange_light,
      'orange-superlight': colors.orange_superlight,
      // extended colors
      'grey-light': colors.grey_light,
      'grey-dark': colors.grey_dark,
      // 'green-ui': colors.green,
      // 'blue-ui': color.blue,
      // 'red-ui': colors.red,
      // 'orange-ui': colors.orange,
      // 'yellow-ui': colors.yellow,
      // 'purple-ui': colors.purple,
    },
    extend: {
      colors: {
        'brand-ui': colors.brand_scale,
        'green-ui': colors.green_scale,
        'red-ui': colors.red_scale,
        'blue-ui': colors.blue_scale,
        'yellow-ui': colors.yellow_scale,
        'purple-ui': colors.purple_scale,
        'magenta-ui': colors.magenta_scale,
        'orange-ui': colors.orange_scale,
      },
      spacing: tokens.spacing,
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
        quaternary: "var(--border-quaternary)",
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