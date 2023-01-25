import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { H6, P } from '../../elements/typography'
import { ExternalLinkIcon } from '../buttons'

export function CardB({
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
        { iconElement && <div tw='mb-xs'>{iconElement}</div> }
        {headerText &&
          <HeaderSection>
            <Header isBold>{headerText}</Header>
          </HeaderSection>
        }
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
        { iconElement && <div tw='mb-xs'>{iconElement}</div> }
        {headerText &&
          <HeaderSection>
            <Header isBold>{headerText}</Header>
            {external && <ExternalLinkIcon tw='ml-xs' />}
          </HeaderSection>
        }
        {descriptionText && <Description>{descriptionText}</Description>}
        {children && <div tw='mt-4'>{children}</div>}
      </Root>
    </LinkElement>
  )
}

const ExternalA = styled.a(() => [])

const Root = styled.div(() => [
  tw`bg-window border border-window hover:(border-green text-green) dark:(hover:(border-terminal text-terminal)) p-xxs lg:p-xs xl:p-sm rounded-[8px]`,
])


const HoverlessRoot = styled.div(() => [
  tw`bg-window border border-window p-xxs lg:p-xs xl:p-sm rounded-[8px]`,
])

const HeaderSection = styled.div(() => [
  tw`w-full flex items-center pb-xs`,
])

const Header = styled(H6)(() => [
  tw`leading-none`,
  css`
    color: inherit;
  `
])

const Description = styled(P)(() => [
  tw`text-secondary leading-tight`,
])
