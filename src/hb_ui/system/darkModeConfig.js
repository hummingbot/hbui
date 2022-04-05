import { css } from '@emotion/react'
import tw from 'twin.macro'
import tokens from '../../../tokens/tokens'

const darkModeConfig = css`
  .light {
    color-scheme: light;
    --bg-primary: ${tokens.colors.light['bg-primary']};
    --bg-secondary: ${tokens.colors.light['bg-secondary']};
    --bg-tertiary: ${tokens.colors.light['bg-tertiary']};
    --bg-quaternary: ${tokens.colors.light['bg-quaternary']};

    --border-primary: ${tokens.colors.light['border-primary']};
    --border-secondary: ${tokens.colors.light['border-secondary']};
    --border-tertiary: ${tokens.colors.light['border-tertiary']};
    --border-quaternary: ${tokens.colors.light['border-quaternary']};

    --text-primary: ${tokens.colors.light['text-primary']};
    --text-secondary: ${tokens.colors.light['text-secondary']};
    --text-tertiary: ${tokens.colors.light['text-tertiary']};
    --text-quaternary: ${tokens.colors.light['text-quaternary']};
  }
  .dark {
    color-scheme: dark;
    --bg-primary: ${tokens.colors.dark['bg-primary']};
    --bg-secondary: ${tokens.colors.dark['bg-secondary']};
    --bg-tertiary: ${tokens.colors.dark['bg-tertiary']};
    --bg-quaternary: ${tokens.colors.dark['bg-quaternary']};

    --border-primary: ${tokens.colors.dark['border-primary']};
    --border-secondary: ${tokens.colors.dark['border-secondary']};
    --border-tertiary: ${tokens.colors.dark['border-tertiary']};
    --border-quaternary: ${tokens.colors.dark['border-quaternary']};

    --text-primary: ${tokens.colors.dark['text-primary']};
    --text-secondary: ${tokens.colors.dark['text-secondary']};
    --text-tertiary: ${tokens.colors.dark['text-tertiary']};
    --text-quaternary: ${tokens.colors.dark['text-quaternary']};
  }
  body {
    -webkit-tap-highlight-color: ${tokens.colors.yellow};
    ${tw`antialiased`}
  }
`

export default darkModeConfig