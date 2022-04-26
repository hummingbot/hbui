import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, H5, Bold } from 'ab-tests/elements/typography'
import { Separator } from 'ab-tests/elements/layout'
import { Button } from 'ab-tests/elements/buttons'
import { hero, navigation } from './shared'

function ButtonSizes() {
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
          The <Bold>small</Bold> and <Bold>large</Bold> are{' '}
          options available in all variants.
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
          code={codeSmall}
          element={<Button isSmall>Text label</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeDefault}
          element={<Button>Text label</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeLarge}
          element={<Button isLarge>Text label</Button>}
        />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default ButtonSizes

const codeImport = String.raw`import { Button } from '../hb_ui/elements/button'
`

const codeDefault = String.raw`<Button>
  Text label
</Button>
`

const codeLarge = String.raw`<Button isLarge>
  Text label
</Button>
`

const codeSmall = String.raw`<Button isSmall>
  Text label
</Button>
`
