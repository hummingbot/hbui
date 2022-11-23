/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { MainContent } from '../components/elements/layout'
import { Container } from '../../hbui/elements/layout'
import { H1, Body, P, H4 } from '../../hbui/elements/typography'
import { Button } from '../../hbui/elements/buttons'
import Hero from '../../hbui/components/hero/Hero'

const IndexPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isHeavy tw='text-green dark:text-terminal'>HBUI</H1>
      <H4>The Hummingbot Design System</H4>
    </Hero>
    <MainContent>
      <Body>Welcome to the Hummingbot Design System</Body>
      <br />
      <P>
        1. The original source of this design system is a <a href='https://www.figma.com/file/0XddWJM8ObnpxEqZQyGLZ4/CoinAlpha-Design-System-1.2?node-id=724%3A7407' target='_blank' rel="noreferrer">Figma document</a> containing
        all the original styles.
      </P>
      <br />
      <P>
        2. The styles are downloaded and parsed via a local script, which
        the <a href='https://css-tricks.com/what-are-design-tokens/' target='_blank' rel="noreferrer">design tokens</a> in
        a local file.
      </P>
      <br />
      <P>
        3. These design tokens are then imported by this project to create a
        custom <a href='https://tailwindcss.com/' target='_blank' rel="noreferrer">TailwindCSS</a> configuration 
        file that reflects the Hummingbot design language.
      </P>
      <br />
      <P>
        4. An <a href='https://www.npmjs.com/package/@hummingbot/hbui' target='_blank' rel="noreferrer">NPM module</a> containing
        a collection of React Elements and Components is provided to facilitate the usage of this 
        design system and drastically accelerate development time, while maintaining consistency across all projects.
      </P>
      <br />
      <P>
        5. By using this NPM module, we achieve the goal of standardising the visual language across all 
        Hummingbot and CoinAlpha projects.
      </P>
      <br />
      <P>
        6. This project is open-source and free to use for everyone. Contributions are encouraged.
      </P>
      <br />
      <br />
      <br />
      <Body>Useful links:</Body>
      <P>
        <a href='https://www.figma.com/file/0XddWJM8ObnpxEqZQyGLZ4/CoinAlpha-Design-System-1.2?node-id=724%3A7407' target='_blank' rel="noreferrer">
          Figma source
        </a>
      </P>
      <P>
        <a href='https://www.npmjs.com/package/@hummingbot/hbui' target='_blank' rel="noreferrer">
          NPM Module
        </a>
      </P>
      <P>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-cra' target='_blank' rel="noreferrer">
        CRA Boilerplate project
        </a> (Boilerplate React app - based on CreateReactApp)
      </P>
      <P>
        <a href='https://github.com/CoinAlpha/hbui-boilerplate-gatsby' target='_blank' rel="noreferrer">
        Gatsby Boilerplate project
        </a> (Boilerplate Gatsby app)
      </P>
      <P>
        <a href='https://github.com/CoinAlpha/hbui' target='_blank' rel="noreferrer">
          Github repo
        </a> of this project
      </P>
      <P>
        <a href='https://tailwindcss.com/' target='_blank' rel="noreferrer">
          TailwindCSS
        </a>
      </P>
      <P>
        <a href='https://github.com/ben-rogerson/twin.macro' target='_blank' rel="noreferrer">
          twin.macro
        </a>
      </P>
    </MainContent>
  </Layout>
)

export default IndexPage
