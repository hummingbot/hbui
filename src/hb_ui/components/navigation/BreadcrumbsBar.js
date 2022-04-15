import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { P, Body, H6, Bold } from '../../elements/typography'
import HomeIcon from '../../assets/svgs/icons/Home'
import TextLink from '../textlink'

const BreadcrumbsBar = ({ links, userData, ...props }) => {
  return (
    <BreadcrumbsBarRoot>
      <HomeIcon />
      <ChevronRight />
      <LinksRow>
        {links.map((link, index) => {
          return(
            <span key={link.url} tw='flex items-center'>
              { index !== 0 && <P className='divider'>/</P> }
              <TextLink to={link.url} label={link.label} />
            </span>
          )
        }
        )}
      </LinksRow>
    </BreadcrumbsBarRoot>
  )
}

export default BreadcrumbsBar

const BreadcrumbsBarRoot = styled.div(({ isUppercase, isDisabled }) => [
  tw`flex w-full bg-primary relative`,
  tw`items-center`,
  tw`relative py-2.5 px-4`,
  tw`border-b border-secondary`,
  css`
    a.active {
      ${tw`text-brand-ui-500`}
    }
    .home-icon {
      ${tw`relative top-[-1px]`}
    }
    .divider {
      ${tw`text-sm text-quaternary`}
      display: inline;
      line-height: 100%;
    }
    .inner-chevron-right, .divider {
      ${tw`mx-[10px]`}
    }
  `,
])

const LeftSide = styled.div(({}) => [
  tw`flex relative`,
])

const LinksRow = styled.div(({}) => [
  tw`flex items-center`,
])


function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="9"
      fill="none"
      viewBox="0 0 5 9"
      className='inner-chevron-right'
    >
      <path
        fill="#788187"
        d="M1.086.562C.876.328.524.328.289.54c-.234.211-.234.563-.023.797l3 3.164-3 3.187c-.211.235-.211.586.023.797.235.211.586.211.797-.023l3.375-3.563a.665.665 0 00.164-.398c0-.117-.07-.258-.164-.375L1.086.562z"
      ></path>
    </svg>
  );
}
