import React from 'react'
import { P } from '../../../../../hb_ui/elements/typography'
import { ShortHero,
  MainContentRow,
  MainContentBody,
  MainContentSidebar
} from '../../../../elements/layout'

function Colors() {
  return (
    <div>
      <ShortHero
        title='Colors'
        subTitle='Color distinguishes our brand and helps us create consistent experiences across products.'
      />
      <MainContentRow>
        <MainContentBody>
          <P>Primary Colors</P>
        </MainContentBody>
        <MainContentSidebar>
          <P>Sidebar</P>
        </MainContentSidebar>
      </MainContentRow>
    </div>
  )
}

export default Colors
