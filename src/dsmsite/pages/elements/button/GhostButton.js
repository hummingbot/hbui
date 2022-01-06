import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import {
  Body
} from '../../../../hb_ui/elements/typography'
import {
  Button
} from '../../../../hb_ui/elements/buttons'

function GhostButtonElement() {
  return (
    <div>
      <ShortHero
        title='Button (Ghost)'
        subTitle='The Button element is used by the Button component. Use the Button element directly when no icon is necessary or for custom scenarios.'
      />
      <MainContent>
        <Body>Import Button element (adjust path)</Body>
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <Body>Ghost variant</Body>
        <br />
        <Button isGhost>Default</Button>
        <br />
        <CodeBlock code={codeGhostDefault} />
        <br />
        <br />
        <Button isPrimary isGhost>Primary</Button>
        <br />
        <CodeBlock code={codeGhostPrimary} />
        <br />
        <br />
        <Button isInfo isGhost>Info</Button>
        <br />
        <CodeBlock code={codeGhostInfo} />
        <br />
        <br />
        <Button isWarning isGhost>Warning</Button>
        <br />
        <CodeBlock code={codeGhostWarning} />
        <br />
        <br />
        <Button isDanger isGhost>Danger</Button>
        <br />
        <CodeBlock code={codeGhostDanger} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Body>Ghost variant (disabled)</Body>
        <br />
        <Button isDisabled isGhost>Default (disabled)</Button>
        <br />
        <CodeBlock code={codeGhostDefaultDisabled} />
        <br />
        <br />
        <Button isDisabled isPrimary isGhost>Primary (disabled)</Button>
        <br />
        <CodeBlock code={codeGhostPrimaryDisabled} />
        <br />
        <br />
        <Button isDisabled isInfo isGhost>Info (disabled)</Button>
        <br />
        <CodeBlock code={codeGhostInfoDisabled} />
        <br />
        <br />
        <Button isDisabled isWarning isGhost>Warning (disabled)</Button>
        <br />
        <CodeBlock code={codeGhostWarningDisabled} />
        <br />
        <br />
        <Button isDisabled isDanger isGhost>Danger (disabled)</Button>
        <br />
        <CodeBlock code={codeGhostDangerDisabled} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default GhostButtonElement

const codeImport = String.raw
`import { Button } from '../hb_ui/elements/button'
`;

// ghost variant

const codeGhostDefault = String.raw
`<Button isGhost>
  Primary
</Button>
`;
const codeGhostPrimary = String.raw
`<Button isGhost isPrimary>
  Ghost
</Button>
`;
const codeGhostInfo = String.raw
`<Button isGhost isInfo>
  Info
</Button>
`;
const codeGhostWarning = String.raw
`<Button isGhost isWarning>
  Warning
</Button>
`;
const codeGhostDanger = String.raw
`<Button isGhost isDanger>
  Danger
</Button>
`;

// ghost variant, disabled

const codeGhostDefaultDisabled = String.raw
`<Button isGhost isDisabled>
  Primary
</Button>
`;
const codeGhostPrimaryDisabled = String.raw
`<Button isGhost isPrimary isDisabled>
  Ghost
</Button>
`;
const codeGhostInfoDisabled = String.raw
`<Button isGhost isInfo isDisabled>
  Info
</Button>
`;
const codeGhostWarningDisabled = String.raw
`<Button isGhost isWarning isDisabled>
  Warning
</Button>
`;
const codeGhostDangerDisabled = String.raw
`<Button isGhost isDanger isDisabled>
  Danger
</Button>
`;