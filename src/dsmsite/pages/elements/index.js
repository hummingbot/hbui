import React from 'react'
import { P, Bold } from '../../../hb_ui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function Elements() {
  return (
    <PageRoot>
      <ShortHero title="Elements" />
      <MainContent>
        <P>
          <Bold>Elements</Bold> are basic building blocks that can either be
          used directly or to be used in the construction of{' '}
          <Bold>Components</Bold>.
        </P>
        <br />
        <P>
          These do not have JavaScript logic attached. They are simply declared
          Emotion.js elements.
        </P>
      </MainContent>
    </PageRoot>
  )
}

export default Elements
