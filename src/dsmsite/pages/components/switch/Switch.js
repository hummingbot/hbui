import React from 'react'
import { PageRoot, ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../../../hbui/components/code/CodeBlock'
import { Body } from '../../../../../hbui/elements/typography'
import { Separator } from '../../../../../hbui/elements/layout'
import Switch from '../../../../../hbui/components/switch'

function SwitchPage() {
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
        <Switch />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default SwitchPage

const code = String.raw`import Switch from '@hummingbot/hbui/components/switch'

<Switch
  active={true}
/>
`
