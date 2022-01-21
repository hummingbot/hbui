import React from 'react'
import { PageRoot, ShortHero, MainContent } from '../../../ui/elements/layout'
import { P, H5 } from '../../../../hb_ui/elements/typography'
import { ItemsRow, Separator } from '../../../../hb_ui/elements/layout'
import { Button } from '../../../../hb_ui/elements/buttons'
import CodeBlock from '../../../ui/components/CodeBlock'

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
`import { Separator } from '../hb_ui/elements/layout'

<Separator />
`

const codeItemsRow = String.raw
`import { ItemsRow } from '../hb_ui/elements/layout'
import { Button } from '../hb_ui/elements/buttons'

<ItemsRow>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</ItemsRow>
`
