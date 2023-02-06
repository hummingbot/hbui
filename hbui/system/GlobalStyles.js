import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import darkModeConfig from './darkModeConfig'

const CustomStyles = createGlobalStyle({darkModeConfig})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
