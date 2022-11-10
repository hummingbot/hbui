import React, { useState } from 'react'
import tw, { css, styled } from 'twin.macro'
import { H4, P, PSmall, Body, Bold } from '../../elements/typography'
import { Button } from '../../elements/buttons'
import { Section, Container } from '../../elements/layout'
import HummingbotLogo from '../../assets/svgs/logos/HummingbotLogo'
import CoinAlphaLogo from '../../assets/svgs/logos/CoinAlphaLogo'
import TriangleDown from '../../assets/svgs/arrows/TriangleDown'
import ThemeToggle from '../../system/ThemeToggle'

function NavBar({
  siteNameA,
  siteNameB,
  linksLeft,
  linksRight,
  userData,
  showThemeToggle,
  linkCTA,
  bgColor,
  linkClass,
  customLogoSVG,
  logo,
  position='fixed',
  containerVariant='regular',
  ...props
  }) {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const LinkClass = linkClass
  const processLink = (link) => {
    if (!link.subLinks) {
      return (
        <FirstLevelItem key={link.url}>
          <NavItem>
            <LinkClass to={link.url}>
              <NavP>{link.label}</NavP>
            </LinkClass>
          </NavItem>
        </FirstLevelItem>
      )
    }
    // following code executes if link has property "subLinks"
    return (
      <FirstLevelItem key={link.url}>
        <LinkGroup>
          <NavP tw='relative top-[-1px]'>{link.label}</NavP>
          <Links className='links'>
            {
              link.subLinks.map(subLink => {
                let ItemClass = subLink.external ? NavA : LinkClass
                return (
                  <NavItem key={subLink.label}>
                    <ItemClass to={subLink.url} href={subLink.url} target='_blank' rel="noreferrer">
                      <NavP>{subLink.label}</NavP>
                      {subLink.external && <ExternalLinkIcon />}
                    </ItemClass>
                  </NavItem>
                )
              })
            }
          </Links>
        </LinkGroup>
      </FirstLevelItem>
    )
  }

  const processMobileLink = (link) => {
    // following code executes if link has property "subLinks"
    return (
      <FirstLevelItem key={link.url}>
        {!link.subLinks ?
          <LinkClass to={link.url}>
            <NavMobileH4 onClick={() => setMobileOpen(false)}>{link.label}</NavMobileH4>
          </LinkClass>
          :
          <div>
            <NavMobileH4 tw='opacity-50'>{link.label}</NavMobileH4>
            <div tw='pl-xs'>
              {
                link.subLinks.map(subLink => {
                  let ItemClass = subLink.external ? NavA : LinkClass
                  return (
                    <ItemClass
                      key={subLink.label}
                      style={{display: 'flex', alignItems: 'center'}}
                      to={subLink.url}
                      href={subLink.url}
                      target='_blank'
                      rel="noreferrer"
                      onClick={() => setMobileOpen(false)}
                      >
                      <NavMobileH4>{subLink.label}</NavMobileH4>
                      {subLink.external && <ExternalLinkIcon />}
                    </ItemClass>
                  )
                })
              }
            </div>
          </div>
        }
      </FirstLevelItem>
    )
  }

  const processCTA = (linkCTA) => {
    if (!linkCTA) return null
    let CTALinkClass = linkCTA.external ? NavA : LinkClass
    return (
      <CTALinkClass to={linkCTA.url} href={linkCTA.url} target='_blank' rel="noreferrer">
        <Button
          tw='ml-sm'
          isSecondary={linkCTA.buttonStyle === 'secondary'}
          isSuccess={linkCTA.buttonStyle === 'success'}
          isInfo={linkCTA.buttonStyle === 'info'}
          isTerminal={linkCTA.buttonStyle === 'terminal'}
        >
          {linkCTA.label}
        </Button>
      </CTALinkClass>
    )
  }

  const processLogo = () => {
    if (customLogoSVG) {
      return customLogoSVG
    }
    if (logo && logo === 'hummingbot') { return <HummingbotLogo />}
    if (logo && logo === 'coinalpha') { return <CoinAlphaLogo />}
    // fallback to Hummingbot logo
    return <HummingbotLogo />
  }

  const showMobileNav = () => {
    return (
      <MobileNavRoot style={{zIndex: '99999'}}>
        <CloseIcon
          tw='absolute cursor-pointer top-[10px] right-[12px]'
          onClick={() => setMobileOpen(false)}
        />
        <div tw='flex items-center'>
          { processLogo() }
          <NavMobileH4 tw='pl-xxs font-medium leading-none'>{siteNameA} <span tw='ml-[4px] font-thin'>{siteNameB}</span></NavMobileH4>
        </div>
        <br />
        <br />
        {linksRight && linksRight.map(link =>
          {return processMobileLink(link)}
        )}
      </MobileNavRoot>
    )
  }

  return (
    <NavBarRoot style={{backgroundColor: bgColor || 'transparent', position: position}}>
      <Container variant={containerVariant} tw='flex flex-row justify-between items-center'>
        <LeftSide>
          <LinkClass to='/'>
            <LogoContainer>
              { processLogo() }
              <Body><Bold>{siteNameA}</Bold> {siteNameB}</Body>
            </LogoContainer>
          </LinkClass>
          <LinksLeft>
            {linksLeft && linksLeft.map(link =>
              {return processLink(link)}
            )}
          </LinksLeft>
        </LeftSide>
        <RightSide>
          {showThemeToggle && <ThemeToggle style={{position: 'relative', top:'-2px'}} />}
          { linksRight && linksRight.map(link => {return processLink(link)}) }
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
          { processCTA(linkCTA) }
        </RightSide>
        <HamburgerIcon onClick={() => setMobileOpen(!mobileOpen)} />
        { mobileOpen && showMobileNav()}
      </Container>
    </NavBarRoot>
  )
}

export default NavBar

const LogoContainer = styled.div(() => [
  tw`flex mr-8 items-center`,
  css`
    svg {
      ${tw`mr-2`};
    }
    p {
      ${tw`ml-2 p-0 select-none`};
    }
  `,
])

const LinkGroup = styled.div(props => ({
  position: 'relative',
  height: 'auto',
  '& .links': {
    display: 'none'
  },
  ':hover': {
    '& .links': {
      display: 'block',
    },
  },
  '& a': {
    textDecoration: 'none !important'
  },
}))

const Links = styled.div({
  position: 'absolute',
  top: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const NavA = styled.a(() => [
  tw`flex`,
  css`
    svg {
      margin-left: 10px;
      position: relative;
      top: 2px;
    }
  `,
])

const NavItem = styled.div(() => [
  tw`flex hover:(border-b-2 border-green)`,
  css`
    display: block;
    margin: 0 !important;
    padding: 0 !important;
    user-select: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  `,
])

const NavP = styled(PSmall)(() => [
  tw`font-medium`,
  css`
    display: block;
    margin: 0;
    position: relative;
    font-size: 15px !important;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
  `,
])

const NavMobileH4 = styled(H4)(() => [
  tw`font-medium text-black dark:text-white`,
  css`
    display: inline-flex;
    margin: 0;
    position: relative;
    font-size: 24px !important;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
  `,
])

const FirstLevelItem = styled.div(() => [
  tw`mx-1.5`,
])

const NavBarRoot = styled(Section)(({ isUppercase, isDisabled }) => [
  tw`z-50 fixed top-0 left-0`,
  // tw`z-50 fixed top-0 left-0 flex w-full`,
  // tw`py-2 px-2 md:px-4`,
  tw`border-b border-body`,
  css`
    height: 50px;
    .theme-toggle {
      ${tw`mr-4`};
    }
  `,
])

const Side = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '50px',
})

const LinksLeft = styled.div(() => [
  tw`hidden lg:flex items-center`,
])

const LeftSide = styled(Side)(() => [
  css`
    .logo {
      top: 7px;
      left: 10px;
      ${tw`absolute`};
    }
  `,
])

const RightSide = styled(Side)(() => [
  tw`hidden lg:flex items-center`,
  css`
    img {
      ${tw`ml-2 rounded ml-4`};
    }
    svg {
      ${tw`ml-2`};
    }
  `,
])

const Menu = styled.div(() => [
  tw`flex cursor-pointer h-[32px] items-center`,
])

const MobileNavRoot = styled.div(() => [
  tw`flex flex-col bg-body`,
  tw`fixed top-0 left-0 z-50`,
  tw`w-full h-[2000px]`,
  tw`py-xl px-sm`,
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

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      viewBox="0 0 13 14"
      tw='ml-xs'
    >
      <path
        tw="fill-current"
        d="M12.62.625L8.48.65a.347.347 0 00-.355.356v.838c0 .203.152.38.355.38l1.88-.076.05.051-7.084 7.084a.385.385 0 00-.101.203c0 .076.05.178.101.229l.584.584c.05.05.152.101.229.101.05 0 .152-.05.203-.101l7.084-7.084.05.05-.076 1.88c0 .203.178.355.381.355h.838a.347.347 0 00.356-.355L13 1.005a.39.39 0 00-.38-.38zm-1.651 7.313h-.406a.418.418 0 00-.407.406v3.91c0 .101-.076.152-.152.152H1.37c-.101 0-.152-.05-.152-.152V3.62c0-.076.05-.152.152-.152h3.91a.418.418 0 00.407-.406v-.407a.437.437 0 00-.407-.406H1.22C.533 2.25 0 2.809 0 3.469v8.937c0 .686.533 1.219 1.219 1.219h8.937c.66 0 1.219-.533 1.219-1.219V8.344a.437.437 0 00-.406-.406z"
      ></path>
    </svg>
  );
}

function HamburgerIcon({...props}) {
  return (
    <div tw='block lg:hidden cursor-pointer' {...props}>
      <div tw='w-[16px] h-[2px] mb-[3px] bg-black dark:bg-white'/>
      <div tw='w-[16px] h-[2px] mb-[3px] bg-black dark:bg-white'/>
      <div tw='w-[16px] h-[2px] bg-black dark:bg-white'/>
    </div>
  );
}

function CloseIcon({...props}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
      tw='fill-current'
    >
      <path fillOpacity="0.01" d="M0 0H30V30H0z"></path>
      <path
        d="M8.777 7H28.888999999999996V9.514H8.777z"
        transform="rotate(45 8.777 7)"
      ></path>
      <path
        d="M7.001 21.222H27.113V23.736H7.001z"
        transform="rotate(-45 7.001 21.222)"
      ></path>
    </svg>
  );
}
