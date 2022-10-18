import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, H5, Bold } from '../../../../../hbui/elements/typography'
import { Separator } from '../../../../../hbui/elements/layout'
import { hero, navigation } from './shared'
import {
  Button,
} from '../../../../../hbui/elements/buttons'

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

const codeDefaultDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isDisabled>
  Regular (disabled)
</Button>
`

const codeSecondaryDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isSecondary isDisabled>
  Secondary (disabled)
</ButtonSecondary>
`

const codeSuccessDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isSuccess isDisabled>
  Success (disabled)
</ButtonSuccess>
`

const codeInfoDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isInfo isDisabled>
  Info (disabled)
</ButtonInfo>
`

const codeWarningDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isWarning isDisabled>
  Warning (disabled)
</ButtonWarning>
`

const codeDangerDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isDanger isDisabled>
  Danger (disabled)
</ButtonDanger>
`
