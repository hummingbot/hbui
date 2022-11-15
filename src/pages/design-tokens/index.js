/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, P, Bold } from '../../../hbui/elements/typography'
import Hero from '../../../hbui/components/hero/Hero'

const DesignTokens = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Design Tokens</H1>
    </Hero>
    <MainContent>
      <P>
        <Bold>Design Tokens</Bold> are the values of every design element retrieved from
        the original Figma project that are used to configure every aspect of
        the design system.
      </P>
    </MainContent>
  </Layout>
)

export default DesignTokens
