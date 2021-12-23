import React from 'react'
import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import colors from '../hb_ui/constants/colors'

const customStyles = css`
  .light {
    --color-primary: ${colors.green_primary};
    --color-info: ${colors.blue_bright};
    --color-warning: ${colors.orange};
    --color-danger: ${colors.red};
    --bg-brand: ${colors.green_primary};
    --bg-primary: #ffffff;
    --bg-secondary: ${colors.greyscale_light_100};
    --bg-tertiary: ${colors.greyscale_light_200};
    --text-brand: ${colors.green_primary};
    --text-primary: ${colors.greyscale_dark_700};
    --text-secondary: ${colors.greyscale_dark_600};
    --text-tertiary: ${colors.greyscale_dark_400};
    --fill-primary: ${colors.greyscale_dark_700};
    --fill-secondary: ${colors.greyscale_dark_600};
    --fill-tertiary: ${colors.greyscale_dark_400};
  }
  .dark {
    --color-primary: ${colors.green_primary};
    --color-info: ${colors.blue_bright};
    --color-warning: ${colors.orange};
    --color-danger: ${colors.red};
    --bg-brand: ${colors.green_primary};
    --bg-primary: ${colors.greyscale_dark_700};
    --bg-secondary: ${colors.greyscale_dark_600};
    --bg-tertiary: ${colors.greyscale_dark_500};
    --text-brand: ${colors.green_primary};
    --text-primary: #ffffff;
    --text-secondary: ${colors.greyscale_light_200};
    --text-tertiary: ${colors.greyscale_light_400};
    --fill-brand: ${colors.green_primary};
    --fill-primary: #ffffff;
    --fill-secondary: ${colors.greyscale_light_200};
    --fill-tertiary: ${colors.greyscale_light_400};
    --color-primary: ${colors.green_primary};
  body {
    -webkit-tap-highlight-color: ${colors.yellow};
    ${tw`antialiased`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
