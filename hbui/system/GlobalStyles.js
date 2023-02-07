import React from 'react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import HBUIColors from './HBUIColors'

// load fonts
import '../assets/fonts/inter/inter.css'
import '../assets/fonts/satoshi/satoshi.css'
import '../assets/fonts/sfmono/sfmono.css'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <HBUIColors />
  </>
)

export default GlobalStyles
