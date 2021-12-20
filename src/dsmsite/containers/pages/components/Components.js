import React from 'react'
import ComponentsContent from './ComponentsContent'
import { H1 } from '../../../../hb_ui/elements/typography'
import colors from '../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../elements/layout'

const {
  green_primary,
} = colors

function Components() {
  return (
    <div>
      <ContentBlock backgroundColor={green_primary}>
        <H1 tw="text-3xl" isWhite>Components</H1>
      </ContentBlock>
      <ComponentsContent />
    </div>
  )
}

export default Components
