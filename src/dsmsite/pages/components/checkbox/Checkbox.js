import React, { useState } from 'react'
import { PageRoot, ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from '../../../../../hbui/elements/typography'
import { Separator } from '../../../../../hbui/elements/layout'
import Checkbox from '../../../../../hbui/components/checkbox'

function CheckboxPage() {
  const [state, setState] = useState(true)
  return (
    <PageRoot>
      <ShortHero
        title="Switch"
        subTitle="Simple binary switch control"
      />
      <MainContent>
        <br />
        <br />
        <Body>Default</Body>
        <Checkbox active={state} onClick={() => setState(!state)}/>
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default CheckboxPage

const code = String.raw`import Checkbox from '@hummingbot/hbui/components/checkbox'

<Checkbox
  active={true}
/>
`
