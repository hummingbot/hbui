import React, { useState } from 'react'
import { PageRoot, ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from '../../../../../hbui/elements/typography'
import { Separator } from '../../../../../hbui/elements/layout'
import Checkbox from '../../../../../hbui/components/checkbox'

function CheckboxPage() {
  const [stateChecked, setCheckedState] = useState(true)
  const [statePartial, setPartialState] = useState(true)
  return (
    <PageRoot>
      <ShortHero
        title="Checkbox"
        subTitle="Standard checkbox"
      />
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
    </PageRoot>
  )
}

export default CheckboxPage

const codeChecked = String.raw`import Checkbox from '@hummingbot/hbui/components/checkbox'

const [state, setState] = useState(true)

<Checkbox
  <Checkbox active={state} onClick={() => setState(!state)}/>
/>
`

const codePartial = String.raw`import Checkbox from '@hummingbot/hbui/components/checkbox'

const [state, setState] = useState(true)

<Checkbox
  <Checkbox active={state} partial={true} onClick={() => setState(!state)}/>
/>
`

const codeDisabled = String.raw`import Checkbox from '@hummingbot/hbui/components/checkbox'

<Checkbox
  <Checkbox active={true} disabled={true} />
/>
`
