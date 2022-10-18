import React from 'react'
import { PageRoot, ShortHero, MainContent } from '../../../ui/elements/layout'
import { H4, P } from '../../../../../hbui/elements/typography'
import CodeBlock from '../../../../../hbui/components/code/CodeBlock'

function CodeBlockPage() {
  return (
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
  )
}

export default CodeBlockPage

const codeblockCode = "import CodeBlock from '@hummingbot/hbui/components/code/CodeBlock'" + "\n" +

"" + "\n" +
"// declare the code to pass to the component using String.raw:" + "\n" +
"const myCodeContent = String.raw`<CodeBlock" + "\n" +
"  code={myCodeContent}" + "\n" +
"/>`" + "\n" +
"" + "\n" +
"// pass it as a prop to the component:" + "\n" +
"<CodeBlock" + "\n" +
"  code={myCodeContent}" + "\n" +
"/>"