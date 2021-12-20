import tw, { css } from "twin.macro"
// const colors = require('./src/hb_ui/constants/colors')

const stylesBase = css`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #475569;
    --text-secondary: #1e293b;
    --color-primary: #e11d48;
  }
  .dark {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #cbd5e1;
    --text-secondary: #ffffff;
    --color-primary: #2563eb;
  }
  body {
    margin: 0 !important;
    ${tw`bg-primary text-primary transition-all duration-200`}
  }
`

export default stylesBase
