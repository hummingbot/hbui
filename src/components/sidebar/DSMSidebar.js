import React from 'react'
import { Link } from 'gatsby'
import tw, { css, styled } from 'twin.macro'
import { P, PSmall } from '../../../hbui/elements/typography'
import navigation from './navigation'

import ThemeToggle from '../../../hbui/system/ThemeToggle'
import packageJson from '../../../package.json'

function DSMSidebar({...props}) {
  return (
    <div {...props} tw='relative'>
      <Sidebar>
        <a tw='block flex justify-end' href='https://github.com/hummingbot/hbui' target='_blank' rel='noreferrer'>
          <GithubIcon />
        </a>
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
  tw`bg-window p-2 lg:p-5 border-r-2 border-green dark:border-terminal`,
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

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      tw='fill-current text-primary'
    >
      <path
        d="M6.986 16.105c0-.082-.085-.165-.212-.165s-.212.083-.212.165c0 .083.085.165.212.124.127 0 .212-.041.212-.124zM5.673 15.9c0 .082.085.206.212.206.085.042.212 0 .254-.082 0-.083-.042-.165-.17-.207-.126-.041-.253 0-.296.083zm1.906-.041c-.127 0-.212.082-.212.206 0 .083.127.124.254.083.127-.042.212-.083.17-.166 0-.082-.128-.165-.212-.123zM10.33 0C4.488 0 0 4.377 0 10.076a10.4 10.4 0 007.155 9.911c.55.083.72-.248.72-.495v-2.56s-2.964.619-3.599-1.24c0 0-.466-1.197-1.143-1.486 0 0-.974-.661.042-.661 0 0 1.059.082 1.652 1.074.931 1.61 2.455 1.156 3.09.867.085-.66.34-1.115.678-1.404-2.371-.248-4.785-.578-4.785-4.543 0-1.156.34-1.693 1.017-2.436-.127-.29-.466-1.363.127-2.808C5.8 4.047 7.875 5.41 7.875 5.41c.847-.248 1.736-.33 2.625-.33.931 0 1.82.082 2.667.33 0 0 2.033-1.404 2.922-1.115.593 1.445.211 2.519.127 2.808.677.743 1.1 1.28 1.1 2.436 0 3.965-2.497 4.295-4.868 4.543.38.33.72.95.72 1.94 0 1.363-.043 3.098-.043 3.428 0 .29.212.62.762.496C18.121 18.583 21 14.66 21 10.076 21 4.377 16.216 0 10.33 0zM4.107 14.247c-.085.041-.042.165 0 .248.085.041.17.082.254.041.042-.041.042-.165-.042-.248-.085-.041-.17-.082-.212-.041zm-.466-.33c-.042.082 0 .123.085.165.084.041.17.041.212-.042 0-.04-.043-.082-.128-.123-.084-.042-.127-.042-.169 0zm1.355 1.486c-.042.042-.042.165.085.248.084.083.211.124.254.041.042-.041.042-.165-.043-.247-.084-.083-.211-.124-.296-.042zm-.466-.62c-.084.042-.084.166 0 .249.085.082.17.123.254.082.043-.041.043-.165 0-.248-.084-.082-.17-.123-.254-.082z"
      ></path>
    </svg>
  );
}
