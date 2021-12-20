import React from 'react'
import tw, { styled, theme } from 'twin.macro'
import { H1 } from '../../../../hb_ui/elements/typography'
import colors from '../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../elements/layout'

const {
  green_primary,
} = colors

function HomeHero() {
  return (
    <ContentBlock backgroundColor={green_primary}>
      <H1 tw="text-3xl" isWhite>Hummingbot Design System</H1>
    </ContentBlock>
  )
}

export default HomeHero
