import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import {
  P,
  PSmall,
  Body,
  PrimaryColor,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1,
  LabelMicro,
} from '../../../../hb_ui/elements/typography'
import CodeBlock from '../../../ui/components/CodeBlock'

function Typography() {
  return (
    <div>
      <ShortHero
        title="Typography"
        subTitle="Use the typography elements directly. They are all responsive by default and will ensure typographic consistency."
      />
      <MainContent>
        <P isBrandColor>Label Micro</P>
        <br />
        <LabelMicro>The quick brown fox jumps over the lazy dog</LabelMicro>
        <br />
        <CodeBlock code={codeLabelMicro} />
        <br />
        <br />
        <P isBrandColor>Paragraph</P>
        <br />
        <P>The quick brown fox jumps over the lazy dog</P>
        <br />
        <CodeBlock code={codeParagraph} />
        <br />
        <br />
        <P isBrandColor>Paragraph (small)</P>
        <br />
        <PSmall>The quick brown fox jumps over the lazy dog</PSmall>
        <br />
        <CodeBlock code={codeParagraphSmall} />
        <br />
        <br />
        <P isBrandColor>Body</P>
        <br />
        <Body>The quick brown fox jumps over the lazy dog</Body>
        <br />
        <CodeBlock code={codeBody} />
        <br />
        <br />
        <P isBrandColor>H6</P>
        <br />
        <H6>The quick brown fox jumps over the lazy dog</H6>
        <br />
        <CodeBlock code={codeH6} />
        <br />
        <br />
        <P isBrandColor>H5</P>
        <br />
        <H5>The quick brown fox jumps over the lazy dog</H5>
        <br />
        <CodeBlock code={codeH5} />
        <br />
        <br />
        <P isBrandColor>H4</P>
        <br />
        <H4>The quick brown fox jumps over the lazy dog</H4>
        <br />
        <CodeBlock code={codeH4} />
        <br />
        <br />
        <P isBrandColor>H3</P>
        <br />
        <H3>The quick brown fox jumps over the lazy dog</H3>
        <br />
        <CodeBlock code={codeH3} />
        <br />
        <br />
        <P isBrandColor>H2</P>
        <br />
        <H2>The quick brown fox jumps over the lazy dog</H2>
        <br />
        <CodeBlock code={codeH2} />
        <br />
        <br />
        <P isBrandColor>H1</P>
        <br />
        <H1>The quick brown fox jumps over the lazy dog</H1>
        <br />
        <CodeBlock code={codeH1} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default Typography

const codeLabelMicro = String.raw`import { LabelMicro } from '../hb_ui/elements/typography'

<LabelMicro>sdfsfsd</LabelMicro>
`
const codeParagraph = String.raw`import { P } from '../hb_ui/elements/typography'

<P>The quick brown fox jumps over the lazy dog</P>
`
const codeParagraphSmall = String.raw`import { PSmall } from '../hb_ui/elements/typography'

<PSmall>The quick brown fox jumps over the lazy dog</PSmall>
`
const codeBody = String.raw`import { Body } from '../hb_ui/elements/typography'

<Body>The quick brown fox jumps over the lazy dog</Body>
`
const codeH6 = String.raw`import { H5 } from '../hb_ui/elements/typography'

<H5>The quick brown fox jumps over the lazy dog</H5>
`
const codeH5 = String.raw`import { H4 } from '../hb_ui/elements/typography'

<H4>The quick brown fox jumps over the lazy dog</H4>
`
const codeH4 = String.raw`import { H4 } from '../hb_ui/elements/typography'

<H4>The quick brown fox jumps over the lazy dog</H4>
`
const codeH3 = String.raw`import { H3 } from '../hb_ui/elements/typography'

<H3>The quick brown fox jumps over the lazy dog</H3>
`
const codeH2 = String.raw`import { H2 } from '../hb_ui/elements/typography'

<H2>The quick brown fox jumps over the lazy dog</H2>
`
const codeH1 = String.raw`import { H1 } from '../hb_ui/elements/typography'

<H1>The quick brown fox jumps over the lazy dog</H1>
`
