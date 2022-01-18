import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
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
        <br />
        <H5>Disabled state</H5>
        <br />
        <Separator />
        <br />
        <br />
        <Body>Import Button element (adjust path)</Body>
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <Body>Regular variant (disabled)</Body>
        <br />
        <Button isPrimary isDisabled>Regular (disabled)</Button>
        <br />
        <CodeBlock code={codeDefaultDisabled} />
        <br />
        <br />
        <Button isInfo isGhost isDisabled>Ghost (disabled)</Button>
        <br />
        <CodeBlock code={codePrimaryDisabled} />
        <br />
        <br />
        <Button isWarning isLarge isDisabled>Large (disabled)</Button>
        <br />
        <CodeBlock code={codeInfoDisabled} />
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

const codeDefaultDisabled = String.raw
`<Button isPrimary isDisabled>
  Regular (disabled)
</Button>
`;

const codePrimaryDisabled = String.raw
`<Button isInfo isGhost isDisabled>
  Ghost (disabled)
</Button>
`;

const codeInfoDisabled = String.raw
`<Button isWarning isLarge isDisabled>
  Large (disabled)
</Button>
`;
