import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import {
  Body
} from '../../../../hb_ui/elements/typography'
import {
  Chip
} from '../../../../hb_ui/components/chip'

function ChipElement() {
  return (
    <div>
      <ShortHero
        title='Chip'
        subTitle='The Chip component is used for internal site navigation.'
      />
      <MainContent>
        <Body>Import Chip element (adjust path)</Body>
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <Body>Regular variant</Body>
        <br />
        <Chip to='/test' label='Default'/>
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <br />
        <Chip to='/test2' label='Disabled' isDisabled/>
        <br />
        <CodeBlock code={codeDisabled} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default ChipElement

const codeImport = String.raw
`import { Chip } from '../hb_ui/components/chip'
`;

const codeDefault = String.raw
`<Chip>
  Default
</Chip>
`;

const codeDisabled = String.raw
`<Chip isDisabled>
  Default (disabled)
</Chip>
`;
