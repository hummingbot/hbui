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
        subTitle='The Button element is used by the Button component. Use the Button element directly when no icon is necessary or for custom scenarios.'
      />
      <MainContent>
        <Body>Import Button element (adjust path)</Body>
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <Body>Regular variant</Body>
        <br />
        <Button>Default</Button>
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <br />
        <Button isPrimary>Primary</Button>
        <br />
        <CodeBlock code={codePrimary} />
        <br />
        <br />
        <Button isInfo>Info</Button>
        <br />
        <CodeBlock code={codeInfo} />
        <br />
        <br />
        <Button isWarning>Warning</Button>
        <br />
        <CodeBlock code={codeWarning} />
        <br />
        <br />
        <Button isDanger>Danger</Button>
        <br />
        <CodeBlock code={codeDanger} />
        <br />
        <br />
        <br />
        <br />
        <Body>Regular variant (disabled)</Body>
        <br />
        <Button isDisabled>Default (disabled)</Button>
        <br />
        <CodeBlock code={codeDefaultDisabled} />
        <br />
        <br />
        <Button isPrimary isDisabled>Primary (disabled)</Button>
        <br />
        <CodeBlock code={codePrimaryDisabled} />
        <br />
        <br />
        <Button isInfo isDisabled>Info (disabled)</Button>
        <br />
        <CodeBlock code={codeInfoDisabled} />
        <br />
        <br />
        <Button isWarning isDisabled>Warning (disabled)</Button>
        <br />
        <CodeBlock code={codeWarningDisabled} />
        <br />
        <br />
        <Button isDanger isDisabled>Danger (disabled)</Button>
        <br />
        <CodeBlock code={codeDangerDisabled} />
        <br />
        <br />
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

export default ButtonElement

// regular variant, disabled

const codeImport = String.raw
`import { Button } from '../hb_ui/elements/button'
`;

const codeDefault = String.raw
`<Button>
  Default
</Button>
`;

const codePrimary = String.raw
`<Button isPrimary>
  Primary
</Button>
`;

const codeInfo = String.raw
`<Button isInfo>
  Info
</Button>
`;

const codeWarning = String.raw
`<Button isWarning>
  Warning
</Button>
`;

const codeDanger = String.raw
`<Button isDanger>
  Danger
</Button>
`;

// regular variant, disabled

const codeDefaultDisabled = String.raw
`<Button isDisabled>
  Default (disabled)
</Button>
`;

const codePrimaryDisabled = String.raw
`<Button isPrimary isDisabled>
  Primary (disabled)
</Button>
`;

const codeInfoDisabled = String.raw
`<Button isInfo isDisabled>
  Info (disabled)
</Button>
`;

const codeWarningDisabled = String.raw
`<Button isWarning isDisabled>
  Warning (disabled)
</Button>
`;

const codeDangerDisabled = String.raw
`<Button isDanger isDisabled>
  Danger (disabled)
</Button>
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