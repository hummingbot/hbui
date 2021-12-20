import React from 'react'
import InputContent from './InputContent'
import { H1 } from '../../../../../hb_ui/elements/typography'
import colors from '../../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../../elements/layout'

const {
  blue_bright,
} = colors

function Input() {
  return (
    <div>
      <ContentBlock backgroundColor={blue_bright}>
        <H1 tw="text-3xl" isWhite>Input</H1>
      </ContentBlock>
      <InputContent />
    </div>
  )
}

export default Input
