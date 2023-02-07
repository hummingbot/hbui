/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { H1, P, PLarge } from '../../hbui/elements/typography'
import { MainContent } from '../components/elements/layout'
import Hero from '../../hbui/components/hero/Hero'

const GettingStarted = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Getting Started</H1>
    </Hero>
    <MainContent>
      <br />
      <PLarge isBold>Start with a Boilerplate project</PLarge>
      <P>
        Choose a project type:
      </P>
      <br />
      <P>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-webpack' target='_blank' rel="noreferrer">
          Webpack
        </a>
      </P>
      <br />
      <P>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-webpack-ts' target='_blank' rel="noreferrer">
          Webpack (TypeScript)
        </a>
      </P>
      <br />
      <P>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-gatsby' target='_blank' rel="noreferrer">
          Gatsby
        </a>
      </P>
      <br />
      <P>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-nextjs' target='_blank' rel="noreferrer">
          Next.js
        </a>
      </P>
      <br />
      <P>
        These boilerplate projects have the HBUI Design System pre-installed and everything already set up.
        They contain 2 example pages and demonstrate the usage of typography, buttons and navigation.
      </P>
      <br />
      <br />
      <PLarge>You should be familiar with the following libraries:</PLarge>
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
