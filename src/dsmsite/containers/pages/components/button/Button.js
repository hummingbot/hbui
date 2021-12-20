import React from 'react'
import ButtonContent from './ButtonContent'
import { H1 } from '../../../../../hb_ui/elements/typography'
import colors from '../../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../../elements/layout'

const {
  blue_bright,
} = colors

function Button() {
  return (
    <div>
      <ContentBlock backgroundColor={blue_bright}>
        <H1 tw="text-3xl" isWhite>Button</H1>
      </ContentBlock>
      <ButtonContent />
    </div>
  )
}

export default Button
