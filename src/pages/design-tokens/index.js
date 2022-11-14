/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import { P, Bold } from '../../../hbui/elements/typography'

const DesignTokens = () => (
  <Layout>
    <ShortHero title="Design Tokens" />
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
