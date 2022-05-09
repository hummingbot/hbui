import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, H5, Bold } from '../../../../../hbui/elements/typography'
import { Separator } from '../../../../../hbui/elements/layout'
import { hero, navigation } from './shared'
import {
  Button,
  ButtonSecondary,
  ButtonSuccess,
  ButtonInfo,
  ButtonWarning,
  ButtonDanger
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
            <ButtonSecondary isDisabled>
              Secondary (disabled)
            </ButtonSecondary>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeSuccessDisabled}
          element={
            <ButtonSuccess isDisabled>
              Success (disabled)
            </ButtonSuccess>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeInfoDisabled}
          element={
            <ButtonInfo isDisabled>
              Info (disabled)
            </ButtonInfo>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeWarningDisabled}
          element={
            <ButtonWarning isDisabled>
              Warning (disabled)
            </ButtonWarning>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeDangerDisabled}
          element={
            <ButtonDanger isDisabled>
              Danger (disabled)
            </ButtonDanger>
          }
        />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default ButtonElement

const codeDefaultDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/button'

<Button isDisabled>
  Regular (disabled)
</Button>
`

const codeSecondaryDisabled = String.raw`import { ButtonSecondary } from '@hummingbot/hbui/elements/button'

<ButtonSecondary isDisabled>
  Secondary (disabled)
</ButtonSecondary>
`

const codeSuccessDisabled = String.raw`import { ButtonSuccess } from '@hummingbot/hbui/elements/button'

<ButtonSuccess isDisabled>
  Success (disabled)
</ButtonSuccess>
`

const codeInfoDisabled = String.raw`import { ButtonInfo } from '@hummingbot/hbui/elements/button'

<ButtonInfo isDisabled>
  Info (disabled)
</ButtonInfo>
`

const codeWarningDisabled = String.raw`import { ButtonWarning } from '@hummingbot/hbui/elements/button'

<ButtonWarning isDisabled>
  Warning (disabled)
</ButtonWarning>
`

const codeDangerDisabled = String.raw`import { ButtonDanger } from '@hummingbot/hbui/elements/button'

<ButtonDanger isDisabled>
  Danger (disabled)
</ButtonDanger>
`
