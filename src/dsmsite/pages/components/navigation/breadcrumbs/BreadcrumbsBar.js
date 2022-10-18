import React from 'react'
import { ShortHero, MainContent, PageRoot } from '../../../../ui/elements/layout'
import CodeBlock from '../../../../../../hbui/components/code/CodeBlock'
import { Body, Bold } from '../../../../../../hbui/elements/typography'
import { Separator } from '../../../../../../hbui/elements/layout'
import {BreadcrumbsBar} from '../../../../../../hbui/components/navigation'

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
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default BreadcrumbsBarPage

const code = String.raw`import BreadcrumbsBar from '@hummingbot/hbui/components/navigation/BreadcrumbsBar'

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
