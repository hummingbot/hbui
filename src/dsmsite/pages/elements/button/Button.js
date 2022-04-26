import React from 'react'
import { MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, Bold } from 'ab-tests/elements/typography'
import { Separator } from 'ab-tests/elements/layout'
import { Button } from 'ab-tests/elements/buttons'
import { hero, navigation } from './shared'

function ButtonElement() {
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
          The button element has <Bold>6 variants</Bold>. Use the modifiers{' '}
          <Bold>isSecondary</Bold>, <Bold>isSuccess</Bold>, <Bold>isInfo</Bold>,{' '}
          <Bold>isWarning</Bold> and <Bold>isDanger</Bold> to activate them.
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
          code={codeDefault}
          element={<Button>Default</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeSecondary}
          element={<Button isSecondary>Secondary</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeSuccess}
          element={<Button isSuccess>Success</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeInfo}
          element={<Button isInfo>Info</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeWarning}
          element={<Button isWarning>Warning</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeDanger}
          element={<Button isDanger>Danger</Button>}
        />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default ButtonElement

const codeImport = String.raw`import { Button } from '../hb_ui/elements/button'
`

const codeSecondary = String.raw`<Button isSecondary>
  Secondary
</Button>
`

const codeDefault = String.raw`<Button>
  Default
</Button>
`

const codeSuccess = String.raw`<Button isSuccess>
  Success
</Button>
`

const codeInfo = String.raw`<Button isInfo>
  Info
</Button>
`

const codeWarning = String.raw`<Button isWarning>
  Warning
</Button>
`

const codeDanger = String.raw`<Button isDanger>
  Danger
</Button>
`
