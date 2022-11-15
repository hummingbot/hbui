import React from 'react'
import tw, { styled, css } from 'twin.macro'
import {
  Section,
  Container,
  ContainerSB,
  PaddingBox,
} from '../../../../hbui/elements/layout'
import { H1, P } from '../../../../hbui/elements/typography'

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
    <MainContentElement tw="bg-body">
      <ContainerSB>
        <PaddingBox>{children}</PaddingBox>
      </ContainerSB>
    </MainContentElement>
  )
}

export function MainContentRow({ children }) {
  return (
    <MainContentElement tw="bg-body">
      <Container>
        <PaddingBox tw="flex">{children}</PaddingBox>
      </Container>
    </MainContentElement>
  )
}

export function ShortHero({ title, subTitle, bgImage, boldTitle }) {
  return (
    <ContentBlock tw="bg-window border-b-2 border-green dark:border-terminal" style={bgImage ? {backgroundImage: `url(${bgImage}) no-repeat`, backgroundSize: 'cover'} : null}>
      <ContainerSB>
        <ShortHeroPaddingBox>
          <H1 isBold={boldTitle}>{title}</H1>
          <P tw="py-4 lg:py-6 lg:w-3/5 xl:w-[500px]">{subTitle}</P>
        </ShortHeroPaddingBox>
      </ContainerSB>
    </ContentBlock>
  )
}
