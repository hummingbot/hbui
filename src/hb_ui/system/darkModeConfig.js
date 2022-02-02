import { css } from '@emotion/react'
import tw from 'twin.macro'
import colorTokens from '../../../tokens/tokens.json'

const darkModeConfig = css`
  .light {
    --bg-primary: ${colorTokens.light.bg_primary.value};
    --bg-secondary: ${colorTokens.light.bg_secondary.value};
    --bg-tertiary: ${colorTokens.light.bg_tertiary.value};
    --bg-quaternary: ${colorTokens.light.bg_quaternary.value};

    --border-primary: ${colorTokens.light.border_primary.value};
    --border-secondary: ${colorTokens.light.border_secondary.value};
    --border-tertiary: ${colorTokens.light.border_tertiary.value};
    --border-quaternary: ${colorTokens.light.border_quaternary.value};

    --text-primary: ${colorTokens.light.text_primary.value};
    --text-secondary: ${colorTokens.light.text_secondary.value};
    --text-tertiary: ${colorTokens.light.text_tertiary.value};
    --text-quaternary: ${colorTokens.light.text_quaternary.value};
  }
  .dark {
    --bg-primary: ${colorTokens.dark.bg_primary.value};
    --bg-secondary: ${colorTokens.dark.bg_secondary.value};
    --bg-tertiary: ${colorTokens.dark.bg_tertiary.value};
    --bg-quaternary: ${colorTokens.dark.bg_quaternary.value};

    --border-primary: ${colorTokens.dark.border_primary.value};
    --border-secondary: ${colorTokens.dark.border_secondary.value};
    --border-tertiary: ${colorTokens.dark.border_tertiary.value};
    --border-quaternary: ${colorTokens.dark.border_quaternary.value};

    --text-primary: ${colorTokens.dark.text_primary.value};
    --text-secondary: ${colorTokens.dark.text_secondary.value};
    --text-tertiary: ${colorTokens.dark.text_tertiary.value};
    --text-quaternary: ${colorTokens.dark.text_quaternary.value};
  }
  body {
    -webkit-tap-highlight-color: ${colorTokens.global.yellow.value};
    ${tw`antialiased`}
  }
`

export default darkModeConfig