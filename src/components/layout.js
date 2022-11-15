/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { ThemeProvider } from '../../hbui/system/ThemeContext'
import HBUIGlobalStyles from '../../hbui/system/GlobalStyles'
import DSMSidebar from './sidebar/DSMSidebar'

const Layout = ({ children, ...rest }) => (
  <div {...rest} tw='bg-body'>
    <HBUIGlobalStyles />
    <ThemeProvider>
      <div tw='grid grid-cols-1 md:(grid-cols-10 gap-0)'>
        <DSMSidebar tw='hidden col-span-1 md:(block col-span-2)' />
        <div tw='block bg-body col-span-1 h-auto md:(h-screen col-span-8 overflow-y-scroll)'>
          {children}
        </div>
      </div>
    </ThemeProvider>
  </div>
)

export default Layout
