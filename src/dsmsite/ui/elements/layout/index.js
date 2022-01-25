import React from 'react'
import tw, { styled, theme, css } from 'twin.macro'
import {
  Section,
  Container,
  PaddingBox,
} from '../../../../hb_ui/elements/layout'
import { H1, P } from '../../../../hb_ui/elements/typography'

export const ContentBlock = styled(Section)(({ backgroundColor }) => [
  css`
    text-align: left;
    width: 100%;
    background-color: ${backgroundColor ? backgroundColor : 'auto'};
  `,
])

export const PageRoot = styled(Section)(() => [
  css`
    min-height: 100vh;
  `,
])

export const MainContentElement = styled(Section)(() => [
  css`
    text-align: left;
    width: 100%;
  `,
])

export const MainContentBody = styled.div(() => [tw`w-full md:w-10/12`])

export const MainContentSidebar = styled.div(() => [
  tw`hidden md:block md:w-2/12`,
])

export const ShortHeroPaddingBox = styled(PaddingBox)(() => [
  tw`py-20 md:py-28 lg:py-32`,
])

export function MainContent({ children }) {
  return (
    <MainContentElement tw="bg-secondary">
      <Container>
        <PaddingBox>{children}</PaddingBox>
      </Container>
    </MainContentElement>
  )
}

export function MainContentRow({ children }) {
  return (
    <MainContentElement tw="bg-secondary">
      <Container>
        <PaddingBox tw="flex">{children}</PaddingBox>
      </Container>
    </MainContentElement>
  )
}

export function ShortHero({ title, subTitle, bgImage, boldTitle }) {
  return (
    <ContentBlock tw="bg-tertiary" style={bgImage ? {background: `url(${bgImage}) no-repeat`, backgroundSize: 'cover'} : null}>
      <Container>
        <ShortHeroPaddingBox>
          <H1 isBold={boldTitle}>{title}</H1>
          <P tw="py-4 lg:py-6 lg:w-3/5 xl:w-[500px]">{subTitle}</P>
        </ShortHeroPaddingBox>
      </Container>
    </ContentBlock>
  )
}
