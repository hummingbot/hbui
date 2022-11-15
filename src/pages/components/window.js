/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { PageRoot, Section, Window } from '../../../hbui/elements/layout'
import { Button } from '../../../hbui/elements/buttons'
import { MainContent } from '../../components/elements/layout'
import { H1, H3, H5, P, Bold } from '../../../hbui/elements/typography'
import Hero from '../../../hbui/components/hero/Hero'
import CodeBlock from '../../../hbui/components/code/CodeBlock'

const HeroPage = () => (
  <Layout>
    <Hero tw='bg-window border border-b border-window'>
      <H3>Window</H3>
      <P>The standard Window</P>
    </Hero>
    <MainContent>
      <P>The Window is a dark-mode enabled component. It has resposive padding out of the box.</P>
      <br />
      <Window>
        <H5>Example Window</H5>
        <br />
        <P>The Window component uses the tw prop "bg-window" as background color, and <span tw='font-bold'>works best placed over a background using the background color "bg-body".</span></P>
        <br />
        <P>The Window component also has a thin border around it, and rounded corners that become tighter in smller screens.</P>
      </Window>
      <br />
      <CodeBlock
        code={codeBlock}
      />
      <br />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default HeroPage

const codeBlock = String.raw
`import { Window } from '@hummingbot/hbui/elements/layout'

<Window>
  <H5>Example Window</H5>
  <br />
  <P>The Window is a dark-mode enabled component. It has resposive padding out of the box.</P>
  <br />
  <P>It uses the tw prop "bg-window" as background color, and works best placed over a background using the background color "bg-body".</P>
</Window>`