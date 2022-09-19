import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import tw, { css, styled, theme } from 'twin.macro'
import { H1, H3 } from '../../../hbui/elements/typography'
import GlobalSwitcherIcon from './GlobalSwitcherIcon'
import TriangleRight from './TriangleRight'
import { P } from '../../../hbui/elements/typography'
import navigation from './navigation'

import ThemeToggle from '../../../hbui/system/ThemeToggle'

function DSMSidebar() {
  let location = useLocation()
  const [currentSection, setCurrentSection] = useState(location.pathname)
  return (
    <Sidebar>
      <PaddingBox>
        <SidebarBrand>
          {/*<GlobalSwitcherIcon />*/}
          <P isMedium tw='text-primary dark:text-terminal'>HBUI DS 1.4.0</P>
        </SidebarBrand>
      </PaddingBox>
      <ThemeToggle />
      <br />
      <br />
      <br />
      <SidebarNav>
        {navigation.map(navItem => (
          <NavItemRoot key={navItem.title} hasSubItems={navItem.subItems}>
            <SidebarNavItem
              onClick={() => setCurrentSection(navItem.link)}
              to={navItem.link}
              className={getActiveClass(navItem.link, currentSection)}
            >
              <P>{navItem.title}</P>
              {navItem.subItems && <TriangleRight />}
            </SidebarNavItem>
            { navItem.subItems &&
              navItem.subItems.map(subItem => (
                <SubSidebarNavItem
                  key={subItem.link}
                  onClick={() => setCurrentSection(subItem.link)}
                  className={getActiveClass(subItem.link, currentSection)}
                  to={subItem.link}
                >
                  <P>{subItem.title}</P>
                </SubSidebarNavItem>
              ))}
          </NavItemRoot>
        ))}
        <br />
        <br />
      </SidebarNav>
    </Sidebar>
  )
}

export default DSMSidebar

const getActiveClass = (link, currentSection) => {
  if (currentSection === link) return 'is-active'
  return ''
}

const Sidebar = styled.div(() => [
  tw`bg-body z-10 overflow-y-scroll transition-all duration-100 fixed top-0 w-[270px] left-[-270px] md:left-0`,
  css`
    height: 100vh;
  `,
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
    marginLeft: '5px',
    padding: '0',
  },
})

const SidebarNav = styled.nav({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const NavItemRoot = styled.div(({ hasSubItems }) => [
  hasSubItems && tw`my-3`,
])

const SidebarNavItem = styled(NavLink)(({ hasSubItems }) => [
  tw`py-0.5 px-5 text-green dark:text-terminal border-l-4 border-transparent`,
  css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-weight: ${hasSubItems ? '600' : '400'};
    align-items: center;
    &:hover p {
      ${tw`text-green dark:text-terminal`};
    }
    svg {
      ${tw`transition-transform`};
    }
    &.active {
      ${tw`border-l-4 border-window`};
      svg {
        transform: rotate(90deg);
      }
    }
    &.is-active {
      p {
        ${tw`font-bold text-green dark:text-terminal`};
      }
    }
  `,
])

const SubSidebarNavItem = styled(SidebarNavItem)({
  borderLeft: 'none !important',
},
  [tw`pl-11`],
  css`
    &.active {
      ${tw`bg-window`};
    }
    &.is-active {
      p {
        ${tw`font-bold`};
      }
    }
  `,
)
