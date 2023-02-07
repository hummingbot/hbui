/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { navigate } from "gatsby"
import { ThemeProvider } from '../../hbui/system/ThemeContext'
import HBUIGlobalStyles from '../../hbui/system/GlobalStyles'
import DSMSidebar from './sidebar/DSMSidebar'

const Layout = ({ children, navigationPage, ...rest }) => (
  <div {...rest} tw='bg-body'>
    <HBUIGlobalStyles />
    <ThemeProvider>
      {!navigationPage && <HamburgerIcon onClick={() => navigate('/navigation')} /> }
      { navigationPage ?
        children :
          <div tw='grid grid-cols-1 md:(grid-cols-10 gap-0)'>
            <DSMSidebar tw='hidden col-span-1 md:(block col-span-2)' />
            <div tw='block bg-body col-span-1 h-auto md:(h-screen col-span-8 overflow-y-scroll)'>
              {children}
            </div>
          </div>
      }
    </ThemeProvider>
  </div>
)

export default Layout

function HamburgerIcon({...props}) {
  return (
    <div tw='block md:hidden cursor-pointer absolute top-4 right-[19px] z-50' {...props}>
      <div tw='w-[16px] h-[2px] mb-[3px] bg-black dark:bg-white'/>
      <div tw='w-[16px] h-[2px] mb-[3px] bg-black dark:bg-white'/>
      <div tw='w-[16px] h-[2px] bg-black dark:bg-white'/>
    </div>
  );
}
