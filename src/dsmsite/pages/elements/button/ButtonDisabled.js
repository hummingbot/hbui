import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, H5, Bold } from 'ab-tests/elements/typography'
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
          The <Bold>disabled</Bold> button variant is an option{' '}
          available in all variants, to be used when, for example, a user needs
          to fill out a form before submitting. The button becomes transparent
          and pointer-events are disabled.
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
            <Button isDisabled>
              Regular (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeSecondaryDisabled}
          element={
            <Button isSecondary isDisabled>
              Secondary (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeSuccessDisabled}
          element={
            <Button isSuccess isDisabled>
              Success (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeInfoDisabled}
          element={
            <Button isInfo isDisabled>
              Info (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeWarningDisabled}
          element={
            <Button isWarning isDisabled>
              Warning (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeDangerDisabled}
          element={
            <Button isDanger isDisabled>
              Danger (disabled)
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

const codeDefaultDisabled = String.raw`<Button isDisabled>
  Regular (disabled)
</Button>
`

const codeSecondaryDisabled = String.raw`<Button isSecondary isDisabled>
  Secondary (disabled)
</Button>
`

const codeSuccessDisabled = String.raw`<Button isSuccess isDisabled>
  Success (disabled)
</Button>
`

const codeInfoDisabled = String.raw`<Button isInfo isDisabled>
  Info (disabled)
</Button>
`

const codeWarningDisabled = String.raw`<Button isWarning isDisabled>
  Warning (disabled)
</Button>
`

const codeDangerDisabled = String.raw`<Button isDanger isDisabled>
  Danger (disabled)
</Button>
`
