import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import {
  Body
} from '../../../../hb_ui/elements/typography'
import {
  Button
} from '../../../../hb_ui/elements/buttons'

function ButtonElement() {
  return (
    <div>
      <ShortHero
        title='Button'
        subTitle='The Button element is used by the Button component'
      />
      <MainContent>
        <Body>Button states</Body>
        <br />
        <br />
        <Button>Default</Button>
        <br />
        <CodeBlock code='<Button>Default</Button>' />
        <br />
        <br />
        <Button isPrimary>Primary</Button>
        <br />
        <CodeBlock code='<Button isPrimary>Primary</Button>' />
        <br />
        <br />
        <Button isPrimaryGhost>Ghost</Button>
        <br />
        <CodeBlock code='<Button isPrimaryGhost>Ghost</Button>' />
        <br />
        <br />
        <Button isInfo>Info</Button>
        <br />
        <CodeBlock code='<Button isInfo>Info</Button>' />
        <br />
        <br />
        <Button isWarning>Warning</Button>
        <br />
        <CodeBlock code='<Button isWarning>Warning</Button>' />
        <br />
        <br />
        <Button isDanger>Danger</Button>
        <br />
        <CodeBlock code='<Button isDanger>Danger</Button>' />
        <br />
        <br />
        <br />
        <br />
        <Body>Disabled states</Body>
        <br />
        <br />
        <Button isDisabled>Default (disabled)</Button>
        <br />
        <CodeBlock code='<Button isDisabled isDanger>Primary</Button>' />
        <br />
        <br />
        <Button isPrimary isDisabled>Primary (disabled)</Button>
        <br />
        <CodeBlock code='<Button isPrimary isDisabled>Primary (disabled)</Button>' />
        <br />
        <br />
        <Button isPrimaryGhost isDisabled>Ghost (disabled)</Button>
        <br />
        <CodeBlock code='<Button isPrimaryGhost isDisabled>Ghost (disabled)</Button>' />
        <br />
        <br />
        <Button isInfo isDisabled>Info (disabled)</Button>
        <br />
        <CodeBlock code='<Button isInfo isDisabled>Info (disabled)</Button>' />
        <br />
        <br />
        <Button isWarning isDisabled>Warning (disabled)</Button>
        <br />
        <CodeBlock code='<Button isWarning isDisabled>Warning (disabled)</Button>' />
        <br />
        <br />
        <Button isDanger isDisabled>Danger (disabled)</Button>
        <br />
        <CodeBlock code='<Button isDanger isDisabled>Danger (disabled)</Button>' />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default ButtonElement