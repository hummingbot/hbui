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
      <DSMSidebar />
      <Main>
        {children}
      </Main>
    </ThemeProvider>
  </div>
)

export default Layout

const Main = styled.div(() => [
  tw`bg-body transition-all w-full ml-0 md:(ml-[270px] w-[calc(100% - 270px)])`,
])
