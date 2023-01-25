/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, P, Bold } from '../../../hbui/elements/typography'
import Hero from '../../../hbui/components/hero/Hero'

const Elements = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Elements</H1>
    </Hero>
    <MainContent>
      <P>
        <Bold>Elements</Bold> are basic building blocks that can either be
        used directly or to be used in the construction of{' '}
        <Bold>Components</Bold>.
      </P>
      <br />
      <P>
        These do not have JavaScript logic attached. They are simply
        "styled-elements" HTML elements.
      </P>
    </MainContent>
  </Layout>
)

export default Elements
