import React from 'react'
import { theme } from 'twin.macro'
import { ShortHero, MainContent, PageRoot } from '../../../../ui/elements/layout'
import CodeBlock from '../../../../ui/components/CodeBlock'
import { Body } from '../../../../../hb_ui/elements/typography'
import { Separator } from '../../../../../hb_ui/elements/layout'
import Spinner from '../../../../../hb_ui/components/spinner'

function BreadcrumbsBarPage() {
  return (
    <PageRoot>
      <ShortHero
        title="Breadcrumbs"
        subTitle="Generic breadcrumbs bar"
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
      </MainContent>
    </PageRoot>
  )
}

export default BreadcrumbsBarPage

const codeSpinnerDefault = String.raw`import Spinner from '../hb_ui/components/spinner'

<Spinner
  radius={50}
/>
`
