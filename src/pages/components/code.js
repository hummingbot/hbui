// /* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import { ShortHero, MainContent } from '../../components/elements/layout'
import { PageRoot } from '../../../hbui/elements/layout'
import { H4, P } from '../../../hbui/elements/typography'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import Layout from '../../components/layout'

function CodeBlockPage() {
  return (
    <Layout>
      <PageRoot>
        <ShortHero
          title="Code"
          subTitle="Code components"
        />
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
      </PageRoot>
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