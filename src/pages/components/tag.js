/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, Body } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import Tag from '../../../hbui/components/tag'
import Hero from '../../../hbui/components/hero/Hero'

const TagPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Tag</H1>
      <P>Simple Tag component with multiple states</P>
    </Hero>
    <MainContent>
      <br />
      <br />
      <Body>Default</Body>
      <Tag
        label='Default'
        variant='default'
      />
      <br />
      <br />
      <CodeBlock code={code} />
      <br />
      <br />
      <Body>Uppercase</Body>
      <Tag
        label='Default'
        variant='default'
        isUppercase={true}
      />
      <br />
      <br />
      <CodeBlock code={codeUppercase} />
      <br />
      <br />
      <Body>Success</Body>
      <Tag
        label='Success'
        variant='success'
      />
      <br />
      <br />
      <CodeBlock code={codeSuccess} />
      <br />
      <br />
      <Body>Info</Body>
      <Tag
        label='Info'
        variant='info'
      />
      <br />
      <br />
      <CodeBlock code={codeInfo} />
      <br />
      <br />
      <Body>Warning</Body>
      <Tag
        label='Warning'
        variant='warning'
      />
      <br />
      <br />
      <CodeBlock code={codeWarning} />
      <br />
      <br />
      <Body>Danger</Body>
      <Tag
        label='Danger'
        variant='danger'
      />
      <br />
      <br />
      <CodeBlock code={codeDanger} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default TagPage


const code = String.raw`import Switch from '@hummingbot/hbui/components/switch'

<Switch
  active={true}
/>`

const codeUppercase = String.raw`import Switch from '@hummingbot/hbui/components/switch'

<Switch
  active={true}
/>`

const codeInfo = String.raw`import Switch from '@hummingbot/hbui/components/switch'

<Switch
  active={true}
/>`

const codeSuccess = String.raw`import Switch from '@hummingbot/hbui/components/switch'

<Switch
  active={true}
/>`

const codeWarning = String.raw`import Switch from '@hummingbot/hbui/components/switch'

<Switch
  active={true}
/>`

const codeDanger = String.raw`import Switch from '@hummingbot/hbui/components/switch'

<Switch
  active={true}
/>`
