import React from 'react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import HBUIColors from './HBUIColors'

import '@hummingbot/hbui/assets/fonts/inter/inter.css'
import '@hummingbot/hbui/assets/fonts/satoshi/satoshi.css'
import '@hummingbot/hbui/assets/fonts/sfmono/sfmono.css'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <HBUIColors />
  </>
)

export default GlobalStyles
