import React, { useState } from 'react'
import {
  NavLink,
  useLocation,
} from "react-router-dom";
import tw, { css, styled, theme } from 'twin.macro'
import { H1, H3 } from '../../hb_ui/elements/typography'
import colors from '../../hb_ui/constants/colors'
import HummingbotLogo from '../../ui_svgs/HummingbotLogo'
import TriangleRight from '../../ui_svgs/TriangleRight'
import { P } from '../../hb_ui/elements/typography'
import { desktop_max } from '../../hb_ui/constants/media-queries'
import navigation from './navigation'

import { ThemeToggle } from "../../styles"

const {
  green_primary,
} = colors

function DSMSidebar() {
  let location = useLocation()
  const [currentSection, setCurrentSection] = useState(location.pathname);
  return (
    <Sidebar>
      <PaddingBox>
        <SidebarBrand>
          <HummingbotLogo />
          <P isMedium>CoinAlpha DSM</P>
        </SidebarBrand>
      </PaddingBox>
      <br />
      <br />
      <SidebarNav>
        { navigation.map(navItem =>
          <div key={navItem.title}>
            <SidebarNavItem
              onClick={() => setCurrentSection(navItem.link)}
              to={navItem.link}>
                <P>{navItem.title}</P>
                {navItem.subItems && <TriangleRight />}
            </SidebarNavItem>
            {currentSection.indexOf(navItem.link) > -1 && navItem.subItems &&
              navItem.subItems.map(subItem =>
                <SubSidebarNavItem
                  key={subItem.link}
                  onClick={() => setCurrentSection(subItem.link)}
                  to={subItem.link}>
                    <P>{subItem.title}</P>
                </SubSidebarNavItem>
              )
            }
          </div>
        )}
        <br />
        <br />
        <div tw="h-full flex justify-center items-center">
          <ThemeToggle />
        </div>
      </SidebarNav>
    </Sidebar>
  )
}

export default DSMSidebar

const Sidebar = styled.div(() => [
  tw`bg-primary w-[0] md:w-[270px]`,
  css`
    height: 100vh;
    ${[desktop_max]} {
      opacity: 0;
    }
  `
])

const PaddingBox = styled.div({
  padding: '20px',
  textAlign: 'left',
})

const SidebarBrand = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: '30px',
  '& p': {
    marginLeft: '10px',
    padding: '0',
  }
})

const SidebarNav = styled.nav({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const SidebarNavItem = styled(NavLink)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '4px',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderLeft: '4px solid transparent',
  '&.active': {
    borderLeft: `4px solid ${green_primary}`,
    '& p': {
      color: green_primary
    }
  },
  ':hover': {
    '& p': {
      color: green_primary
    }
  }
}, [
  tw`text-black dark:(text-white)`
])

const SubSidebarNavItem = styled(SidebarNavItem)({
  borderLeft: 'none !important',
  paddingLeft: '40px',
})
