import React from 'react'
import { MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
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
          element={<Button isSecondary>Secondary</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeSuccess}
          element={<Button isSuccess>Success</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeInfo}
          element={<Button isInfo>Info</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeWarning}
          element={<Button isWarning>Warning</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeDanger}
          element={<Button isDanger>Danger</Button>}
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

<Button isSecondary>
  Secondary
</Button>
`

const codeSuccess = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isSuccess>
  Success
</Button>
`

const codeInfo = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isInfo>
  Info
</Button>
`

const codeWarning = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isWarning>
  Warning
</Button>
`

const codeDanger = String.raw`import { Button } from '@hummingbot/hbui/elements/buttons'

<Button isDanger>
  Danger
</Button>
`
