import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { P, Body, H6, Bold } from '../../elements/typography'
import HummingbotLogo from '../../svgs/logos/HummingbotLogo'
import TriangleDown from '../../svgs/arrows/TriangleDown'
import Chip from '../chip'

const NavBar = ({ siteNameA, siteNameB, linksLeft, linksRight, userData, ...props }) => {
  return (
    <NavBarRoot>
      <LeftSide>
        <LogoContainer>
          <HummingbotLogo />
          <Body><Bold>{siteNameA}</Bold> {siteNameB}</Body>
        </LogoContainer>
        <LinksRow>
          {linksLeft.map(link =>
            <Chip key={link.url} to={link.url} label={link.label} />,
          )}
        </LinksRow>
      </LeftSide>
      <RightSide>
        <LinksRow>
          {linksRight.map(link =>
            <Chip key={link.url} to={link.url} label={link.label} />,
          )}
        </LinksRow>
        <img src={userData.profileImage} alt={userData.name} />
        <P>{userData.name}</P>
        <TriangleDown />
      </RightSide>
    </NavBarRoot>
  )
}

export default NavBar

const NavBarRoot = styled.div(({ isUppercase, isDisabled }) => [
  tw`flex w-full bg-primary`,
  tw`justify-between items-center`,
  tw`relative py-2 pl-12 pr-4`,
  tw`border-b-2 border-secondary`,
  css`
    .chip {
      ${tw`mr-1`};
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
  tw`flex items-center`,
])

const RightSide = styled.div(({}) => [
  tw`flex items-center`,
  css`
    img {
      ${tw`rounded ml-4`};
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
