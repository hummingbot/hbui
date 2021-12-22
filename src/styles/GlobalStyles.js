import React from 'react'
import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import colors from '../hb_ui/constants/colors'

const customStyles = css`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: ${colors.greyscale_light_100};
    --bg-tertiary: ${colors.greyscale_light_200};
    --text-primary: ${colors.greyscale_dark_700};
    --text-secondary: ${colors.greyscale_dark_600};
    --text-tertiary: ${colors.greyscale_dark_400};
    --fill-primary: ${colors.greyscale_dark_700};
    --fill-secondary: ${colors.greyscale_dark_600};
    --fill-tertiary: ${colors.greyscale_dark_400};
    --color-primary: ${colors.green_primary};
  }
  .dark {
    --bg-primary: ${colors.greyscale_dark_700};
    --bg-secondary: ${colors.greyscale_dark_600};
    --bg-tertiary: ${colors.greyscale_dark_500};
    --text-primary: #ffffff;
    --text-secondary: ${colors.greyscale_light_200};
    --text-tertiary: ${colors.greyscale_light_400};
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
