import React from 'react'
import { ShortHero, MainContent, PageRoot } from '../../../../ui/elements/layout'
import CodeBlock from '../../../../ui/components/CodeBlock'
import { Body, Bold } from '../../../../../hb_ui/elements/typography'
import { Separator } from '../../../../../hb_ui/elements/layout'
import BreadcrumbsBar from '../../../../../hb_ui/components/navigation/BreadcrumbsBar'

const breadcrumbLinks = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/fleet", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/components/navigation/breadcrumbs", label: "Backtests" },
]

function BreadcrumbsBarPage() {
  return (
    <PageRoot>
      <ShortHero
        title="Breadcrumbs"
        subTitle="Generic breadcrumbs bar"
      />
      <MainContent>
        <Body>
          The breadcrumbs bar takes 1 mandatory
          argument: <Bold>links</Bold> - an array of url / label pairs.
          <br />
          <br />
          It uses the React <Bold>NavLink</Bold> internally - a link will be highlighted when a route matches the URL.
        </Body>
        <Separator />
        <br />
        <br />
        <BreadcrumbsBar
          links={breadcrumbLinks}
        />
        <br />
        <br />
        <CodeBlock code={codeSpinnerDefault} />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default BreadcrumbsBarPage

const codeSpinnerDefault = String.raw`import BreadcrumbsBar from '(...)/../hb_ui/components/navigation/BreadcrumbsBar'

const breadcrumbLinks = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/fleet", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/components/navigation/breadcrumbs", label: "Backtests" },
]

return (
  <BreadcrumbsBar
    links={breadcrumbLinks}
  />
)

`
