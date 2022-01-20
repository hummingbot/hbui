import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, H5, Bold } from '../../../../hb_ui/elements/typography'
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
          The <Bold>disabled</Bold> button variant is an <Bold>option</Bold>{' '}
          available in all variants, to be used when, for example, a user needs
          to fill out a form before submitting.
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
          code={codeDefaultDisabled}
          element={
            <Button isPrimary isDisabled>
              Regular (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codePrimaryDisabled}
          element={
            <Button isInfo isGhost isDisabled>
              Ghost (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeInfoDisabled}
          element={
            <Button isWarning isLarge isDisabled>
              Large (disabled)
            </Button>
          }
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

const codeDefaultDisabled = String.raw`<Button isPrimary isDisabled>
  Regular (disabled)
</Button>
`

const codePrimaryDisabled = String.raw`<Button isInfo isGhost isDisabled>
  Ghost (disabled)
</Button>
`

const codeInfoDisabled = String.raw`<Button isWarning isLarge isDisabled>
  Large (disabled)
</Button>
`
