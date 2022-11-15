import React from 'react'
import tw, { styled } from 'twin.macro'
import {
  Section,
  Container,
  PaddingBox,
} from '../../../../hbui/elements/layout'

export const MainContentBody = styled.div(() => [tw`w-full md:w-10/12`])

export const MainContentSidebar = styled.div(() => [
  tw`hidden md:block md:w-2/12`,
])

export function MainContent({ children }) {
  return (
    <Section>
      <Container >
        <PaddingBox>{children}</PaddingBox>
      </Container>
    </Section>
  )
}

export function MainContentRow({ children }) {
  return (
    <Section>
      <Container>
        <PaddingBox tw="flex">{children}</PaddingBox>
      </Container>
    </Section>
  )
}
