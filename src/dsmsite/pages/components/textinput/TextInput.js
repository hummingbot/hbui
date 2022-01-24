import React, { useState } from 'react'
import { P, Bold } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import TextInput from '../../../../hb_ui/components/input/TextInput'
import CodeBlock from '../../../ui/components/CodeBlock'
import { hero, navigation } from './shared'

function TextInputPage() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      {hero}
      <MainContent>
        {navigation}
        <br />
        <br />
        <P>
          The <Bold>regular</Bold> variant uses the same value for{' '}
          <Bold>placeholder</Bold> and <Bold>label</Bold>, and has no{' '}
          <Bold>extended label</Bold> below.
        </P>
        <br />
        <P>Try writing in one of the inputs to see the label in action.</P>
        <br />
        <Separator />
        <br />
        <br />
        <P>Default</P>
        <br />
        <TextInput
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <br />
        <P>Valid</P>
        <br />
        <TextInput
          isValid
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeValid} />
        <br />
        <br />
        <P>Warning</P>
        <br />
        <TextInput
          isWarning
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeWarning} />
        <br />
        <br />
        <P>Error</P>
        <br />
        <TextInput
          isInvalid
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeInvalid} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default TextInputPage

const codeDefault = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`

const codeCustomTopLabel = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  customTopLabel='Custom Top Label'
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`

const codeValid = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isValid
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`

const codeWarning = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isWarning
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`

const codeInvalid = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isInvalid
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`
