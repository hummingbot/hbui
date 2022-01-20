import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from '../../../../hb_ui/elements/typography'
import Chip from '../../../../hb_ui/components/chip'

function ChipPage() {
  return (
    <div>
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
    </div>
  )
}

export default ChipPage

const codeImport = String.raw`import Chip from '../hb_ui/components/chip'
`

const codeDefault = String.raw`<Chip
  to='/'
  label='Default'
/>
`

const codeActive = String.raw`<Chip
  to='/components/chip'
  label='Active'
/>
`

const codeDisabled = String.raw`<Chip
  isDisabled
  to='/components/chip'
  label='Disabled'
/>
`
