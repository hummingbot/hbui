import React from 'react'
import GuidelinesContent from './GuidelinesContent'
import { H1 } from '../../../../hb_ui/elements/typography'
import colors from '../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../elements/layout'

const {
  green_primary,
} = colors

function Guidelines() {
  return (
    <div>
      <ContentBlock backgroundColor={green_primary}>
        <H1 tw="text-3xl" isWhite>Guidelines</H1>
      </ContentBlock>
      <GuidelinesContent />
    </div>
  )
}

export default Guidelines
