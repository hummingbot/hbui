import React from 'react'
import { PageRoot, Section } from '../../../../../hbui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import { H3, H4, P, Bold } from '../../../../../hbui/elements/typography'
import Hero from '../../../../../hbui/components/hero/Hero'
import CodeBlock from '../../../../../hbui/components/code/CodeBlock'

function HeroPage() {
  return (
    <PageRoot>
      <ShortHero
        title="Hero"
        subTitle="A responsive Hero component that aligns content automatically"
      />
      <Section>
        <Hero tw='bg-window border border-b border-window'>
          <H3>Hero</H3>
          <P>Hero component</P>
        </Hero>
      </Section>
      <MainContent>
        <br />
        <br />
        <br />
        <P>Import Hero and add your content as children. The children will be automatically aligned to the left in the vertical center.</P>
        <br />
        <P>The height of the Hero is reduced in smaller viewports.</P>
        <br />
        <P>You can style the Hero base block with both the <Bold>tw</Bold> and <Bold>style</Bold> prop.</P>
        <br />
        <CodeBlock
          code={codeBlock}
        />
        <br />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default HeroPage

const codeBlock = String.raw
`import Hero from '@hummingbot/components/hero/Hero'
import tw from 'twin.macro'

<Hero tw='bg-window border border-b border-window'>
  <H3>Hero</H3>
  <P>Hero component</P>
</Hero>`
