import React, { useState } from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import { H6, P } from '../../../../hb_ui/elements/typography'
import { TextInput } from '../../../../hb_ui/elements/input'
import { Separator } from '../../../../hb_ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'

function InputElementPage() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <ShortHero
        title="TextInput"
        subTitle="The TextInput element is used by the TextInput component. Use the TextInput element directly for custom scenarios."
      />
      <MainContent>
        <P>Import input element (verify path)</P>
        <br />
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <H6>States</H6>
        <Separator />
        <br />
        <br />
        <P>Default</P>
        <br />
        <CodeGridComponent
          code={codeDefault}
          element={
            <TextInput
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
              placeholder="Placeholder"
            />
          }
        />
        <br />
        <br />
        <P>Valid</P>
        <br />
        <CodeGridComponent
          code={codeValid}
          element={
            <TextInput
              onChange={e => setInputValue(e.target.value)}
              isValid
              value={inputValue}
              placeholder="Placeholder"
            />
          }
        />
        <br />
        <br />
        <P>Invalid</P>
        <br />
        <CodeGridComponent
          code={codeInvalid}
          element={
            <TextInput
              onChange={e => setInputValue(e.target.value)}
              isInvalid
              value={inputValue}
              placeholder="Placeholder"
            />
          }
        />
        <br />
        <br />
        <P>Warning</P>
        <br />
        <CodeGridComponent
          code={codeWarning}
          element={
            <TextInput
              onChange={e => setInputValue(e.target.value)}
              isWarning
              value={inputValue}
              placeholder="Placeholder"
            />
          }
        />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default InputElementPage

const codeImport = String.raw`import { Input } from '../hb_ui/elements/input'
`

const codeDefault = String.raw`<TextInput
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>
`

const codeValid = String.raw`<TextInput
  isValid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>
`

const codeInvalid = String.raw`<TextInput
  isInvalid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>
`

const codeWarning = String.raw`<TextInput
  isWarning
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>
`
