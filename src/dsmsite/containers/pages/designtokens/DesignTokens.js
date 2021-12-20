import React from 'react'
import DesignTokensContent from './DesignTokensContent'
import { H1 } from '../../../../hb_ui/elements/typography'
import colors from '../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../elements/layout'

const {
  green_primary,
} = colors

function DesignTokens() {
  return (
    <div>
      <ContentBlock backgroundColor={green_primary}>
        <H1 tw="text-3xl" isWhite>Design Tokens</H1>
      </ContentBlock>
      <DesignTokensContent />
    </div>
  )
}

export default DesignTokens
