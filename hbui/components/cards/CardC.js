import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { H6, P } from '../../elements/typography'
import { ExternalLinkIcon } from '../buttons'

export function CardC({
  iconElement,
  headerText,
  descriptionText,
  children,
  linkURL,
  external,
  linkClass,
  ...props
  }) {
  if(!linkURL) {
    return (
      <HoverlessRoot {...props}>
        <HeaderSection>
          {iconElement &&
            <div tw='pr-xs'>
              {iconElement}
            </div>
          }
          {headerText &&
            <HeaderSection>
              <Header isBold>{headerText}</Header>
            </HeaderSection>
          }
        </HeaderSection>
        {descriptionText && <Description>{descriptionText}</Description>}
        {children && <div tw='mt-4'>{children}</div>}
      </HoverlessRoot>
    )
  }
  let LinkElement = ExternalA
  if (!external) {
    LinkElement = linkClass
  }
  return (
    <LinkElement to={linkURL} href={linkURL} target={external ? '_blank' : null} rel={external ? "noreferrer" : null}>
      <Root {...props}>
        <HeaderSection>
          {iconElement &&
            <div tw='pr-xs'>
              {iconElement}
            </div>
          }
          {headerText &&
            <HeaderSection>
              <Header isBold>{headerText}</Header>
            </HeaderSection>
          }
          {external && <ExternalLinkIcon tw='absolute top-xs right-xs' />}
        </HeaderSection>
        {descriptionText && <Description>{descriptionText}</Description>}
        {children && <div tw='mt-xs'>{children}</div>}
      </Root>
    </LinkElement>
  )
}

const ExternalA = styled.a(() => [])

const Root = styled.div(() => [
  tw`relative bg-window border border-window hover:(border-green text-green) dark:(hover:(border-terminal text-terminal)) p-xxs lg:p-xs xl:p-sm rounded-[8px]`,
])

const HoverlessRoot = styled.div(() => [
  tw`relative bg-window border border-window p-xxs lg:p-xs xl:p-sm rounded-[8px]`,
])

const HeaderSection = styled.div(() => [
  tw`w-full flex items-center`,
])

const Header = styled(H6)(() => [
  tw`leading-none`,
  css`
    color: inherit;
  `
])

const Description = styled(P)(() => [
  tw`text-secondary leading-tight mt-xxs`,
])
