import React from 'react'
import { PageRoot, ShortHero, MainContent } from '../../../ui/elements/layout'
import { P, H5 } from '../../../../../hbui/elements/typography'
import { ItemsRow, Separator } from '../../../../../hbui/elements/layout'
import { Button } from '../../../../../hbui/elements/buttons'
import CodeBlock from '../../../../../hbui/components/code/CodeBlock'

function LayoutExtra() {
  return (
    <PageRoot>
      <ShortHero
        title='Layout (extra)'
        subTitle='Layout utilities.'
      />
      <MainContent>
        <H5>Separator</H5>
        <br />
        <P>Standard separator to vertically separate parts of a layout:</P>
        <br />
        <Separator />
        <br />
        <br />
        <CodeBlock code={codeSeparator} />
        <br />
        <br />
        <br />
        <H5>ItemsRow</H5>
        <br />
        <P>Use to place small items (such as buttons) inline and automatically have margins between them except after the last item.</P>
        <br />
        <br />
        <ItemsRow>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ItemsRow>
        <br />
        <br />
        <CodeBlock code={codeItemsRow} />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default LayoutExtra

const codeSeparator = String.raw
`import { Separator } from '@hummingbot/hbui/elements/layout'

<Separator />
`

const codeItemsRow = String.raw
`import { ItemsRow } from '@hummingbot/hbui/elements/layout'
import { Button } from '@hummingbot/hbui/elements/buttons'

<ItemsRow>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</ItemsRow>
`
