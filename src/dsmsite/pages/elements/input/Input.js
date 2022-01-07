import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import {
  H6,
  P,
} from '../../../../hb_ui/elements/typography'
import {
  Input
} from '../../../../hb_ui/elements/input'
import {
  Separator
} from '../../../../hb_ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'

function InputElementPage() {
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
          element={<Input defaultValue='' placeholder='Placeholder' />}
          code={codeDefault}
        />
        <br />
        <br />
        <P>Valid</P>
        <br />
        <GridComponent
          element={<Input defaultValue='' placeholder='Placeholder' isValid />}
          code={codeValid}
        />
        <br />
        <br />
        <P>Invalid</P>
        <br />
        <GridComponent
          element={<Input defaultValue='' placeholder='Placeholder' isInvalid />}
          code={codeInvalid}
        />
        <br />
        <br />
        <P>Warning</P>
        <br />
        <GridComponent
          element={<Input defaultValue='' placeholder='Placeholder' isWarning />}
          code={codeWarning}
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
`<Input
  defaultValue=''
  placeholder='Placeholder'
/>
`;

const codeValid = String.raw
`<Input
  isValid
  defaultValue=''
  placeholder='Placeholder'
/>
`;

const codeInvalid = String.raw
`<Input
  isInvalid
  defaultValue=''
  placeholder='Placeholder'
/>
`;

const codeWarning = String.raw
`<Input
  isWarning
  defaultValue=''
  placeholder='Placeholder'
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