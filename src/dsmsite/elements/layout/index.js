import tw, { styled, theme, css } from 'twin.macro'
import React from 'react'
import {
  phone_max,
  phablet_max,
  tablet_max,
  desktop_max,
} from '../../../hb_ui/constants/media-queries'

export const ContentBlock = styled.div(({ backgroundColor }) => [
  css`
    text-align: left;
    width: 100%;
    padding: 40px;
    background-color: ${backgroundColor ? backgroundColor : 'auto'};
  `,
])

export const MainContentElement = styled.div(() => [
  tw`bg-white dark:(bg-black)`,
  css`
    text-align: left;
    width: 100%;
    min-height: 100vh;
  `,
])

export const PaddingBox = styled.div({
  textAlign: 'left',
  padding: '40px',
  [phone_max]: {
    padding: '12px',
  },
  [phablet_max]: {
    padding: '20px',
  },
  [tablet_max]: {
    padding: '30px',
  },
})

export function MainContent({ children }) {
  return (
    <MainContentElement>
      <PaddingBox>
        {children}
      </PaddingBox>
    </MainContentElement>
  )
}