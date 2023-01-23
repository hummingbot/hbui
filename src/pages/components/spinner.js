/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { theme } from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, PLarge } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import Spinner from '../../../hbui/components/spinner'
import Hero from '../../../hbui/components/hero/Hero'

const SpinnerPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Spinner</H1>
      <P>Versatile SVG-based spinner component to use in loading scenarios</P>
    </Hero>
    <MainContent>
      <PLarge>
        Default color: black & white. Custom colors: green, red, orange, blue.{' '}
      </PLarge>
      <Separator />
      <br />
      <br />
      <PLarge>Default (grey, 40px radius)</PLarge>
      <Spinner />
      <br />
      <br />
      <CodeBlock code={codeSpinnerDefault} />
      <br />
      <br />
      <PLarge>Custom: red, 50px radius</PLarge>
      <Spinner color="red" radius={50} />
      <br />
      <br />
      <CodeBlock code={codeSpinnerRed} />
      <br />
      <br />
      <PLarge>Custom: green, 40px radius</PLarge>
      <Spinner color="green" radius={40} />
      <br />
      <br />
      <CodeBlock code={codeSpinnerGreen} />
      <br />
      <br />
      <PLarge>Custom: blue, centered, 30px radius</PLarge>
      <Spinner center color="blue" radius={30} />
      <br />
      <br />
      <CodeBlock code={codeSpinnerBlue} />
    </MainContent>
  </Layout>
)

export default SpinnerPage

const codeSpinnerDefault = String.raw`import Spinner from '@hummingbot/hbui/components/spinner'

<Spinner
  radius={50}
/>`

const codeSpinnerRed = String.raw`import Spinner from '@hummingbot/hbui/components/spinner'

<Spinner
  color='red'
  radius={50}
/>`

const codeSpinnerGreen = String.raw`import Spinner from '@hummingbot/hbui/components/spinner'

<Spinner
  color='green'
  radius={40}
/>`

const codeSpinnerBlue = String.raw`import Spinner from '@hummingbot/hbui/components/spinner'

<Spinner
  center
  color='blue'
  radius={30}
/>`
