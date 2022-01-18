import React from 'react'
import { P } from '../../../hb_ui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function Code() {
  return (
    <PageRoot>
      <ShortHero
        title='Code'
      />
      <MainContent>
        <P>Code content</P>
      </MainContent>
    </PageRoot>
  )
}

export default Code
