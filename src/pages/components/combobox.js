/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { theme } from 'twin.macro'
import { ShortHero, MainContent, PageRoot } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { Body } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import { H1, P } from '../../../hbui/elements/typography'
import ComboBox from '../../../hbui/components/combobox'
import Hero from '../../../hbui/components/hero/Hero'

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
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>ComboBox</H1>
        <P>Generic combobox with autocomplete</P>
      </Hero>
      <MainContent>
        <P>Selected:</P>
        <P isBold>{selected.label}</P>
        <br />
        <ComboBox
          items={items}
          selected={selected}
          setSelected={setSelected}
        />
        <br />
        <CodeBlock code={codeComboBox} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default ComboboxPage

const codeComboBox = String.raw`import React, { useState } from 'react'
import ComboBox from '@hummingbot/hbui/components/combobox'

const items = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
]

const [selected, setSelected] = useState(items[0])

<ComboBox
  items={items}
  selected={selected}
  setSelected={setSelected}
/>`
