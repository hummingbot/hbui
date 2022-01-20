import React from 'react'
import { theme } from 'twin.macro'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import Spinner from '../../../../hb_ui/components/spinner'

function SpinnerPage() {
  return (
    <div>
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
    </div>
  )
}

export default SpinnerPage

const codeSpinnerDefault = String.raw`import Spinner from '../hb_ui/components/spinner'

<Spinner
  radius={50}
/>
`

const codeSpinnerRed = String.raw`import Spinner from '../hb_ui/components/spinner'

<Spinner
  color='red'
  radius={50}
/>
`

const codeSpinnerGreen = String.raw`import Spinner from '../hb_ui/components/spinner'

<Spinner
  color='green'
  radius={40}
/>
`

const codeSpinnerBlue = String.raw`import Spinner from '../hb_ui/components/spinner'

<Spinner
  center
  color='blue'
  radius={30}
/>
`
