import React from 'react'
import { P } from '../../../hb_ui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function DesignTokens() {
  return (
    <PageRoot>
      <ShortHero
        title='Design Tokens'
      />
      <MainContent>
        <P>Design Tokens content</P>
      </MainContent>
    </PageRoot>
  )
}

export default DesignTokens
