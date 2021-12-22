import React from 'react'
import { P } from '../../../../../hb_ui/elements/typography'
import { ShortHero, MainContent } from '../../../../elements/layout'

function Button() {
  return (
    <div>
      <ShortHero
        title='Button'
      />
      <MainContent>
        <P>Button content</P>
      </MainContent>
    </div>
  )
}

export default Button