/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { P, Body } from '../../hbui/elements/typography'
import { ShortHero, MainContent } from '../components/elements/layout'

const GettingStarted = () => (
  <Layout>
    <ShortHero title="Getting Started" />
    <MainContent>
      <br />
      <Body isBold>Start with a Boilerplate project</Body>
      <P>
        Choose a project type:
      </P>
      <br />
      <P>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-cra' target='_blank' rel="noreferrer">
          Create-React-App boilerplate project
        </a>
      </P>
      <br />
      <P>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-gatsby' target='_blank' rel="noreferrer">
          Gatsby boilerplate project
        </a>
      </P>
      <br />
      <P>
        These boilerplate projects have the HBUI Design System pre-installed and everything already set up.
        They contain 2 example pages and demonstrate the usage of typography, buttons and navigation.
      </P>
      <br />
      <br />
      <Body>You should become familiar with these libraries:</Body>
      <a href='https://github.com/ben-rogerson/twin.macro' target='_blank' rel="noreferrer">
        <P isUnderline>twin.macro</P>
      </a>
      <a href='https://tailwindcss.com/' target='_blank' rel="noreferrer">
        <P isUnderline>TailwindCSS</P>
      </a>
      <a href='https://styled-components.com/' target='_blank' rel="noreferrer">
        <P isUnderline>styled-components</P>
      </a>
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default GettingStarted
