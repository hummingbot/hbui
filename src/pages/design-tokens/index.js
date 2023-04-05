/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, P, Bold } from '../../../hbui/elements/typography'
import { Window } from '../../../hbui/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import tokens from '../../../hbui/tokens/index.json'

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
      <br />
      <P>
        Below are the design tokens of the original <a href='https://www.figma.com/file/wGsUfjWDOPnB5zsP5fALAJ/Hummingbot-Design-System?node-id=306%3A4148&t=kNmH4IzlUc8bHFdV-1' target='_blank' rel="noreferrer">HBUI Figma document</a>.
      </P>
      <br />
      <CodeBlock
        code={JSON.stringify(tokens, null, 2)}
      />
      <br />
    </MainContent>
  </Layout>
)

export default DesignTokens
