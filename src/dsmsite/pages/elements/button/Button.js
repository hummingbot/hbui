import React from 'react'
import { MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../../../hbui/components/code/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, Bold } from '../../../../../hbui/elements/typography'
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
          The button element has <Bold>7 variants</Bold>.
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
      </MainContent>
    </div>
  )
}

export default ButtonElement

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
