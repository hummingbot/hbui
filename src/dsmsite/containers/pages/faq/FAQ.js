import React from 'react'
import FAQContent from './FAQContent'
import { H1 } from '../../../../hb_ui/elements/typography'
import colors from '../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../elements/layout'

const {
  green_primary,
} = colors

function FAQ() {
  return (
    <div>
      <ContentBlock backgroundColor={green_primary}>
        <H1 tw="text-3xl" isWhite>FAQ</H1>
      </ContentBlock>
      <FAQContent />
    </div>
  )
}

export default FAQ
