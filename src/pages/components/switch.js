/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import Switch from '../../../hbui/components/switch'
import Hero from '../../../hbui/components/hero/Hero'

const SwitchPage = () => {
  const [active, setActive] = useState(true)
  return (
    <Layout>
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>Switch</H1>
        <P>Simple binary switch control</P>
      </Hero>
      <MainContent>
        <br />
        <br />
        <Switch
          active={active}
          onChange={() => setActive(!active)}
        />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default SwitchPage


const code = String.raw`import React, { useState } from 'react'
import Switch from '@hummingbot/hbui/components/switch'

const [active, setActive] = useState(true)

<Switch
  active={active}
  onChange={() => setActive(!active)}
/>`
