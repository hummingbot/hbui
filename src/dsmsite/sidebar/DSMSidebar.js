import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import tw, { css, styled, theme } from 'twin.macro'
import { H1, H3 } from '../../hb_ui/elements/typography'
import colors from '../../hb_ui/constants/colors'
import GlobalSwitcherIcon from '../../hb_ui/svgs/GlobalSwitcherIcon'
import TriangleRight from '../../hb_ui/svgs/TriangleRight'
import { P } from '../../hb_ui/elements/typography'
import { desktop_max } from '../../hb_ui/constants/media-queries'
import navigation from './navigation'

import { ThemeToggle } from '../../styles'

const { green } = colors

function DSMSidebar() {
  let location = useLocation()
  const [currentSection, setCurrentSection] = useState(location.pathname)
  return (
    <Sidebar>
      <PaddingBox>
        <SidebarBrand>
          {/*<GlobalSwitcherIcon />*/}
          <P isMedium>CoinAlpha DSM</P>
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
              hasSubItems={navItem.subItems}
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
  tw`bg-primary z-10 overflow-y-scroll transition-all duration-100 fixed top-0 w-[270px] left-[-270px] md:left-0`,
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
  tw`py-0.5 px-5 text-black dark:(text-white) border-l-4 border-transparent`,
  css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-weight: ${hasSubItems ? '600' : '400'};
    align-items: center;
    &:hover p {
      color: ${green};
    }
    svg {
      ${tw`transition-transform`};
    }
    &.active {
      ${tw`bg-tertiary border-l-4 border-quaternary`};
      svg {
        transform: rotate(90deg);
      }
    }
    &.is-active {
      p {
        ${tw`font-bold`};
      }
    }
  `,
])

// const SidebarNavItem = styled(NavLink)(
//   {
//     display: 'flex',
//     width: '100%',
//     justifyContent: 'space-between',
//     fontWeight: props.hasSubItems ? '600' : '400',
//     alignItems: 'center',
//     ':hover': {
//       '& p': {
//         color: green,
//       },
//     },
//   },
//   [tw`py-0.5 px-5 text-black dark:(text-white) border-l-4 border-transparent`],
//   css`
//     svg {
//       ${tw`transition-transform`};
//     }
//     &.active {
//       ${tw`bg-tertiary border-l-4 border-quaternary`};
//       svg {
//         transform: rotate(90deg);
//       }
//     }
//     &.is-active {
//       p {
//         ${tw`font-bold`};
//       }
//     }
//   `,
// )

const SubSidebarNavItem = styled(SidebarNavItem)({
  borderLeft: 'none !important',
},
  [tw`pl-11`],
  css`
    &.active {
      ${tw`bg-secondary`};
    }
    &.is-active {
      p {
        ${tw`font-bold`};
      }
    }
  `,
)
