import React from 'react'
import { P } from '../../../hb_ui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function GettingStarted() {
  return (
    <PageRoot>
      <ShortHero
        title='Getting Started'
      />
      <MainContent>
        <P>Getting Started content</P>
      </MainContent>
    </PageRoot>
  )
}

export default GettingStarted
