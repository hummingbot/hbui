import React, { useState } from 'react'
import { theme } from 'twin.macro'
import { ShortHero, MainContent, PageRoot } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from 'ab-tests/elements/typography'
import { Separator } from 'ab-tests/elements/layout'
import { P } from 'ab-tests/elements/typography'
import {ComboBox} from 'ab-tests/components/combobox'

const items = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
]

function ComboBoxPage() {
  const [selected, setSelected] = useState(items[0])
  return (
    <PageRoot>
      <ShortHero
        title="ComboBox"
        subTitle="Generic combobox with autocomplete"
      />
      <MainContent>
        <Body>
          Default state
        </Body>
        <Separator />
        <br />
        <br />
        <P>Selected:</P>
        <P isBold>{selected.label}</P>
        <br />
        <ComboBox items={items} selected={selected} setSelected={setSelected} />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default ComboBoxPage

const codeSpinnerDefault = String.raw`import Spinner from '../hb_ui/components/spinner'

<Spinner
  radius={50}
/>
`
