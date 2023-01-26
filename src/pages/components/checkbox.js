/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, PLarge } from '../../../hbui/elements/typography'
import Checkbox from '../../../hbui/components/checkbox'
import Hero from '../../../hbui/components/hero/Hero'
import PropsTable from '../../../hbui/components/table/PropsTable'

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
        <PLarge>Default</PLarge>
        <br />
        <Checkbox active={stateChecked} onClick={() => setCheckedState(!stateChecked)}/>
        <br />
        <CodeBlock code={codeChecked} />
        <br />
        <br />
        <PLarge>Partially selected - use prop "partial"</PLarge>
        <br />
        <Checkbox active={statePartial} partial={true} onClick={() => setPartialState(!statePartial)}/>
        <br />
        <CodeBlock code={codePartial} />
        <br />
        <br />
        <PLarge>Disabled - use prop "disabled"</PLarge>
        <br />
        <Checkbox active={true} disabled={true}/>
        <br />
        <CodeBlock code={codeDisabled} />
        <br />
        <br />
        <br />
        <br />
        <PropsTable
          title='Callout Props'
          items={[
            {
              propName: 'active',
              type: 'Boolean',
              default: "false",
              required: 'required',
              description: 'Wether the Checkbox is active or not'
            },
            {
              propName: 'partial',
              type: 'Boolean',
              default: "false",
              required: 'required',
              description: 'Wether the active state is only partial. If true, will show a horizontal symbol instead of a checkmark.'
            },
            {
              propName: 'onClick',
              type: 'Function',
              default: "null",
              required: 'optional',
              description: "Optionally, you can attach an onClick handler to toggle it's active state. But the element receiving this event can be another."
            },
            {
              propName: 'disabled',
              type: 'Boolean',
              default: "false",
              required: 'required',
              description: "Set true to display the checkbox in it's disabled state: semi-transparent and with pointer events disabled."
            },
          ]}
        />
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
