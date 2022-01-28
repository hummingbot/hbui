import React from 'react'
import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import colors from '../hb_ui/constants/colors'

const customStyles = css`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: ${colors.greyscale_light_100};
    --bg-tertiary: ${colors.greyscale_light_200};
    --bg-quaternary: ${colors.greyscale_light_400};

    --border-primary: ${colors.greyscale_light_200};
    --border-secondary: ${colors.greyscale_light_300};
    --border-tertiary: ${colors.greyscale_light_400};

    --text-primary: ${colors.greyscale_dark_700};
    --text-secondary: ${colors.greyscale_dark_600};
    --text-tertiary: ${colors.greyscale_dark_400};
    --text-quaternary: ${colors.greyscale_light_600};
  }
  .dark {
    --bg-primary: ${colors.greyscale_dark_700};
    --bg-secondary: ${colors.greyscale_dark_600};
    --bg-tertiary: ${colors.greyscale_dark_500};
    --bg-quaternary: ${colors.greyscale_dark_300};

    --border-primary: ${colors.greyscale_dark_400};
    --border-secondary: ${colors.greyscale_dark_200};
    --border-tertiary: ${colors.greyscale_dark_100};

    --text-primary: #ffffff;
    --text-secondary: ${colors.greyscale_light_200};
    --text-tertiary: ${colors.greyscale_light_400};
    --text-quaternary: ${colors.greyscale_light_600};
  }
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
