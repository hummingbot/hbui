/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { H1, H6, P } from '../../hbui/elements/typography'
import { MainContent } from '../components/elements/layout'
import Hero from '../../hbui/components/hero/Hero'

const FAQ = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isHeavy>FAQ</H1>
    </Hero>
    <MainContent>
      <H6>What is this?</H6>
      <P>The code and documentation for the <a href='https://www.figma.com/file/wGsUfjWDOPnB5zsP5fALAJ/Hummingbot-Design-System?node-id=306%3A4148&t=kNmH4IzlUc8bHFdV-1'>Hummingbot Design System</a></P>
      <br />
      <H6>Who can use this?</H6>
      <P>Everyone. This is an open-source project</P>
      <br />
      <H6>How can I use it?</H6>
      <P>If you are a developer, you will want to install the related NPM module: <a href='https://www.npmjs.com/package/@hummingbot/hbui'>@hummingbot/hbui</a>. Then have a look at the elements and components pages to learn how to use the specific parts.</P>
      <P>If you are a designer, have a look at the <a href='/guidelines'>Guidelines</a> and <a href='/design-tokens'>Design tokens</a>.</P>
      <P>If you are a journalist or marketeer, you can find useful assets in the <a href='/downloads'>Downloads</a> page.</P>
      <br />
      <H6>Can I contribute?</H6>
      <P>Yes. Check out the <a href='https://github.com/hummingbot/hbui'>project</a> and play around.</P>
      <br />
    </MainContent>
  </Layout>
)

export default FAQ
