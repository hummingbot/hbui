import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import CodeGridComponent from '../../../ui/components/CodeGridComponent'
import { Body, P, H5, Bold } from '../../../../../hbui/elements/typography'
import { Separator } from '../../../../../hbui/elements/layout'
import { Button } from '../../../../../hbui/elements/buttons'
import { hero, navigation } from './shared'

function ButtonSizes() {
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
          The <Bold>small</Bold> and <Bold>large</Bold> are{' '}
          options available in all variants.
        </P>
        <br />
        <Separator />
        <br />
        <br />
        <CodeGridComponent
          code={codeSmall}
          element={<Button isSmall>Text label</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeDefault}
          element={<Button>Text label</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeLarge}
          element={<Button isLarge>Text label</Button>}
        />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default ButtonSizes

const codeDefault = String.raw`import { Button } from '@hummingbot/hbui/elements/button'

<Button>
  Text label
</Button>
`

const codeLarge = String.raw`import { Button } from '@hummingbot/hbui/elements/button'

<Button isLarge>
  Text label
</Button>
`

const codeSmall = String.raw`import { Button } from '@hummingbot/hbui/elements/button'

<Button isSmall>
  Text label
</Button>
`
