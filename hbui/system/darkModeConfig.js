import { css } from '@emotion/react'
import tw from 'twin.macro'
import tokens from '../tokens'
const colors = tokens.colors
const colorPalettes = colors.color_palettes
const colorsDarkTheme = colors.dark
const colorsLightTheme = colors.light

const darkModeConfig = css`
  .light {
    color-scheme: light;
    --bg-body: ${colorsLightTheme.body_bg};
    --border-body: ${colorsLightTheme.body_border};
    --bg-window: ${colorsLightTheme.window_bg};
    --border-window: ${colorsLightTheme.window_border};

    --text-primary: ${colorsLightTheme.text_primary};
    --text-secondary: ${colorsLightTheme.text_secondary};
    --text-tertiary: ${colorsLightTheme.text_tertiary};

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
    
    --bg-input: ${colorsLightTheme.input.bg.enabled};
    --bg-input-focus: ${colorsLightTheme.input.bg.enabled};
    --bg-input-hover: ${colorsLightTheme.input.bg.hover};

    --text-input: ${colorsLightTheme.input.text.enabled};
    --text-input-focus: ${colorsLightTheme.input.text.focus};
    --text-input-hover: ${colorsLightTheme.input.text.hover};
    --text-input-prefix: ${colorsLightTheme.input.text.prefix};
    --text-input-field_label: ${colorsLightTheme.input.text.field_label};

    --border-input: ${colorsLightTheme.input.border.default};
    --border-input-focus: ${colorsLightTheme.input.border.focus};

    --bg-checkbox-selected-enabled: ${colorsLightTheme.checkbox.selected.bg.enabled};
    --bg-checkbox-selected-hover: ${colorsLightTheme.checkbox.selected.bg.hover};
    --bg-checkbox-selected-active: ${colorsLightTheme.checkbox.selected.bg.active};
    --bg-checkbox-unselected-enabled: ${colorsLightTheme.checkbox.unselected.bg.enabled};
    --bg-checkbox-unselected-hover: ${colorsLightTheme.checkbox.unselected.bg.hover};
    --bg-checkbox-unselected-active: ${colorsLightTheme.checkbox.unselected.bg.active};

    --text-checkbox-selected-enabled: ${colorsLightTheme.checkbox.selected.text.enabled};
    --text-checkbox-selected-hover: ${colorsLightTheme.checkbox.selected.text.hover};
    --text-checkbox-selected-active: ${colorsLightTheme.checkbox.selected.text.active};
    --text-checkbox-unselected-enabled: ${colorsLightTheme.checkbox.unselected.text.enabled};
    --text-checkbox-unselected-hover: ${colorsLightTheme.checkbox.unselected.text.hover};
    --text-checkbox-unselected-active: ${colorsLightTheme.checkbox.unselected.text.active};

    --border-checkbox-selected-enabled: ${colorsLightTheme.checkbox.selected.border.enabled};
    --border-checkbox-selected-hover: ${colorsLightTheme.checkbox.selected.border.hover};
    --border-checkbox-selected-active: ${colorsLightTheme.checkbox.selected.border.active};
    --border-checkbox-unselected-enabled: ${colorsLightTheme.checkbox.unselected.border.enabled};
    --border-checkbox-unselected-hover: ${colorsLightTheme.checkbox.unselected.border.hover};
    --border-checkbox-unselected-active: ${colorsLightTheme.checkbox.unselected.border.active};
  }
  .dark {
    color-scheme: dark;
    --bg-body: ${colorsDarkTheme.body_bg};
    --border-body: ${colorsDarkTheme.body_border};
    --bg-window: ${colorsDarkTheme.window_bg};
    --border-window: ${colorsDarkTheme.window_border};

    --text-primary: ${colorsDarkTheme.text_primary};
    --text-secondary: ${colorsDarkTheme.text_secondary};
    --text-tertiary: ${colorsDarkTheme.text_tertiary};

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
    
    --bg-input: ${colorsDarkTheme.input.bg.enabled};
    --bg-input-focus: ${colorsDarkTheme.input.bg.enabled};
    --bg-input-hover: ${colorsDarkTheme.input.bg.hover};

    --text-input: ${colorsDarkTheme.input.text.enabled};
    --text-input-focus: ${colorsDarkTheme.input.text.focus};
    --text-input-hover: ${colorsDarkTheme.input.text.hover};
    --text-input-prefix: ${colorsDarkTheme.input.text.prefix};
    --text-input-field_label: ${colorsDarkTheme.input.text.field_label};

    --border-input: ${colorsDarkTheme.input.border.default};
    --border-input-focus: ${colorsDarkTheme.input.border.focus};

    --bg-checkbox-selected-enabled: ${colorsDarkTheme.checkbox.selected.bg.enabled};
    --bg-checkbox-selected-hover: ${colorsDarkTheme.checkbox.selected.bg.hover};
    --bg-checkbox-selected-active: ${colorsDarkTheme.checkbox.selected.bg.active};
    --bg-checkbox-unselected-enabled: ${colorsDarkTheme.checkbox.unselected.bg.enabled};
    --bg-checkbox-unselected-hover: ${colorsDarkTheme.checkbox.unselected.bg.hover};
    --bg-checkbox-unselected-active: ${colorsDarkTheme.checkbox.unselected.bg.active};

    --text-checkbox-selected-enabled: ${colorsDarkTheme.checkbox.selected.text.enabled};
    --text-checkbox-selected-hover: ${colorsDarkTheme.checkbox.selected.text.hover};
    --text-checkbox-selected-active: ${colorsDarkTheme.checkbox.selected.text.active};
    --text-checkbox-unselected-enabled: ${colorsDarkTheme.checkbox.unselected.text.enabled};
    --text-checkbox-unselected-hover: ${colorsDarkTheme.checkbox.unselected.text.hover};
    --text-checkbox-unselected-active: ${colorsDarkTheme.checkbox.unselected.text.active};

    --border-checkbox-selected-enabled: ${colorsDarkTheme.checkbox.selected.border.enabled};
    --border-checkbox-selected-hover: ${colorsDarkTheme.checkbox.selected.border.hover};
    --border-checkbox-selected-active: ${colorsDarkTheme.checkbox.selected.border.active};
    --border-checkbox-unselected-enabled: ${colorsDarkTheme.checkbox.unselected.border.enabled};
    --border-checkbox-unselected-hover: ${colorsDarkTheme.checkbox.unselected.border.hover};
    --border-checkbox-unselected-active: ${colorsDarkTheme.checkbox.unselected.border.active};
  }
  body {
    -webkit-tap-highlight-color: ${colorPalettes.yellow['500']};
    ${tw`antialiased`}
  }
`

export default darkModeConfig
