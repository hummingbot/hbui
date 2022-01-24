import React, { useState } from 'react'
import { P, Bold } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import TextInput from '../../../../hb_ui/components/input/TextInput'
import CodeBlock from '../../../ui/components/CodeBlock'
import { hero, navigation } from './shared'

function TextInputPrefix() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      {hero}
      <MainContent>
        {navigation}
        <br />
        <br />
        <P>
          The <Bold>prefix</Bold> variant has a text prefix preceding the input area.
        </P>
        <br />
        <Separator />
        <br />
        <br />
        <TextInput
          prefix="Prefix"
          placeholder="Your address"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <br />
        <P>
          Since the prefix length may vary, a <Bold>customPrefixPadding</Bold> prop is available to allow setting a custom padding size to provide the necessary space for the prefix.
        </P>
        <br />
        <TextInput
          prefix="Averylongprefix"
          customPrefixPadding='135px'
          placeholder="Your address"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeCustomPrefixPadding} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default TextInputPrefix

const codeDefault = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  prefix="Prefix"
  placeholder="Your address"
  value={inputValue}
  onChange={yourChangeHandler}
/>
`


const codeCustomPrefixPadding = String.raw`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  prefix="Averylongprefix"
  customPrefixPadding='135px'
  placeholder="Your address"
  value={inputValue}
  onChange={yourChangeHandler}
/>
`
