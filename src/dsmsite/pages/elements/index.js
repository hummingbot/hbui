import React from 'react'
import { P } from '../../../hb_ui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function Elements() {
  return (
    <PageRoot>
      <ShortHero
        title='Elements'
      />
      <MainContent>
        <P>Elements content</P>
      </MainContent>
    </PageRoot>
  )
}

export default Elements
