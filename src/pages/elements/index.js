/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import { P, Bold } from '../../../hbui/elements/typography'

const Elements = () => (
  <Layout>
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
  </Layout>
)

export default Elements
