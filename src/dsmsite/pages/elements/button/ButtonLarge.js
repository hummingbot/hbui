import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, H5 } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { Button } from '../../../../hb_ui/elements/buttons'
import { hero, navigation } from './shared'

function ButtonElement() {
  return (
    <div>
      { hero }
      <MainContent>
        { navigation }
        <br />
        <Separator />
        <br />
        <br />
        <Body>Import Button element (adjust path)</Body>
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <CodeGridComponent
          code={codeLarge}
          element={
            <Button isLarge>Large</Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeExtraLarge}
          element={
            <Button isExtraLarge>Extra large</Button>
          }
        />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default ButtonElement

const codeImport = String.raw
`import { Button } from '../hb_ui/elements/button'
`;

const codeLarge = String.raw
`<Button isLarge>
  Large
</Button>
`;

const codeExtraLarge = String.raw
`<Button isExtraLarge>
  Extra large
</Button>
`;
