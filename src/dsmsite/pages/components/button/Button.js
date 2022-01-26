import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from '../../../../hb_ui/elements/typography'
import { Button as ButtonComponent } from '../../../../hb_ui/components/button'
import DummyIcon from '../../../../hb_ui/svgs/16x16/DummyIcon'

function Button() {
  return (
    <div>
      <ShortHero
        title="Button"
        subTitle="Button Component - To be used together with icons"
      />
      <MainContent>
        <Body>Button with icon before</Body>
        <ButtonComponent label="Button" iconBefore={<DummyIcon />} />
        <br />
        <CodeBlock code={codeWithIconBefore} />
        <br />
        <br />
        <Body>Button with icon after</Body>
        <ButtonComponent label="Button" iconAfter={<DummyIcon />} />
        <br />
        <CodeBlock code={codeWithIconAfter} />
        <br />
        <br />
        <Body>Button with custom icon color</Body>
        <ButtonComponent
          label="Button"
          iconBefore={<DummyIcon />}
          iconColor="#ff0000"
        />
        <br />
        <CodeBlock code={codeWithCustomIconColor} />
      </MainContent>
    </div>
  )
}

export default Button

const codeWithIconBefore = String.raw`import { Button } from '../hb_ui/components/button'
import { DummyIcon } from '../svgs/16x16/DummyIcon'

<Button
  label='Button'
  iconBefore={<DummyIcon />}
/>
`

const codeWithIconAfter = String.raw`import { Button } from '../hb_ui/components/button'
import { DummyIcon } from '../svgs/16x16/DummyIcon'

<Button
  label='Button'
  iconAfter={<DummyIcon />}
/>
`

const codeWithCustomIconColor = String.raw`import { Button } from '../hb_ui/components/button'
import { DummyIcon } from '../svgs/16x16/DummyIcon'

<Button
  label='Button'
  iconBefore={<DummyIcon />}
  iconColor='#ff0000'
/>
`
