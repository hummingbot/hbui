import React from 'react'
import tw, { styled, theme, css } from 'twin.macro'
import {
  phone_max,
  phablet_max,
  tablet_max,
  desktop_max,
} from '../../../../hb_ui/constants/media-queries'
import {
  Section,
  Container,
  PaddingBox,
} from '../../../../hb_ui/elements/layout'
import {
  H1,
  P,
} from '../../../../hb_ui/elements/typography'

export const ContentBlock = styled(Section)(({ backgroundColor }) => [
  css`
    text-align: left;
    width: 100%;
    background-color: ${backgroundColor ? backgroundColor : 'auto'};
  `,
])

export const MainContentElement = styled(Section)(() => [
  css`
    text-align: left;
    width: 100%;
    min-height: 100vh;
  `,
])

export const MainContentBody = styled.div(() => [
  tw`w-full md:w-10/12`
])

export const MainContentSidebar = styled.div(() => [
  tw`w-[0] md:w-2/12`
])

export const ShortHeroPaddingBox = styled(PaddingBox)(() => [
  tw`p-4 py-20 md:py-28 lg:py-32`
])

export function MainContent({ children }) {
  return (
    <MainContentElement tw='bg-secondary'>
      <Container>
        <PaddingBox>
          {children}
        </PaddingBox>
      </Container>
    </MainContentElement>
  )
}

export function MainContentRow({ children }) {
  return (
    <MainContentElement tw='bg-secondary'>
      <Container>
        <PaddingBox tw='flex'>
          {children}
        </PaddingBox>
      </Container>
    </MainContentElement>
  )
}

export function ShortHero({ title, subTitle }) {
  return (
    <ContentBlock tw='bg-tertiary'>
      <Container>
        <ShortHeroPaddingBox>
          <H1>{title}</H1>
          <P tw='py-4 lg:py-6 lg:w-3/5 xl:w-[500px]'>{subTitle}</P>
        </ShortHeroPaddingBox>
      </Container>
    </ContentBlock>
  )
}
