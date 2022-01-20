import React from 'react'
import { MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, Bold } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { Button } from '../../../../hb_ui/elements/buttons'
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
          The <Bold>regular</Bold> button variant should be used in most
          scenarios. It can be displayed with <Bold>success</Bold>,{' '}
          <Bold>info</Bold>, <Bold>warning</Bold>, and <Bold>danger</Bold>{' '}
          styles.
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
          code={codeDefault}
          element={<Button>Default</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codePrimary}
          element={<Button isPrimary>Primary</Button>}
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

const codeDefault = String.raw`<Button>
  Default
</Button>
`

const codePrimary = String.raw`<Button isPrimary>
  Primary
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
