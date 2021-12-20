import React from 'react'
import GettingStartedContent from './GettingStartedContent'
import { H1 } from '../../../../hb_ui/elements/typography'
import colors from '../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../elements/layout'

const {
  green_primary,
} = colors

function GettingStarted() {
  return (
    <div>
      <ContentBlock backgroundColor={green_primary}>
        <H1 tw="text-3xl" isWhite>Getting Started</H1>
      </ContentBlock>
      <GettingStartedContent />
    </div>
  )
}

export default GettingStarted
