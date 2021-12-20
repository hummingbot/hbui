import React from 'react'
import DownloadsContent from './DownloadsContent'
import { H1 } from '../../../../hb_ui/elements/typography'
import colors from '../../../../hb_ui/constants/colors'
import { ContentBlock } from '../../../elements/layout'

const {
  green_primary,
} = colors

function Downloads() {
  return (
    <div>
      <ContentBlock backgroundColor={green_primary}>
        <H1 tw="text-3xl" isWhite>Downloads</H1>
      </ContentBlock>
      <DownloadsContent />
    </div>
  )
}

export default Downloads
