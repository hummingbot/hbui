import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from '../../../../hb_ui/elements/typography'
import Snackbar from '../../../../hb_ui/components/snackbar'

function SnackbarPage() {
  return (
    <div>
      <ShortHero
        title="Snackbar"
        subTitle="The Snackbar component is used to display notifications in various states."
      />
      <MainContent>
        <Body>Import Snackbar element (adjust path)</Body>
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <Body>Default state</Body>
        <Snackbar label="Default" />
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <Body>Active state</Body>
        <Snackbar label="Success" type="success" />
        <br />
        <CodeBlock code={codeSuccess} />
        <br />
        <Body>Info state</Body>
        <Snackbar label="Info" type="info" />
        <br />
        <CodeBlock code={codeInfo} />
        <br />
        <Body>Warning state</Body>
        <Snackbar label="Warning" type="warning" />
        <br />
        <CodeBlock code={codeWarning} />
        <br />
        <Body>Danger state</Body>
        <Snackbar label="Danger" type="danger" />
        <br />
        <CodeBlock code={codeDanger} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default SnackbarPage

const codeImport = String.raw
`import Snackbar from '../hb_ui/components/snackbar'
`

const codeDefault = String.raw
`<Snackbar
  label='Default'
/>
`

const codeSuccess = String.raw
`<Snackbar
  type='success'
  label='Success'
/>
`

const codeInfo = String.raw
`<Snackbar
  type='info'
  label='Info'
/>
`

const codeWarning = String.raw
`<Snackbar
  type='warning'
  label='Warning'
/>
`

const codeDanger = String.raw
`<Snackbar
  type='danger'
  label='Danger'
/>
`
