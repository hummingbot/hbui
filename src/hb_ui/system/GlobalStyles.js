import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import darkModeConfig from './darkModeConfig'
import '../assets/fonts/inter/inter.css'
import '../assets/fonts/satoshi/satoshi.css'
import '../assets/fonts/sfmono/sfmono.css'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={darkModeConfig} />
  </>
)

export default GlobalStyles
