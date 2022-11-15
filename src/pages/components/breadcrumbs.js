/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { Body, Bold } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import {BreadcrumbsBar} from '../../../hbui/components/navigation'
import { Link }from 'gatsby'

const breadcrumbLinks = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/fleet", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/components/navigation/breadcrumbs", label: "Backtests" },
]

function BreadcrumbsPage() {
  return (
    <Layout>
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
          linkClass={Link}
        />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default BreadcrumbsPage

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
)`
