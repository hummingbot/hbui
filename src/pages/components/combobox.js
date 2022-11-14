/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { theme } from 'twin.macro'
import { ShortHero, MainContent, PageRoot } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { Body } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import { P } from '../../../hbui/elements/typography'
import ComboBox from '../../../hbui/components/combobox'

const items = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
]

const ComboboxPage = () => {
  const [selected, setSelected] = useState(items[0])
  return(
    <Layout>
      <ShortHero
        title="ComboBox"
        subTitle="Generic combobox with autocomplete"
      />
      <MainContent>
        <Body>
          (Not working ATM)
        </Body>
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
    </Layout>
  )
}

export default ComboboxPage

const codeSpinnerDefault = String.raw`import Spinner from '@hummingbot/hbui/components/spinner'

<Spinner
  radius={50}
/>`
