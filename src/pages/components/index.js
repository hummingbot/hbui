/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, P, Bold } from '../../../hbui/elements/typography'
import Hero from '../../../hbui/components/hero/Hero'

const Components = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Components</H1>
    </Hero>
    <MainContent>
      <P>
        <Bold>Components</Bold> are more complex structures that will often
        use Elements as building blocks, and may include JavaScript logic.
      </P>
    </MainContent>
  </Layout>
)

export default Components
