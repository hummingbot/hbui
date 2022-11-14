/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section, Container, Window } from '../../../../hbui/elements/layout'
import CodeBlock from '../../../../hbui/components/code/CodeBlock'
import HeroBlock from '../../../../hbui/components/hero/Hero'
import { H1, H5, P } from '../../../../hbui/elements/typography'
import { Button } from '../../../../hbui/elements/buttons'

const Hero = () => (
  <Section>
    <HeroBlock containerVariant='short' tw='bg-window border-b border-body'>
      <H1 tw='leading-none'>Instructions</H1>
      <br/>
      <P>How to use this template</P>
    </HeroBlock>
    <Container variant='short'>
      <br/>
      <br/>
      <br/>
      <Window>
        <H5>Getting started</H5>
        <br/>
        <P isBold>Clone the project</P>
        <br/>
        <CodeBlock code={code1} />
        <br/>
        <P isBold>Install dependencies</P>
        <br/>
        <CodeBlock code={code2} />
        <br/>
        <P isBold>Start the project</P>
        <br/>
        <CodeBlock code={code3} />
        <br/>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-gatsby' target='_blank' rel='noreferrer'>
          <Button variant='info'>
            Visit the Github site
          </Button>
        </a>
      </Window>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  </Section>
)

export default Hero

const code1 = String.raw`// replace some-folder-name with your desired folder name
git clone git@github.com:CoinAlpha/hbui-boilerplate-gatsby.git some-folder-name`

const code2 = String.raw`yarn`

const code3 = String.raw`yarn develop`
