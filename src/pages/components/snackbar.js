/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, PLarge } from '../../../hbui/elements/typography'
import Snackbar from '../../../hbui/components/snackbar'
import Hero from '../../../hbui/components/hero/Hero'

const SnackBar = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Snackbar</H1>
      <P>The Snackbar component is used to display notifications in various states.</P>
    </Hero>
    <MainContent>
      <PLarge>Import Snackbar element (adjust path)</PLarge>
      <CodeBlock code={codeImport} />
      <br />
      <br />
      <PLarge>Default state</PLarge>
      <Snackbar label="Default" />
      <br />
      <CodeBlock code={codeDefault} />
      <br />
      <PLarge>Active state</PLarge>
      <Snackbar label="Success" type="success" />
      <br />
      <CodeBlock code={codeSuccess} />
      <br />
      <PLarge>Info state</PLarge>
      <Snackbar label="Info" type="info" />
      <br />
      <CodeBlock code={codeInfo} />
      <br />
      <PLarge>Warning state</PLarge>
      <Snackbar label="Warning" type="warning" />
      <br />
      <CodeBlock code={codeWarning} />
      <br />
      <PLarge>Danger state</PLarge>
      <Snackbar label="Danger" type="danger" />
      <br />
      <CodeBlock code={codeDanger} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default SnackBar

const codeImport = String.raw
`import Snackbar from '@hummingbot/hbui/components/snackbar'`

const codeDefault = String.raw
`<Snackbar
  label='Default'
/>`

const codeSuccess = String.raw
`<Snackbar
  type='success'
  label='Success'
/>`

const codeInfo = String.raw
`<Snackbar
  type='info'
  label='Info'
/>`

const codeWarning = String.raw
`<Snackbar
  type='warning'
  label='Warning'
/>`

const codeDanger = String.raw
`<Snackbar
  type='danger'
  label='Danger'
/>`
