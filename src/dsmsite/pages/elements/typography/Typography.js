import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import {
  P,
  PNano,
  PTiny,
  PSmall,
  Body,
  PrimaryColor,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1,
  Label,
  LabelNano,
  LabelTiny,
  LabelSmall,
} from '../../../../../hbui/elements/typography'
import {
  Separator
} from '../../../../../hbui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'

function Typography() {
  return (
    <div>
      <ShortHero
        title="Typography"
        subTitle="Use the typography elements directly. They are all responsive by default and will ensure typographic consistency."
      />
      <MainContent>
        <H4>Paragraphs</H4>
        <P>Most standard typography unit, available in default, small, tiny and nano sizes. Uses the brand's main typeface: Satoshi.</P>
        <Separator />
        <br />
        <P tw='text-green dark:text-terminal'>Paragraph (nano)</P>
        <br />
        <PNano>The quick brown fox jumps over the lazy dog</PNano>
        <br />
        <CodeBlock code={codeParagraphNano} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>Paragraph (tiny)</P>
        <br />
        <PTiny>The quick brown fox jumps over the lazy dog</PTiny>
        <br />
        <CodeBlock code={codeParagraphTiny} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>Paragraph (small)</P>
        <br />
        <PSmall>The quick brown fox jumps over the lazy dog</PSmall>
        <br />
        <CodeBlock code={codeParagraphSmall} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>Paragraph (default)</P>
        <br />
        <P>The quick brown fox jumps over the lazy dog</P>
        <br />
        <CodeBlock code={codeParagraph} />
        <br />
        <br />
        <H4>Labels</H4>
        <P>Typography elements for forms. Based on the same sizes as the Paragraph variants, these use the font "Inter" for better readability in small sizes. Available in default, small, tiny and nano sizes.</P>
        <Separator />
        <br />
        <P tw='text-green dark:text-terminal'>Label (nano)</P>
        <br />
        <LabelNano>The quick brown fox jumps over the lazy dog</LabelNano>
        <br />
        <CodeBlock code={codeLabelNano} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>Label (tiny)</P>
        <br />
        <LabelTiny>The quick brown fox jumps over the lazy dog</LabelTiny>
        <br />
        <CodeBlock code={codeLabelTiny} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>Label (small)</P>
        <br />
        <LabelSmall>The quick brown fox jumps over the lazy dog</LabelSmall>
        <br />
        <CodeBlock code={codeLabelSmall} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>Label (default)</P>
        <br />
        <Label>The quick brown fox jumps over the lazy dog</Label>
        <br />
        <CodeBlock code={codeLabel} />
        <br />
        <br />
        <H4>Body</H4>
        <P>Slightly larger typography unit, to be used in bodies of text for enhanced readability. Font: Satoshi.</P>
        <Separator />
        <br />
        <P tw='text-green dark:text-terminal'>Body</P>
        <br />
        <Body>The quick brown fox jumps over the lazy dog</Body>
        <br />
        <CodeBlock code={codeBody} />
        <br />
        <br />
        <H4>Headlines</H4>
        <P>Standard headline elements. Font: Satoshi.</P>
        <Separator />
        <br />
        <P tw='text-green dark:text-terminal'>H6</P>
        <br />
        <H6>The quick brown fox jumps over the lazy dog</H6>
        <br />
        <CodeBlock code={codeH6} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>H5</P>
        <br />
        <H5>The quick brown fox jumps over the lazy dog</H5>
        <br />
        <CodeBlock code={codeH5} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>H4</P>
        <br />
        <H4>The quick brown fox jumps over the lazy dog</H4>
        <br />
        <CodeBlock code={codeH4} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>H3</P>
        <br />
        <H3>The quick brown fox jumps over the lazy dog</H3>
        <br />
        <CodeBlock code={codeH3} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>H2</P>
        <br />
        <H2>The quick brown fox jumps over the lazy dog</H2>
        <br />
        <CodeBlock code={codeH2} />
        <br />
        <br />
        <P tw='text-green dark:text-terminal'>H1</P>
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

const codeLabel = String.raw`import { Label } from '@hummingbot/hbui/elements/typography'

<Label>sdfsfsd</Label>
`

const codeLabelSmall = String.raw`import { LabelSmall } from '@hummingbot/hbui/elements/typography'

<LabelSmall>sdfsfsd</LabelSmall>
`

const codeLabelNano = String.raw`import { LabelNano } from '@hummingbot/hbui/elements/typography'

<LabelNano>sdfsfsd</LabelNano>
`

const codeLabelTiny = String.raw`import { LabelTiny } from '@hummingbot/hbui/elements/typography'

<LabelTiny>sdfsfsd</LabelTiny>
`


const codeParagraph = String.raw`import { P } from '@hummingbot/hbui/elements/typography'

<P>The quick brown fox jumps over the lazy dog</P>
`
const codeParagraphSmall = String.raw`import { PSmall } from '@hummingbot/hbui/elements/typography'

<PSmall>The quick brown fox jumps over the lazy dog</PSmall>
`
const codeParagraphTiny = String.raw`import { PTiny } from '@hummingbot/hbui/elements/typography'

<PTiny>The quick brown fox jumps over the lazy dog</PTiny>
`
const codeParagraphNano = String.raw`import { PNano } from '@hummingbot/hbui/elements/typography'

<PNano>The quick brown fox jumps over the lazy dog</PNano>
`


const codeBody = String.raw`import { Body } from '@hummingbot/hbui/elements/typography'

<Body>The quick brown fox jumps over the lazy dog</Body>
`


const codeH6 = String.raw`import { H5 } from '@hummingbot/hbui/elements/typography'

<H5>The quick brown fox jumps over the lazy dog</H5>
`
const codeH5 = String.raw`import { H4 } from '@hummingbot/hbui/elements/typography'

<H4>The quick brown fox jumps over the lazy dog</H4>
`
const codeH4 = String.raw`import { H4 } from '@hummingbot/hbui/elements/typography'

<H4>The quick brown fox jumps over the lazy dog</H4>
`
const codeH3 = String.raw`import { H3 } from '@hummingbot/hbui/elements/typography'

<H3>The quick brown fox jumps over the lazy dog</H3>
`
const codeH2 = String.raw`import { H2 } from '@hummingbot/hbui/elements/typography'

<H2>The quick brown fox jumps over the lazy dog</H2>
`
const codeH1 = String.raw`import { H1 } from '@hummingbot/hbui/elements/typography'

<H1>The quick brown fox jumps over the lazy dog</H1>
`
