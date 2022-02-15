import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import darkModeConfig from '../hb_ui/system/darkModeConfig'
import './fonts/satoshi/satoshi.css'
import './fonts/sfmono/sfmono.css'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={darkModeConfig} />
  </>
)

export default GlobalStyles
