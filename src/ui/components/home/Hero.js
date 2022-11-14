/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'
import { Section, Container, Window } from '../../../../hbui/elements/layout'
import HeroBlock from '../../../../hbui/components/hero/Hero'
import { H1, H5, P } from '../../../../hbui/elements/typography'

const Hero = () => (
  <Section>
    <HeroBlock containerVariant='short' tw='bg-window border-b border-body'>
      <H1 tw='leading-none'>Welcome</H1>
      <br/>
      <P>This is the HBUI Gatsby Boilerplate</P>
    </HeroBlock>
    <Container variant='short'>
      <br/>
      <br/>
      <br/>
      <Window>
        <H5>Tips</H5>
        <br/>
        <P>This is a dark+light mode enabled project. Try clicking the sun/moon switcher in the navigation to try it out!</P>
        <br/>
        <P>Visit the <Link to='instructions'>Instructions</Link> page to learn how to get started!</P>
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
