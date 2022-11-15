/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { PageRoot, ShortHero, MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, Body } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import Checkbox from '../../../hbui/components/checkbox'
import Hero from '../../../hbui/components/hero/Hero'

const CheckboxPage = () => {
  const [stateChecked, setCheckedState] = useState(true)
  const [statePartial, setPartialState] = useState(true)
  return(
    <Layout>
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>Checkbox</H1>
        <P>Standard checkbox</P>
      </Hero>
      <MainContent>
        <br />
        <br />
        <Body>Default</Body>
        <Checkbox active={stateChecked} onClick={() => setCheckedState(!stateChecked)}/>
        <br />
        <CodeBlock code={codeChecked} />
        <br />
        <Body>Partial selected - use prop "partial"</Body>
        <Checkbox active={statePartial} partial={true} onClick={() => setPartialState(!statePartial)}/>
        <br />
        <CodeBlock code={codePartial} />
        <br />
        <Body>Disabled - use prop "disabled"</Body>
        <Checkbox active={true} disabled={true}/>
        <br />
        <CodeBlock code={codeDisabled} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default CheckboxPage

const codeChecked = String.raw`import Checkbox from '@hummingbot/hbui/components/checkbox'

const [state, setState] = useState(true)

<Checkbox
  <Checkbox active={state} onClick={() => setState(!state)}/>
/>`

const codePartial = String.raw`import Checkbox from '@hummingbot/hbui/components/checkbox'

const [state, setState] = useState(true)

<Checkbox
  <Checkbox active={state} partial={true} onClick={() => setState(!state)}/>
/>`

const codeDisabled = String.raw`import Checkbox from '@hummingbot/hbui/components/checkbox'

<Checkbox
  <Checkbox active={true} disabled={true} />
/>`
