import React, { useState } from 'react'
import { P, Bold } from '../../../../../hbui/elements/typography'
import { Separator } from '../../../../../hbui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import TextInput from '../../../../../hbui/components/input/TextInput'
import CodeBlock from '../../../ui/components/CodeBlock'
import { hero, navigation } from './shared'

function TextInputCustomLabel() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      {hero}
      <MainContent>
        {navigation}
        <br />
        <br />
        <P>
          This variant takes a <Bold>custom label</Bold> as <Bold>label</Bold>{' '}
          instead of the <Bold>placeholder</Bold>, which in this cases works in
          the standard way, and has no <Bold>extended label</Bold> below.
        </P>
        <br />
        <P>Try writing in the input below to see the label in action.</P>
        <br />
        <Separator />
        <br />
        <br />
        <P>Custom top label</P>
        <br />
        <TextInput
          customTopLabel="Custom Top Label"
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeCustomTopLabel} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default TextInputCustomLabel

const codeCustomTopLabel = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  customTopLabel='Custom Top Label'
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`
