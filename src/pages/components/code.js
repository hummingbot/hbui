/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { MainContent } from '../../components/elements/layout'
import { H1, H4, P } from '../../../hbui/elements/typography'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import Layout from '../../components/layout'
import Hero from '../../../hbui/components/hero/Hero'

function CodeBlockPage() {
  return (
    <Layout>
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>Code</H1>
        <P>Code components</P>
      </Hero>
      <MainContent>
        <H4>CodeBlock</H4>
        <P>Show blocks of code with Hummingbot styled syntax highlighting.</P>
        <br />
        <CodeBlock
          code={codeblockCode}
        />
        <br />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default CodeBlockPage

const codeblockCode = `import CodeBlock from '@hummingbot/hbui/components/code/CodeBlock'\n
// declare the code to pass to the component using String.raw:
const myCodeContent = String.raw\`<CodeBlock
  code={myCodeContent}
/>\`

// pass it as a prop to the component:
<CodeBlock
  code={myCodeContent}
/>`