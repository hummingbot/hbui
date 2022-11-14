/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { theme } from 'twin.macro'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { Body } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import Spinner from '../../../hbui/components/spinner'

const SpinnerPage = () => (
  <Layout>
    <ShortHero
      title="Spinner"
      subTitle="Versatile SVG-based spinner component to use in loading scenarios"
    />
    <MainContent>
      <Body>
        Default color: black & white. Custom colors: green, red, orange, blue.{' '}
      </Body>
      <Separator />
      <br />
      <br />
      <Body>Default (grey, 40px radius)</Body>
      <Spinner />
      <br />
      <br />
      <CodeBlock code={codeSpinnerDefault} />
      <br />
      <br />
      <Body>Custom: red, 50px radius</Body>
      <Spinner color="red" radius={50} />
      <br />
      <br />
      <CodeBlock code={codeSpinnerRed} />
      <br />
      <br />
      <Body>Custom: green, 40px radius</Body>
      <Spinner color="green" radius={40} />
      <br />
      <br />
      <CodeBlock code={codeSpinnerGreen} />
      <br />
      <br />
      <Body>Custom: blue, centered, 30px radius</Body>
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
