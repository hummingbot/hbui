import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, H5, Bold } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { Button } from '../../../../hb_ui/elements/buttons'
import { hero, navigation } from './shared'

function GhostButtonElement() {
  return (
    <div>
      {hero}
      <MainContent>
        {navigation}
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <P>
          The <Bold>ghost</Bold> button variant should be used in special
          scenarios, where it should be more subtle. It can be displayed with{' '}
          <Bold>success</Bold>, <Bold>info</Bold>, <Bold>warning</Bold>, and{' '}
          <Bold>danger</Bold> styles.
        </P>
        <br />
        <P>
          The button element is <Bold>responsive</Bold> and will automatically
          adopt a smaller or larger size depending on the viewport width.
        </P>
        <br />
        <Separator />
        <br />
        <br />
        <Body>Import Button element (adjust path)</Body>
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <CodeGridComponent
          code={codeGhostDefault}
          element={<Button isGhost>Default</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeGhostPrimary}
          element={
            <Button isPrimary isGhost>
              Primary
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeGhostInfo}
          element={
            <Button isInfo isGhost>
              Info
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeGhostWarning}
          element={
            <Button isWarning isGhost>
              Warning
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeGhostDanger}
          element={
            <Button isDanger isGhost>
              Danger
            </Button>
          }
        />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default GhostButtonElement

const codeImport = String.raw`import { Button } from '../hb_ui/elements/button'
`

const codeGhostDefault = String.raw`<Button isGhost>
  Primary
</Button>
`
const codeGhostPrimary = String.raw`<Button isGhost isPrimary>
  Ghost
</Button>
`
const codeGhostInfo = String.raw`<Button isGhost isInfo>
  Info
</Button>
`
const codeGhostWarning = String.raw`<Button isGhost isWarning>
  Warning
</Button>
`
const codeGhostDanger = String.raw`<Button isGhost isDanger>
  Danger
</Button>
`
