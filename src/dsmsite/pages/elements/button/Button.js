import React from 'react'
import { MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, Bold } from '../../../../../hbui/elements/typography'
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
          The button element has <Bold>6 variants</Bold>.
        </P>
        <br />
        <Separator />
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
          element={<ButtonSecondary>Secondary</ButtonSecondary>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeSuccess}
          element={<ButtonSuccess>Success</ButtonSuccess>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeInfo}
          element={<ButtonInfo>Info</ButtonInfo>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeWarning}
          element={<ButtonWarning>Warning</ButtonWarning>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeDanger}
          element={<ButtonDanger>Danger</ButtonDanger>}
        />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default ButtonElement

const codeDefault = String.raw`import { Button } from '@hummingbot/hbui/elements/button'

<Button>
  Default
</Button>
`

const codeSecondary = String.raw`import { ButtonSecondary } from '@hummingbot/hbui/elements/button'

<ButtonSecondary>
  Secondary
</ButtonSecondary>
`

const codeSuccess = String.raw`import { ButtonSuccess } from '@hummingbot/hbui/elements/button'

<ButtonSuccess>
  Success
</ButtonSuccess>
`

const codeInfo = String.raw`import { ButtonInfo } from '@hummingbot/hbui/elements/button'

<ButtonInfo>
  Info
</ButtonInfo>
`

const codeWarning = String.raw`import { ButtonWarning } from '@hummingbot/hbui/elements/button'

<ButtonWarning>
  Warning
</ButtonWarning>
`

const codeDanger = String.raw`import { ButtonDanger } from '@hummingbot/hbui/elements/button'

<ButtonDanger>
  Danger
</ButtonDanger>
`
