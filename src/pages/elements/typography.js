/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import {
  P,
  PNano,
  PTiny,
  PSmall,
  PLarge,
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
} from '../../../hbui/elements/typography'
import {
  Separator
} from '../../../hbui/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'

const Typography = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Typography</H1>
      <P>Use the typography elements directly. They are all responsive by default and will ensure typographic consistency.</P>
    </Hero>
    <MainContent>
      <H4>Paragraphs</H4>
      <P>The standard typography unit, available in large, default, small, tiny and nano sizes. Uses the brand's main typeface: Satoshi.</P>
      <Separator />
      <br />
      <br />
      <br />
      <PNano>PNano: The quick brown fox jumps over the lazy dog</PNano>
      <br />
      <PTiny>PTiny: The quick brown fox jumps over the lazy dog</PTiny>
      <br />
      <PSmall>PSmall: The quick brown fox jumps over the lazy dog</PSmall>
      <br />
      <P>P: The quick brown fox jumps over the lazy dog</P>
      <br />
      <PLarge>PLarge: The quick brown fox jumps over the lazy dog</PLarge>
      <br />
      <CodeBlock code={codeParagraphs} />
      <br />
      <br />
      <br />
      <br />
      <H4>Headlines</H4>
      <P>Standard headline elements. Font: Satoshi.</P>
      <Separator />
      <br />
      <br />
      <br />
      <H6>H6: The quick brown fox jumps over the lazy dog</H6>
      <br />
      <H5>H5: The quick brown fox jumps over the lazy dog</H5>
      <br />
      <H4>H4: The quick brown fox jumps over the lazy dog</H4>
      <br />
      <H3>H3: The quick brown fox jumps over the lazy dog</H3>
      <br />
      <H2>H2: The quick brown fox jumps over the lazy dog</H2>
      <br />
      <H1>H1: The quick brown fox jumps over the lazy dog</H1>
      <br />
      <br />
      <CodeBlock code={codeH1} />
      <br />
      <br />
      <H4>Labels</H4>
      <P>Typography elements for forms, these use the font "Inter" for better readability in small sizes. Available in default, small, tiny and nano sizes.</P>
      <Separator />
      <br />
      <br />
      <br />
      <LabelNano>LabelNano: The quick brown fox jumps over the lazy dog</LabelNano>
      <br />
      <LabelTiny>LabelTiny: The quick brown fox jumps over the lazy dog</LabelTiny>
      <br />
      <LabelSmall>LabelSmall: The quick brown fox jumps over the lazy dog</LabelSmall>
      <br />
      <Label>Label: The quick brown fox jumps over the lazy dog</Label>
      <br />
      <br />
      <CodeBlock code={codeLabel} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default Typography

const codeLabel = String.raw`import {
  LabelNano,
  LabelTiny,
  LabelSmall,
  Label
} from '@hummingbot/hbui/elements/typography'

<LabelNano>LabelNano: The quick brown fox jumps over the lazy dog</LabelNano>
<LabelTiny>LabelTiny: The quick brown fox jumps over the lazy dog</LabelTiny>
<LabelSmall>LabelSmall: The quick brown fox jumps over the lazy dog</LabelSmall>
<Label>Label: The quick brown fox jumps over the lazy dog</Label>`

const codeParagraphs = String.raw`import {
  PNano,
  PTiny,
  PSmall,
  P,
  PLarge
} from '@hummingbot/hbui/elements/typography'

<PNano>The quick brown fox jumps over the lazy dog</PNano>
<PTiny>The quick brown fox jumps over the lazy dog</PTiny>
<PSmall>The quick brown fox jumps over the lazy dog</PSmall>
<P>The quick brown fox jumps over the lazy dog</P>
<PLarge>The quick brown fox jumps over the lazy dog</PLarge>`


const codeH1 = String.raw`import {
  H6,
  H5,
  H4,
  H3,
  H2,
  H1
} from '@hummingbot/hbui/elements/typography'

<H6>The quick brown fox jumps over the lazy dog</H6>
<H5>The quick brown fox jumps over the lazy dog</H5>
<H4>The quick brown fox jumps over the lazy dog</H4>
<H3>The quick brown fox jumps over the lazy dog</H3>
<H2>The quick brown fox jumps over the lazy dog</H2>
<H1>The quick brown fox jumps over the lazy dog</H1>`
