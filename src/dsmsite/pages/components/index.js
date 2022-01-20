import React from 'react'
import { P, Bold } from '../../../hb_ui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function Components() {
  return (
    <PageRoot>
      <ShortHero title="Components" />
      <MainContent>
        <P>
          <Bold>Components</Bold> are more complex structures that will often
          use Elements as building blocks, and may include JavaScript logic.
        </P>
      </MainContent>
    </PageRoot>
  )
}

export default Components
