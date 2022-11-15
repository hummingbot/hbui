/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, P, H6 } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import CodeGridComponent from '../../components/CodeGridComponent'
import { TextInput } from '../../../hbui/elements/input'
import Hero from '../../../hbui/components/hero/Hero'

const TextInputPage = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <Layout>
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>TextInput</H1>
        <P>The TextInput element is used by the TextInput component. Use the TextInput element directly for custom scenarios.</P>
      </Hero>
      <MainContent>
        <P>Import input element</P>
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
    </Layout>
  )
}

export default TextInputPage

const codeImport = String.raw`import { Input } from '@hummingbot/hbui/elements/input'`

const codeDefault = String.raw`<TextInput
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeValid = String.raw`<TextInput
  isValid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeInvalid = String.raw`<TextInput
  isInvalid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeWarning = String.raw`<TextInput
  isWarning
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`
