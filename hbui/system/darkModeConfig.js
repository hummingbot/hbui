import { css } from '@emotion/react'
import tw from 'twin.macro'
import tokens from '../tokens'
const colors = tokens.colors
const colorPalettes = colors['color-palettes']
const colorsDarkTheme = colors.dark
const colorsLightTheme = colors.light

const darkModeConfig = css`
  .light {
    color-scheme: light;
    --bg-body: ${colorsLightTheme['body-bg']};
    --border-body: ${colorsLightTheme['body-border']};
    --bg-window: ${colorsLightTheme['window-bg']};
    --border-window: ${colorsLightTheme['window-border']};

    --text-primary: ${colorsLightTheme['text-primary']};
    --text-secondary: ${colorsLightTheme['text-secondary']};
    --text-tertiary: ${colorsLightTheme['text-tertiary']};

    --bg-button: ${colorsLightTheme.buttons.default.bg.enabled};
    --bg-button-hover: ${colorsLightTheme.buttons.default.bg.hover};
    --bg-button-active: ${colorsLightTheme.buttons.default.bg.active};

    --bg-button-secondary: ${colorsLightTheme.buttons.secondary.bg.enabled};
    --bg-button-secondary-hover: ${colorsLightTheme.buttons.secondary.bg.hover};
    --bg-button-secondary-active: ${colorsLightTheme.buttons.secondary.bg.active};

    --bg-success-hover: ${colorsLightTheme.buttons.success.bg.hover};
    --bg-success-active: ${colorsLightTheme.buttons.success.bg.active};
    --bg-info-hover: ${colorsLightTheme.buttons.info.bg.hover};
    --bg-info-active: ${colorsLightTheme.buttons.info.bg.active};
    --bg-warning-hover: ${colorsLightTheme.buttons.warning.bg.hover};
    --bg-warning-active: ${colorsLightTheme.buttons.warning.bg.active};
    --bg-danger-hover: ${colorsLightTheme.buttons.danger.bg.hover};
    --bg-danger-active: ${colorsLightTheme.buttons.danger.bg.active};

    --text-button: ${colorsLightTheme.buttons.default.text.enabled};
    --text-button-hover: ${colorsLightTheme.buttons.default.text.hover};
    --text-button-active: ${colorsLightTheme.buttons.default.text.active};
    --text-button-secondary: ${colorsLightTheme.buttons.secondary.text.enabled};
    --text-button-secondary-hover: ${colorsLightTheme.buttons.secondary.text.hover};
    --text-button-secondary-active: ${colorsLightTheme.buttons.secondary.text.active};
    --text-button-success: ${colorsLightTheme.buttons.success.text.enabled};
    --text-button-success-hover: ${colorsLightTheme.buttons.success.text.hover};
    --text-button-success-active: ${colorsLightTheme.buttons.success.text.active};
    --text-button-info: ${colorsLightTheme.buttons.info.text.enabled};
    --text-button-info-hover: ${colorsLightTheme.buttons.info.text.hover};
    --text-button-info-active: ${colorsLightTheme.buttons.info.text.active};
    --text-button-warning: ${colorsLightTheme.buttons.warning.text.enabled};
    --text-button-warning-hover: ${colorsLightTheme.buttons.warning.text.hover};
    --text-button-warning-active: ${colorsLightTheme.buttons.warning.text.active};
    --text-button-danger: ${colorsLightTheme.buttons.danger.text.enabled};
    --text-button-danger-hover: ${colorsLightTheme.buttons.danger.text.hover};
    --text-button-danger-active: ${colorsLightTheme.buttons.danger.text.active};

    --border-button: ${colorsLightTheme.buttons.default.border.enabled};
    --border-button-hover: ${colorsLightTheme.buttons.default.border.hover};
    --border-button-active: ${colorsLightTheme.buttons.default.border.active};
    --border-button-secondary: ${colorsLightTheme.buttons.secondary.border.enabled};
    --border-button-secondary-hover: ${colorsLightTheme.buttons.secondary.border.hover};
    --border-button-secondary-active: ${colorsLightTheme.buttons.secondary.border.active};
    --border-button-success: ${colorsLightTheme.buttons.success.border.enabled};
    --border-button-success-hover: ${colorsLightTheme.buttons.success.border.hover};
    --border-button-success-active: ${colorsLightTheme.buttons.success.border.active};
    --border-button-info: ${colorsLightTheme.buttons.info.border.enabled};
    --border-button-info-hover: ${colorsLightTheme.buttons.info.border.hover};
    --border-button-info-active: ${colorsLightTheme.buttons.info.border.active};
    --border-button-warning: ${colorsLightTheme.buttons.warning.border.enabled};
    --border-button-warning-hover: ${colorsLightTheme.buttons.warning.border.hover};
    --border-button-warning-active: ${colorsLightTheme.buttons.warning.border.active};
    --border-button-danger: ${colorsLightTheme.buttons.danger.border.enabled};
    --border-button-danger-hover: ${colorsLightTheme.buttons.danger.border.hover};
    --border-button-danger-active: ${colorsLightTheme.buttons.danger.border.active};
    
    --bg-navbutton: ${colorsLightTheme.navbutton.bg.enabled};
    --bg-navbutton-hover: ${colorsLightTheme.navbutton.bg.hover};
    --bg-navbutton-active: ${colorsLightTheme.navbutton.bg.active};
    --bg-navbutton-selected: ${colorsLightTheme.navbutton.bg.selected};
    
    --text-navbutton: ${colorsLightTheme.navbutton.text.enabled};
    --text-navbutton-hover: ${colorsLightTheme.navbutton.text.hover};
    --text-navbutton-active: ${colorsLightTheme.navbutton.text.active};
    --text-navbutton-selected: ${colorsLightTheme.navbutton.text.selected};
    
    --bg-input: ${colorsLightTheme.buttons.default.bg.enabled};
    --bg-input-focus: ${colorsLightTheme.buttons.default.bg.enabled};
    --bg-input-hover: ${colorsLightTheme.buttons.default.bg.hover};

    --text-input: ${colorsLightTheme.buttons.default.text.enabled};
    --text-input-focus: ${colorsLightTheme.buttons.default.text.enabled};
    --text-input-hover: ${colorsLightTheme.buttons.default.text.hover};

    --border-input: ${colorsLightTheme.buttons.default.border.enabled};
    --border-input-focus: ${colorsLightTheme.buttons.default.border.enabled};
    --border-input-hover: ${colorsLightTheme.buttons.default.border.hover};

    --bg-checkbox-selected-enabled: ${colorsLightTheme.checkboxes.selected.bg.enabled};
    --bg-checkbox-selected-hover: ${colorsLightTheme.checkboxes.selected.bg.hover};
    --bg-checkbox-selected-active: ${colorsLightTheme.checkboxes.selected.bg.active};
    --bg-checkbox-unselected-enabled: ${colorsLightTheme.checkboxes.unselected.bg.enabled};
    --bg-checkbox-unselected-hover: ${colorsLightTheme.checkboxes.unselected.bg.hover};
    --bg-checkbox-unselected-active: ${colorsLightTheme.checkboxes.unselected.bg.active};

    --text-checkbox-selected-enabled: ${colorsLightTheme.checkboxes.selected.text.enabled};
    --text-checkbox-selected-hover: ${colorsLightTheme.checkboxes.selected.text.hover};
    --text-checkbox-selected-active: ${colorsLightTheme.checkboxes.selected.text.active};
    --text-checkbox-unselected-enabled: ${colorsLightTheme.checkboxes.unselected.text.enabled};
    --text-checkbox-unselected-hover: ${colorsLightTheme.checkboxes.unselected.text.hover};
    --text-checkbox-unselected-active: ${colorsLightTheme.checkboxes.unselected.text.active};

    --border-checkbox-selected-enabled: ${colorsLightTheme.checkboxes.selected.border.enabled};
    --border-checkbox-selected-hover: ${colorsLightTheme.checkboxes.selected.border.hover};
    --border-checkbox-selected-active: ${colorsLightTheme.checkboxes.selected.border.active};
    --border-checkbox-unselected-enabled: ${colorsLightTheme.checkboxes.unselected.border.enabled};
    --border-checkbox-unselected-hover: ${colorsLightTheme.checkboxes.unselected.border.hover};
    --border-checkbox-unselected-active: ${colorsLightTheme.checkboxes.unselected.border.active};
  }
  .dark {
    color-scheme: dark;
    --bg-body: ${colorsDarkTheme['body-bg']};
    --border-body: ${colorsDarkTheme['body-border']};
    --bg-window: ${colorsDarkTheme['window-bg']};
    --border-window: ${colorsDarkTheme['window-border']};

    --text-primary: ${colorsDarkTheme['text-primary']};
    --text-secondary: ${colorsDarkTheme['text-secondary']};
    --text-tertiary: ${colorsDarkTheme['text-tertiary']};

    --bg-button: ${colorsDarkTheme.buttons.default.bg.enabled};
    --bg-button-hover: ${colorsDarkTheme.buttons.default.bg.hover};
    --bg-button-active: ${colorsDarkTheme.buttons.default.bg.active};

    --bg-button-secondary: ${colorsDarkTheme.buttons.secondary.bg.enabled};
    --bg-button-secondary-hover: ${colorsDarkTheme.buttons.secondary.bg.hover};
    --bg-button-secondary-active: ${colorsDarkTheme.buttons.secondary.bg.active};

    --bg-success-hover: ${colorsDarkTheme.buttons.success.bg.hover};
    --bg-success-active: ${colorsDarkTheme.buttons.success.bg.active};
    --bg-info-hover: ${colorsDarkTheme.buttons.info.bg.hover};
    --bg-info-active: ${colorsDarkTheme.buttons.info.bg.active};
    --bg-warning-hover: ${colorsDarkTheme.buttons.warning.bg.hover};
    --bg-warning-active: ${colorsDarkTheme.buttons.warning.bg.active};
    --bg-danger-hover: ${colorsDarkTheme.buttons.danger.bg.hover};
    --bg-danger-active: ${colorsDarkTheme.buttons.danger.bg.active};

    --text-button: ${colorsDarkTheme.buttons.default.text.enabled};
    --text-button-hover: ${colorsDarkTheme.buttons.default.text.hover};
    --text-button-active: ${colorsDarkTheme.buttons.default.text.active};
    --text-button-secondary: ${colorsDarkTheme.buttons.secondary.text.enabled};
    --text-button-secondary-hover: ${colorsDarkTheme.buttons.secondary.text.hover};
    --text-button-secondary-active: ${colorsDarkTheme.buttons.secondary.text.active};
    --text-button-success: ${colorsDarkTheme.buttons.success.text.enabled};
    --text-button-success-hover: ${colorsDarkTheme.buttons.success.text.hover};
    --text-button-success-active: ${colorsDarkTheme.buttons.success.text.active};
    --text-button-info: ${colorsDarkTheme.buttons.info.text.enabled};
    --text-button-info-hover: ${colorsDarkTheme.buttons.info.text.hover};
    --text-button-info-active: ${colorsDarkTheme.buttons.info.text.active};
    --text-button-warning: ${colorsDarkTheme.buttons.warning.text.enabled};
    --text-button-warning-hover: ${colorsDarkTheme.buttons.warning.text.hover};
    --text-button-warning-active: ${colorsDarkTheme.buttons.warning.text.active};
    --text-button-danger: ${colorsDarkTheme.buttons.danger.text.enabled};
    --text-button-danger-hover: ${colorsDarkTheme.buttons.danger.text.hover};
    --text-button-danger-active: ${colorsDarkTheme.buttons.danger.text.active};

    --border-button: ${colorsDarkTheme.buttons.default.border.enabled};
    --border-button-hover: ${colorsDarkTheme.buttons.default.border.hover};
    --border-button-active: ${colorsDarkTheme.buttons.default.border.active};
    --border-button-secondary: ${colorsDarkTheme.buttons.secondary.border.enabled};
    --border-button-secondary-hover: ${colorsDarkTheme.buttons.secondary.border.hover};
    --border-button-secondary-active: ${colorsDarkTheme.buttons.secondary.border.active};
    --border-button-success: ${colorsDarkTheme.buttons.success.border.enabled};
    --border-button-success-hover: ${colorsDarkTheme.buttons.success.border.hover};
    --border-button-success-active: ${colorsDarkTheme.buttons.success.border.active};
    --border-button-info: ${colorsDarkTheme.buttons.info.border.enabled};
    --border-button-info-hover: ${colorsDarkTheme.buttons.info.border.hover};
    --border-button-info-active: ${colorsDarkTheme.buttons.info.border.active};
    --border-button-warning: ${colorsDarkTheme.buttons.warning.border.enabled};
    --border-button-warning-hover: ${colorsDarkTheme.buttons.warning.border.hover};
    --border-button-warning-active: ${colorsDarkTheme.buttons.warning.border.active};
    --border-button-danger: ${colorsDarkTheme.buttons.danger.border.enabled};
    --border-button-danger-hover: ${colorsDarkTheme.buttons.danger.border.hover};
    --border-button-danger-active: ${colorsDarkTheme.buttons.danger.border.active};
    
    --bg-navbutton: ${colorsDarkTheme.navbutton.bg.enabled};
    --bg-navbutton-hover: ${colorsDarkTheme.navbutton.bg.hover};
    --bg-navbutton-active: ${colorsDarkTheme.navbutton.bg.active};
    --bg-navbutton-selected: ${colorsDarkTheme.navbutton.bg.selected};
    
    --text-navbutton: ${colorsDarkTheme.navbutton.text.enabled};
    --text-navbutton-hover: ${colorsDarkTheme.navbutton.text.hover};
    --text-navbutton-active: ${colorsDarkTheme.navbutton.text.active};
    --text-navbutton-selected: ${colorsDarkTheme.navbutton.text.selected};
    
    --bg-input: ${colorsDarkTheme.buttons.default.bg.enabled};
    --bg-input-focus: ${colorsDarkTheme.buttons.default.bg.enabled};
    --bg-input-hover: ${colorsDarkTheme.buttons.default.bg.hover};

    --text-input: ${colorsDarkTheme.buttons.default.text.enabled};
    --text-input-focus: ${colorsDarkTheme.buttons.default.text.enabled};
    --text-input-hover: ${colorsDarkTheme.buttons.default.text.hover};

    --border-input: ${colorsDarkTheme.buttons.default.border.enabled};
    --border-input-focus: ${colorsDarkTheme.buttons.default.border.enabled};
    --border-input-hover: ${colorsDarkTheme.buttons.default.border.hover};

    --bg-checkbox-selected-enabled: ${colorsDarkTheme.checkboxes.selected.bg.enabled};
    --bg-checkbox-selected-hover: ${colorsDarkTheme.checkboxes.selected.bg.hover};
    --bg-checkbox-selected-active: ${colorsDarkTheme.checkboxes.selected.bg.active};
    --bg-checkbox-unselected-enabled: ${colorsDarkTheme.checkboxes.unselected.bg.enabled};
    --bg-checkbox-unselected-hover: ${colorsDarkTheme.checkboxes.unselected.bg.hover};
    --bg-checkbox-unselected-active: ${colorsDarkTheme.checkboxes.unselected.bg.active};

    --text-checkbox-selected-enabled: ${colorsDarkTheme.checkboxes.selected.text.enabled};
    --text-checkbox-selected-hover: ${colorsDarkTheme.checkboxes.selected.text.hover};
    --text-checkbox-selected-active: ${colorsDarkTheme.checkboxes.selected.text.active};
    --text-checkbox-unselected-enabled: ${colorsDarkTheme.checkboxes.unselected.text.enabled};
    --text-checkbox-unselected-hover: ${colorsDarkTheme.checkboxes.unselected.text.hover};
    --text-checkbox-unselected-active: ${colorsDarkTheme.checkboxes.unselected.text.active};

    --border-checkbox-selected-enabled: ${colorsDarkTheme.checkboxes.selected.border.enabled};
    --border-checkbox-selected-hover: ${colorsDarkTheme.checkboxes.selected.border.hover};
    --border-checkbox-selected-active: ${colorsDarkTheme.checkboxes.selected.border.active};
    --border-checkbox-unselected-enabled: ${colorsDarkTheme.checkboxes.unselected.border.enabled};
    --border-checkbox-unselected-hover: ${colorsDarkTheme.checkboxes.unselected.border.hover};
    --border-checkbox-unselected-active: ${colorsDarkTheme.checkboxes.unselected.border.active};
  }
  body {
    -webkit-tap-highlight-color: ${colorPalettes.yellow['500']};
    ${tw`antialiased`}
  }
`

export default darkModeConfig
