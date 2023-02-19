/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P } from '../../../hbui/elements/typography'
import Select from '../../../hbui/components/select'
import Hero from '../../../hbui/components/hero/Hero'

const items = [
  { id: 1, label: 'Durward Reynolds', disabled: false },
  { id: 2, label: 'Kenton Towne', disabled: false },
  { id: 3, label: 'Therese Wunsch', disabled: false },
  { id: 4, label: 'Benedict Kessler', disabled: true },
  { id: 5, label: 'Katelyn Rohan', disabled: false },
]

const SelectPage = () => {
  const [selected, setSelected] = useState(items[0])
  return(
    <Layout>
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>Select</H1>
        <P>Simple Select with keyboard control</P>
      </Hero>
      <MainContent>
        <Select
          items={items}
          selected={selected}
          setSelected={setSelected}
        />
        <br />
        <P>Selected:</P>
        <P isBold>{selected.label}</P>
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default SelectPage

const code = String.raw`import React, { useState } from 'react'
import Select from '@hummingbot/hbui/components/select'

const items = [
  { id: 1, label: 'Durward Reynolds', disabled: false },
  { id: 2, label: 'Kenton Towne', disabled: false },
  { id: 3, label: 'Therese Wunsch', disabled: false },
  { id: 4, label: 'Benedict Kessler', disabled: true },
  { id: 5, label: 'Katelyn Rohan', disabled: false },
]

const [selected, setSelected] = useState(items[0])

<Select
  items={items}
  selected={selected}
  setSelected={setSelected}
/>`
