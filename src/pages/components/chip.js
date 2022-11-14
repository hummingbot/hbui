/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { Body } from '../../../hbui/elements/typography'
import Chip from '../../../hbui/components/chip'

const ChipPage = () => (
  <Layout>
    <ShortHero
      title="Chip"
      subTitle="The Chip component is used for internal site navigation."
    />
    <MainContent>
      <Body>Import Chip element (adjust path)</Body>
      <CodeBlock code={codeImport} />
      <br />
      <br />
      <Body>Default state</Body>
      <Chip to="/" label="Default" />
      <br />
      <CodeBlock code={codeDefault} />
      <br />
      <Body>Active state</Body>
      <Chip to="/components/chip" label="Active" />
      <br />
      <CodeBlock code={codeActive} />
      <br />
      <Body>Disabled state</Body>
      <Chip to="/components/chip" label="Disabled" isDisabled />
      <br />
      <CodeBlock code={codeDisabled} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default ChipPage

const codeImport = String.raw`import Chip from '@hummingbot/hbui/components/chip'`

const codeDefault = String.raw`<Chip
  to='/'
  label='Default'
/>`

const codeActive = String.raw`<Chip
  to='/components/chip'
  label='Active'
/>`

const codeDisabled = String.raw`<Chip
  isDisabled
  to='/components/chip'
  label='Disabled'
/>`
