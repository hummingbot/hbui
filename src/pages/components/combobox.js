/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, H6, P } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
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
  const [selected, setSelected] = useState(null)
  const [selectedMultiple, setSelectedMultiple] = useState([])
  return(
    <Layout>
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>ComboBox</H1>
        <P>Generic combobox with autocomplete</P>
      </Hero>
      <MainContent>
        <H6 isBold>Single item selection</H6>
        <Separator />
        <br />
        <br />
        <P>Selected:</P>
        <P isBold>{selected ? selected.label : 'none'}</P>
        <br />
        <ComboBox
          placeholderName='Name'
          items={items}
          selected={selected}
          setSelected={setSelected}
        />
        <br />
        <CodeBlock code={codeComboBoxSingle} />
        <br />
        <br />
        <br />
        <br />
        <H6 isBold>Multiple item selection</H6>
        <Separator />
        <br />
        <br />
        <P>Selected:</P>
        {selectedMultiple.map((item) => (
          <P isBold key={item.id}>{item.label}</P>
        ))}
        <br />
        <ComboBox
          multiple={true}
          placeholderName='People'
          items={items}
          selected={selectedMultiple}
          setSelected={setSelectedMultiple}
        />
        <br />
        <CodeBlock code={codeComboBoxMultiple} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default ComboboxPage

const codeComboBoxSingle = String.raw`import React, { useState } from 'react'
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
  placeholderName='Name' // shown in empty state
  items={items}
  selected={selected}
  setSelected={setSelected}
/>`


const codeComboBoxMultiple = String.raw`import React, { useState } from 'react'
import ComboBox from '@hummingbot/hbui/components/combobox'

const items = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
]

// pass array instead to useState
const [selectedMultiple, setSelectedMultiple] = useState([items[0]])

<ComboBox
  multiple={true} // enable multiple mode
  placeholderName='People' // shown in empty state
  items={items}
  selected={selectedMultiple}
  setSelected={setSelectedMultiple}
/>`
