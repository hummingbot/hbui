import React, { useState } from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import { H6, P } from '../../elements/typography'
import { ExternalLinkIcon } from '../button'

export function CardA({
  imgSrc,
  imgAlt,
  headerText,
  descriptionText,
  linkURL,
  external,
  linkClass,
  ...props
  }) {
  if(!linkURL) {
    return (
      <HoverlessRoot {...props}>
        {imgSrc && <Image src={imgSrc} alt={imgAlt} />}
        {headerText &&
          <HeaderSection>
            <Header isBold>{headerText}</Header>
          </HeaderSection>
        }
        {descriptionText && <Description>{descriptionText}</Description>}
      </HoverlessRoot>
    )
  }
  let LinkClass
  let LinkElement = ExternalA
  if (!external) {
    LinkElement = linkClass
  }
  return (
    <LinkElement to={linkURL} href={linkURL} target={external ? '_blank' : null} rel={external ? "noreferrer" : null}>
      <Root {...props}>
        {imgSrc && <Image src={imgSrc} alt={imgAlt} />}
        <HeaderSection>
          <Header isBold>{headerText}</Header>
          {external && <ExternalLinkIcon tw='ml-xs' />}
        </HeaderSection>
        {descriptionText && <Description>{descriptionText}</Description>}
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

const Image = styled.img(() => [
  tw`w-full pb-sm rounded-[6px]`,
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
