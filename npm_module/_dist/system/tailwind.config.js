"use strict";

var tokens = require('../tokens/index.json');
var colors = tokens.colors;
var text = tokens.text;
var breakpoints = tokens.breakpoints;
// const colorsDark = colors.dark
// const colorsLight = colors.light
var colorPalettes = colors.color_palettes;
module.exports = {
  darkMode: 'class',
  theme: {
    fontSize: {
      'xxxs': text.fontSize['text-2-xxs'],
      'xxs': text.fontSize['text-xxs'],
      'xs': text.fontSize['text-xs'],
      'sm': text.fontSize['text-sm'],
      'base': text.fontSize['text-base'],
      'lg': text.fontSize['text-lg'],
      'xl': text.fontSize['text-xl'],
      '2xl': text.fontSize['text-2xl'],
      '3xl': text.fontSize['text-3xl'],
      '4xl': text.fontSize['text-4xl'],
      '5xl': text.fontSize['text-5xl'],
      '6xl': text.fontSize['text-6xl'],
      '7xl': text.fontSize['text-7xl'],
      '8xl': text.fontSize['text-8xl'],
      '9xl': text.fontSize['text-9xl']
    },
    screens: {
      'sm': breakpoints.sm,
      'md': breakpoints.md,
      'lg': breakpoints.lg,
      'xl': breakpoints.xl,
      '2xl': breakpoints['2xl']
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
      serif: ['Courier New', 'serif'],
      mono: ['SF Mono', 'mono']
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': colors.black,
      'white': colors.white,
      'terminal': colors.terminal,
      'green': colorPalettes.green['500'],
      'red': colorPalettes.red['500'],
      'blue': colorPalettes.blue['500'],
      'yellow': colorPalettes.yellow['500'],
      'purple': colorPalettes.purple['500'],
      'magenta': colorPalettes.magenta['500'],
      'orange': colorPalettes.orange['500'],
      'success': colorPalettes.green['500'],
      'danger': colorPalettes.red['500'],
      'info': colorPalettes.blue['500'],
      'warning': colorPalettes.orange['500']
    },
    extend: {
      opacity: {
        5: "0.05",
        10: "0.1",
        20: "0.2",
        50: "0.5"
      },
      colors: {
        'green-scale': colorPalettes.green,
        'red-scale': colorPalettes.red,
        'blue-scale': colorPalettes.blue,
        'yellow-scale': colorPalettes.yellow,
        'purple-scale': colorPalettes.purple,
        'magenta-scale': colorPalettes.magenta,
        'orange-scale': colorPalettes.orange,
        'grey-light-scale': colorPalettes.grey_light,
        'grey-dark-scale': colorPalettes.grey_dark
      },
      spacing: tokens.spacing,
      backgroundColor: {
        body: "var(--bg-body)",
        window: "var(--bg-window)",
        button: "var(--bg-button)",
        "button-hover": "var(--bg-button-hover)",
        "button-active": "var(--bg-button-active)",
        "button-secondary": "var(--bg-button-secondary)",
        "button-secondary-hover": "var(--bg-button-secondary-hover)",
        "button-secondary-active": "var(--bg-button-secondary-active)",
        "success-hover": "var(--bg-success-hover)",
        "success-active": "var(--bg-success-active)",
        "info-hover": "var(--bg-info-hover)",
        "info-active": "var(--bg-info-active)",
        "warning-hover": "var(--bg-warning-hover)",
        "warning-active": "var(--bg-warning-active)",
        "danger-hover": "var(--bg-danger-hover)",
        "danger-active": "var(--bg-danger-active)",
        navbutton: "var(--bg-navbutton)",
        "navbutton-hover": "var(--bg-navbutton-hover)",
        "navbutton-active": "var(--bg-navbutton-active)",
        input: "var(--bg-input)",
        "input-focus": "var(--bg-input-focus)",
        "input-hover": "var(--bg-input-hover)",
        "checkbox-selected-enabled": "var(--bg-checkbox-selected-enabled)",
        "checkbox-selected-hover": "var(--bg-checkbox-selected-hover)",
        "checkbox-selected-active": "var(--bg-checkbox-selected-active)",
        "checkbox-unselected-enabled": "var(--bg-checkbox-unselected-enabled)",
        "checkbox-unselected-hover": "var(--bg-checkbox-unselected-hover)",
        "checkbox-unselected-active": "var(--bg-checkbox-unselected-active)"
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        button: "var(--text-button)",
        "button-hover": "var(--text-button-hover)",
        "button-active": "var(--text-button-active)",
        "button-secondary": "var(--text-button-secondary)",
        "button-secondary-hover": "var(--text-button-secondary-hover)",
        "button-secondary-active": "var(--text-button-secondary-active)",
        "button-success": "var(--text-button-success)",
        "button-success-hover": "var(--text-button-success-hover)",
        "button-success-active": "var(--text-button-success-active)",
        "button-info": "var(--text-button-info)",
        "button-info-hover": "var(--text-button-info-hover)",
        "button-info-active": "var(--text-button-info-active)",
        "button-warning": "var(--text-button-warning)",
        "button-warning-hover": "var(--text-button-warning-hover)",
        "button-warning-active": "var(--text-button-warning-active)",
        "button-danger": "var(--text-button-danger)",
        "button-danger-hover": "var(--text-button-danger-hover)",
        "button-danger-active": "var(--text-button-danger-active)",
        navbutton: "var(--text-navbutton)",
        "navbutton-hover": "var(--text-navbutton-hover)",
        "navbutton-active": "var(--text-navbutton-active)",
        input: "var(--text-input)",
        "input-focus": "var(--text-input-focus)",
        "input-hover": "var(--text-input-hover)",
        "checkbox-selected-enabled": "var(--text-checkbox-selected-enabled)",
        "checkbox-selected-hover": "var(--text-checkbox-selected-hover)",
        "checkbox-selected-active": "var(--text-checkbox-selected-active)",
        "checkbox-unselected-enabled": "var(--text-checkbox-unselected-enabled)",
        "checkbox-unselected-hover": "var(--text-checkbox-unselected-hover)",
        "checkbox-unselected-active": "var(--text-checkbox-unselected-active)"
      },
      borderColor: {
        body: "var(--border-body)",
        window: "var(--border-window)",
        button: "var(--border-button)",
        "button-hover": "var(--border-button-hover)",
        "button-active": "var(--border-button-active)",
        "button-secondary": "var(--border-button-secondary)",
        "button-secondary-hover": "var(--border-button-secondary-hover)",
        "button-secondary-active": "var(--border-button-secondary-active)",
        "button-success": "var(--border-button-success)",
        "button-success-hover": "var(--border-button-success-hover)",
        "button-success-active": "var(--border-button-success-active)",
        "button-info": "var(--border-button-info)",
        "button-info-hover": "var(--border-button-info-hover)",
        "button-info-active": "var(--border-button-info-active)",
        "button-warning": "var(--border-button-warning)",
        "button-warning-hover": "var(--border-button-warning-hover)",
        "button-warning-active": "var(--border-button-warning-active)",
        "button-danger": "var(--border-button-danger)",
        "button-danger-hover": "var(--border-button-danger-hover)",
        "button-danger-active": "var(--border-button-danger-active)",
        input: "var(--border-input)",
        "input-focus": "var(--border-input-focus)",
        "input-hover": "var(--border-input-hover)",
        "checkbox-selected-enabled": "var(--border-checkbox-selected-enabled)",
        "checkbox-selected-hover": "var(--border-checkbox-selected-hover)",
        "checkbox-selected-active": "var(--border-checkbox-selected-active)",
        "checkbox-unselected-enabled": "var(--border-checkbox-unselected-enabled)",
        "checkbox-unselected-hover": "var(--border-checkbox-unselected-hover)",
        "checkbox-unselected-active": "var(--border-checkbox-unselected-active)"
      }
    }
  },
  plugins: []
};