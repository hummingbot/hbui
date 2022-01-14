import React, { useState } from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import { H6, P } from '../../../../hb_ui/elements/typography'
import { TextInput } from '../../../../hb_ui/elements/input'
import { Separator } from '../../../../hb_ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'

function InputElementPage() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <ShortHero
        title='Input'
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
        <GridComponent
          code={codeDefault}
          element={
            <TextInput
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder='Placeholder'
            />
          }
        />
        <br />
        <br />
        <P>Valid</P>
        <br />
        <GridComponent
          code={codeValid}
          element={
            <TextInput
              onChange={(e) => setInputValue(e.target.value)}
              isValid
              value={inputValue}
              placeholder='Placeholder'
            />
          }
        />
        <br />
        <br />
        <P>Invalid</P>
        <br />
        <GridComponent
          code={codeInvalid}
          element={
            <TextInput
              onChange={(e) => setInputValue(e.target.value)}
              isInvalid
              value={inputValue}
              placeholder='Placeholder'
            />
          }
        />
        <br />
        <br />
        <P>Warning</P>
        <br />
        <GridComponent
          code={codeWarning}
          element={
            <TextInput
              onChange={(e) => setInputValue(e.target.value)}
              isWarning
              value={inputValue}
              placeholder='Placeholder'
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

const codeImport = String.raw
`import { Input } from '../hb_ui/elements/input'
`;

const codeDefault = String.raw
`<TextInput
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>
`;

const codeValid = String.raw
`<TextInput
  isValid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>
`;

const codeInvalid = String.raw
`<TextInput
  isInvalid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>
`;

const codeWarning = String.raw
`<TextInput
  isWarning
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>
`;

// <div tw='invisible md:visible md:col-span-8'>


const GridComponent = ({element, code}) => {
  return (
    <div tw='grid grid-cols-10 gap-8'>
      <div tw='col-span-10 md:col-span-4'>
        {element}
      </div>
      <div tw='col-span-10 md:col-span-6'>
        <CodeBlock code={code} />
      </div>
    </div>
  )
}