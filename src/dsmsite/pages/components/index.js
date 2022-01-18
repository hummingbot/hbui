import React from 'react'
import { P } from '../../../hb_ui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function Components() {
  return (
    <PageRoot>
      <ShortHero
        title='Components'
      />
      <MainContent>
        <P>Components content</P>
      </MainContent>
    </PageRoot>
  )
}

export default Components
