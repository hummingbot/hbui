/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import { Link } from 'gatsby'
import tw, { css, styled } from 'twin.macro'
import { H1, H5, H6, P, PSmall } from '../../hbui/elements/typography'
import DSMSidebar from '../components/sidebar/DSMSidebar'
import Layout from '../components/layout'
import navigation from '../components/sidebar/navigation'
import TriangleRight from '../components/sidebar/TriangleRight'

import ThemeToggle from '../../hbui/system/ThemeToggle'
import packageJson from '../../package.json'

const Navigation = () => (
  <div tw='w-full'>
    <Layout navigationPage={true}>
      <MobileNav>
        <MobileNavBrand>
          <H5 isBold tw='text-green dark:text-terminal'>HBUI</H5>
          <P isMedium tw='text-secondary'>Hummingbot Design System</P>
          <P isMedium tw='text-secondary'>v{packageJson.version}</P>
        </MobileNavBrand>
        <ThemeToggle />
        <br />
        <br />
        <br />
        <MobileNavNav>
          {navigation.map(navItem => (
            <NavItemRoot key={navItem.title} hasSubItems={navItem.subItems}>
              <MobileNavNavItem
                activeClassName='is-active'
                to={navItem.link}
              >
                <H6>{navItem.title}</H6>
                {navItem.subItems && <TriangleRight />}
              </MobileNavNavItem>
              <div tw='flex flex-col items-start'>
                { navItem.subItems &&
                  navItem.subItems.map(subItem => (
                    <SubMobileNavNavItem
                      key={subItem.link}
                      activeClassName='is-active'
                      to={subItem.link}
                    >
                      <H6>{subItem.title}</H6>
                    </SubMobileNavNavItem>
                  ))}
              </div>
            </NavItemRoot>
          ))}
          <br />
          <br />
        </MobileNavNav>
      </MobileNav>
    </Layout>
  </div>
)

export default Navigation

const MobileNav = styled.div(() => [
  tw`bg-window p-sm lg:p-md`,
  css`
    overflow-y: scroll;
    height: 100vh;
  `,
])


const MobileNavBrand = styled.div({
  marginBottom: '30px',
  '& p': {
    padding: '0',
  },
})

const MobileNavNav = styled.nav({
  display: 'flex',
  flexDirection: 'column',
})

const NavItemRoot = styled.div(({ hasSubItems }) => [
  hasSubItems && tw`my-3`,
])

const MobileNavNavItem = styled(Link)(({ hasSubItems }) => [
  tw`py-0.5 text-green dark:text-terminal`,
  css`
    display: inline-flex;
    justify-content: space-between;
    font-weight: ${hasSubItems ? '600' : '400'};
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

const SubMobileNavNavItem = styled(MobileNavNavItem)({},
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
