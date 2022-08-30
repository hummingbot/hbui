import React from 'react'
import { Body, P } from '../../../../hbui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'
import CodeBlock from '../../ui/components/CodeBlock'

function GettingStarted() {
  return (
    <PageRoot>
      <ShortHero title="Getting Started" />
      <MainContent>
        <Body>First, you should become familiar with these libraries:</Body>
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
        <br />
        <Body>Two suggestions to get started:</Body>
        <Body isBold>Option 1: Boilerplate project</Body>
        <P>
          This is the easiest way to get started.
        </P>
        <br />
        <P>
          Clone the boilerplate project and start from there: <a href='https://github.com/CoinAlpha/dsm_boilerplate' target='_blank' rel="noreferrer">
          Boilerplate project on Github
          </a>
        </P>
        <br />
        <P>
          The boilerplate project is a React app (based on CreateReactApp) with
          the HBUI NPM module pre-installed and everything already set up. The
          project contains 2 example pages and demo usage of typography.
        </P>
        <br />
        <br />
        <Body isBold>Option 2: Manual install</Body>
        <P>
          Import the NPM module into your React project:
        </P>
        <br />
        <CodeBlock code={codeImport} />
        <br />
        <P>
          Create a file in the root of your project named <span tw='font-bold'>tailwind.config.js</span> with the following content:
        </P>
        <br />
        <CodeBlock code={codeConfig} />
        <br />
        <P>
          Wrap your <span tw='font-bold'>App</span> in the <span tw='font-bold'>ThemeProvider</span> such as in this example:
        </P>
        <br />
        <P>
          (make sure the import paths match the file structure of your app)
        </P>
        <br />
        <CodeBlock code={codeThemeProvider} />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default GettingStarted


const codeImport = String.raw`yarn add @hummingbot/hbui@latest`
const codeConfig = String.raw`module.exports = require('./node_modules/@hummingbot/hbui/system/tailwind.config.js')`
const codeThemeProvider = String.raw`import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './node_modules/@hummingbot/hbui/system/ThemeContext'

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)`
