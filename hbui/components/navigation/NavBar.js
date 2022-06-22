import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { P, Body, Bold } from '../../elements/typography'
import HummingbotLogo from '../../assets/svgs/logos/HummingbotLogo'
import CoinAlphaLogo from '../../assets/svgs/logos/CoinAlphaLogo'
import TriangleDown from '../../assets/svgs/arrows/TriangleDown'
import Chip from '../chip'
import ThemeToggle from '../../system/ThemeToggle'

const NavBar = ({ siteNameA, siteNameB, linksLeft, linksRight, userData, showThemeToggle, logo='hummingbot', ...props }) => {
  return (
    <NavBarRoot>
      <LeftSide>
        <LogoContainer to='/'>
          { logo === 'hummingbot' && <HummingbotLogo /> }
          { logo === 'coinalpha' && <CoinAlphaLogo /> }
          <Body><Bold>{siteNameA}</Bold> {siteNameB}</Body>
        </LogoContainer>
        <LinksRow>
          {linksLeft && linksLeft.map(link =>
            <Chip key={link.url} to={link.url} label={link.label} />
          )}
        </LinksRow>
      </LeftSide>
      <RightSide>
        {showThemeToggle && <ThemeToggle />}
        {
          linksRight &&
          <LinksRow>
            {linksRight.map(link =>
              <Chip key={link.url} to={link.url} label={link.label} />
            )}
          </LinksRow>
        }
        { userData &&
          <Menu>
            { userData.profileImage ?
              <img src={userData.profileImage} alt={userData.name} />
              :
              <ProfileIcon />
            }
            <P>{userData.name}</P>
            <TriangleDown />
          </Menu>
        }
      </RightSide>
    </NavBarRoot>
  )
}

export default NavBar

const NavBarRoot = styled.div(({ isUppercase, isDisabled }) => [
  tw`flex w-full`,
  tw`justify-between items-center`,
  tw`relative py-2 pl-12 pr-4`,
  tw`border-b border-body`,
  css`
    .chip {
      ${tw`mr-1`};
    }
    .theme-toggle {
      ${tw`mr-4`};
    }
  `,
])

const LeftSide = styled.div(({}) => [
  tw`flex`,
  css`
    .logo {
      top: 7px;
      left: 10px;
      ${tw`absolute`};
    }
  `,
])

const LinksRow = styled.div(({}) => [
  tw`hidden lg:flex items-center`,
])

const RightSide = styled.div(({}) => [
  tw`flex items-center`,
  css`
    img {
      ${tw`ml-2 rounded ml-4`};
    }
    svg {
      ${tw`ml-2`};
    }
    p {
      ${tw`ml-2 p-0 font-medium text-base`};
    }
  `,
])

const LogoContainer = styled.div(({}) => [
  tw`flex mr-8`,
  css`
    svg {
      ${tw`mr-2`};
    }
    p {
      ${tw`ml-2 p-0 select-none`};
    }
  `,
])

const Menu = styled.div(({}) => [
  tw`flex cursor-pointer h-[32px] flex items-center`,
])

function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="21"
      tw="fill-current text-secondary"
      viewBox="0 0 22 21"
    >
      <path
        d="M18.188.313H3.813A2.866 2.866 0 00.937 3.187v14.376a2.838 2.838 0 002.875 2.875h14.376a2.866 2.866 0 002.875-2.875V3.188A2.895 2.895 0 0018.188.312zM11 4.625c1.752 0 3.234 1.482 3.234 3.234 0 1.797-1.482 3.235-3.234 3.235a3.221 3.221 0 01-3.234-3.235c0-1.752 1.437-3.234 3.234-3.234zM4.576 17.563c.36-2.426 2.426-4.313 4.987-4.313h2.874c2.516 0 4.583 1.887 4.942 4.313H4.576z"
      ></path>
    </svg>
  );
}
