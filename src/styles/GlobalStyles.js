import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import darkModeConfig from '../hb_ui/system/darkModeConfig'
import './satoshi.css'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={darkModeConfig} />
  </>
)

export default GlobalStyles
