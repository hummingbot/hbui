/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { H1, P, Bold } from '../../../hbui/elements/typography'
import { MainContent } from '../../components/elements/layout'
import { Separator } from '../../../hbui/elements/layout'
import TextInput from '../../../hbui/components/input/TextInput'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import Hero from '../../../hbui/components/hero/Hero'

const TextInputPage = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <Layout>
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>TextInput</H1>
        <P>The TextInput component extends the functionality of the TextInput element with additional labels.</P>
      </Hero>
      <MainContent>
        {/*{navigation}*/}
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
        <Separator />
        <br />
        <br />
        <P>
          The following variant takes a <Bold>custom label</Bold> as <Bold>label</Bold>{' '}
          instead of the <Bold>placeholder</Bold>, which in this cases works in
          the standard way, and has no <Bold>extended label</Bold> below.
        </P>
        <br />
        <P>Try writing in the input below to see the label in action.</P>
        <br />
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
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <P>
          The following variant takes an <Bold>extended label</Bold> which appears{' '}
          <Bold>below</Bold>. It can be displayed with <Bold>success</Bold>,{' '}
          <Bold>info</Bold>, <Bold>warning</Bold>, and <Bold>danger</Bold>{' '}
          styles.
        </P>
        <br />
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
        <Separator />
        <br />
        <br />
        <br />
        <P>
          The <Bold>prefix</Bold> variant has a text prefix preceding the input area.
        </P>
        <br />
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
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <P>
          The <Bold>required</Bold> variant show a <Bold>red wildcard</Bold>{' '}
          next to the label.
        </P>
        <br />
        <P>
          Try writing in the input below to see the wildcard next to the label.
        </P>
        <br />
        <br />
        <br />
        <P>Required</P>
        <br />
        <TextInput
          required
          placeholder="Placeholder Text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeRequired} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default TextInputPage

const codeDefault = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

const codeCustomTopLabel = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  customTopLabel='Custom Top Label'
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

const codeValid = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  isValid
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

const codeWarning = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  isWarning
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

const codeInvalid = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  isInvalid
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

// const codeCustomTopLabel = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

// <TextInput
//   customTopLabel='Custom Top Label'
//   placeholder='Placeholder Text'
//   value={inputValue}
//   onChange={yourChangeHandler}
// />
// `

const codeDefaultExtendedLabel = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

const codeValidExtendedLabel = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  isValid
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

const codeWarningExtendedLabel = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  isWarning
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

const codeInvalidExtendedLabel = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  isInvalid
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>`

// const codeDefault = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

// <TextInput
//   prefix="Prefix"
//   placeholder="Your address"
//   value={inputValue}
//   onChange={yourChangeHandler}
// />
// `


const codeCustomPrefixPadding = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  prefix="Averylongprefix"
  customPrefixPadding='135px'
  placeholder="Your address"
  value={inputValue}
  onChange={yourChangeHandler}
/>`

const codeRequired = String.raw`import TextInput from '@hummingbot/hbui/components/input/TextInput'

<TextInput
  required
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>`
