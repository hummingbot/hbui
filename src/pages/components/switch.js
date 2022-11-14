/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { Body } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import Switch from '../../../hbui/components/switch'

const SwitchPage = () => (
  <Layout>
    <ShortHero
      title="Switch"
      subTitle="Simple binary switch control"
    />
    <MainContent>
      <br />
      <br />
      <Body>Default</Body>
      <Switch />
      <br />
      <br />
      <CodeBlock code={code} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default SwitchPage


const code = String.raw`import Switch from '@hummingbot/hbui/components/switch'

<Switch
  active={true}
/>`
