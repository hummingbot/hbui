import React from 'react'
import { Link } from 'gatsby'
import tw, { css, styled } from 'twin.macro'
// import GlobalSwitcherIcon from './GlobalSwitcherIcon'
import TriangleRight from './TriangleRight'
import { P, PSmall } from '../../../hbui/elements/typography'
import navigation from './navigation'

import ThemeToggle from '../../../hbui/system/ThemeToggle'
import packageJson from '../../../package.json'

function DSMSidebar({...props}) {
  return (
    <div {...props} tw='relative'>
      <Sidebar>
        <SidebarBrand>
          <P isBold tw='pb-sm text-primary dark:text-terminal'>HBUI</P>
          <PSmall isMedium tw='text-secondary'>Hummingbot Design System</PSmall>
          <PSmall isMedium tw='text-secondary'>v{packageJson.version}</PSmall>
        </SidebarBrand>
        <ThemeToggle />
        <br />
        <br />
        <br />
        <SidebarNav>
          {navigation.map(navItem => (
            <NavItemRoot key={navItem.title} hasSubItems={navItem.subItems}>
              <SidebarNavItem
                activeClassName='is-active'
                to={navItem.link}
              >
                <P>{navItem.title}</P>
                {navItem.subItems && <TriangleRight />}
              </SidebarNavItem>
              { navItem.subItems &&
                navItem.subItems.map(subItem => (
                  <SubSidebarNavItem
                    key={subItem.link}
                    activeClassName='is-active'
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
    </div>
  )
}

export default DSMSidebar

const Sidebar = styled.div(() => [
  tw`bg-window p-2 lg:p-5`,
  css`
    overflow-y: scroll;
    height: 100vh;
  `,
])


const SidebarBrand = styled.div({
  width: '100%',
  marginBottom: '30px',
  '& p': {
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

const SidebarNavItem = styled(Link)(({ hasSubItems }) => [
  tw`py-0.5 text-green dark:text-terminal`,
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

const SubSidebarNavItem = styled(SidebarNavItem)({},
  [tw`pl-3 lg:pl-4`],
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
