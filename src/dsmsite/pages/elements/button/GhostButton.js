import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body, H5 } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { Button } from '../../../../hb_ui/elements/buttons'
import { hero, navigation } from './shared'

function GhostButtonElement() {
  return (
    <div>
      { hero }
      <MainContent>
        { navigation }
        <br />
        <br />
        <H5>Ghost variant</H5>
        <br />
        <Separator />
        <br />
        <br />
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
      </MainContent>
    </div>
  )
}

export default GhostButtonElement

const codeImport = String.raw
`import { Button } from '../hb_ui/elements/button'
`;

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
