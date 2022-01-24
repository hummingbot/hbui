import React, { useState } from 'react'
import { P, Bold } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import TextInput from '../../../../hb_ui/components/input/TextInput'
import CodeBlock from '../../../ui/components/CodeBlock'
import { hero, navigation } from './shared'

function TextInputExtendedLabel() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      {hero}
      <MainContent>
        {navigation}
        <br />
        <br />
        <P>
          This variant takes an <Bold>extended label</Bold> which appears{' '}
          <Bold>below</Bold>. It can be displayed with <Bold>success</Bold>,{' '}
          <Bold>info</Bold>, <Bold>warning</Bold>, and <Bold>danger</Bold>{' '}
          styles.
        </P>
        <br />
        <Separator />
        <br />
        <br />
        <P>Extended label: Default</P>
        <br />
        <TextInput
          bottomLabel="Bottom Label"
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeDefaultExtendedLabel} />
        <br />
        <br />
        <P>Extended label: Valid</P>
        <br />
        <TextInput
          isValid
          bottomLabel="Bottom Label"
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeValidExtendedLabel} />
        <br />
        <br />
        <P>Extended label: Warning</P>
        <br />
        <TextInput
          isWarning
          bottomLabel="Bottom Label"
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeWarningExtendedLabel} />
        <br />
        <br />
        <P>Extended label: Invalid</P>
        <br />
        <TextInput
          isInvalid
          bottomLabel="Bottom Label"
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeInvalidExtendedLabel} />
        <br />
        <br />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default TextInputExtendedLabel

const codeDefaultExtendedLabel = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`

const codeValidExtendedLabel = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isValid
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`

const codeWarningExtendedLabel = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isWarning
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`

const codeInvalidExtendedLabel = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isInvalid
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`
