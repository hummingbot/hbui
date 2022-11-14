/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import { P, Bold } from '../../../hbui/elements/typography'

const Components = () => (
  <Layout>
    <ShortHero title="Components" />
    <MainContent>
      <P>
        <Bold>Components</Bold> are more complex structures that will often
        use Elements as building blocks, and may include JavaScript logic.
      </P>
    </MainContent>
  </Layout>
)

export default Components
