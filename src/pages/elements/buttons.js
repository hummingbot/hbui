/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import { P, Bold } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import { Button } from '../../../hbui/elements/buttons'
import CodeGridComponent from '../../components/CodeGridComponent'

const Buttons = () => (
  <Layout>
    <ShortHero title="Buttons" />
    <MainContent>
      <P>The button element has <Bold>7 variants</Bold>.</P>
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
        element={<Button variant='secondary'>Secondary</Button>}
      />
      <br />
      <br />
      <CodeGridComponent
        code={codeSuccess}
        element={<Button variant='success'>Success</Button>}
      />
      <br />
      <br />
      <CodeGridComponent
        code={codeInfo}
        element={<Button variant='info'>Info</Button>}
      />
      <br />
      <br />
      <CodeGridComponent
        code={codeWarning}
        element={<Button variant='warning'>Warning</Button>}
      />
      <br />
      <br />
      <CodeGridComponent
        code={codeDanger}
        element={<Button variant='danger'>Danger</Button>}
      />
      <br />
      <br />
      <CodeGridComponent
        code={codeTerminal}
        element={<Button variant='terminal'>Terminal</Button>}
      />
      <br />
      <br />
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
            <Button variant='secondary' isDisabled>
              Secondary (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeSuccessDisabled}
          element={
            <Button variant='success' isDisabled>
              Success (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeInfoDisabled}
          element={
            <Button variant='info' isDisabled>
              Info (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeWarningDisabled}
          element={
            <Button variant='warning' isDisabled>
              Warning (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeDangerDisabled}
          element={
            <Button variant='danger' isDisabled>
              Danger (disabled)
            </Button>
          }
        />
        <br />
        <br />
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
        <CodeGridComponent
          code={codeSmallSizes}
          element={<Button isSmall>Text label</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeLargeSizes}
          element={<Button isLarge>Text label</Button>}
        />
        <br />
        <br />
    </MainContent>
  </Layout>
)

export default Buttons

const codeDefault = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button>
  Default
</Button>
`

const codeSecondary = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='secondary'>
  Secondary
</Button>
`

const codeSuccess = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='success'>
  Success
</Button>
`

const codeInfo = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='info'>
  Info
</Button>
`

const codeWarning = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='warning'>
  Warning
</Button>
`

const codeDanger = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='danger'>
  Danger
</Button>
`

const codeTerminal = String.raw`// USE THIS VARIANT ONLY ON DARK MODE

import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='terminal'>
  Danger
</Button>
`

const codeDefaultDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isDisabled>
  Regular (disabled)
</Button>
`

const codeSecondaryDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='secondary' isDisabled>
  Secondary (disabled)
</ButtonSecondary>
`

const codeSuccessDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='success' isDisabled>
  Success (disabled)
</ButtonSuccess>
`

const codeInfoDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='info' isDisabled>
  Info (disabled)
</ButtonInfo>
`

const codeWarningDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='warning' isDisabled>
  Warning (disabled)
</ButtonWarning>
`

const codeDangerDisabled = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button variant='danger' isDisabled>
  Danger (disabled)
</ButtonDanger>
`

const codeLargeSizes = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isLarge>
  Text label
</Button>
`

const codeSmallSizes = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isSmall>
  Text label
</Button>
`


