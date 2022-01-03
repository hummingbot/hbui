import React from 'react'
import { P } from '../../../hb_ui/elements/typography'
import { ShortHero, MainContent } from '../../ui/elements/layout'

function Elements() {
  return (
    <div>
      <ShortHero
        title='Elements'
      />
      <MainContent>
        <P>Elements content</P>
      </MainContent>
    </div>
  )
}

export default Elements
