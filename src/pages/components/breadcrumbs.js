/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, PLarge, Bold } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import {BreadcrumbsBar} from '../../../hbui/components/navigation'
import { Link }from 'gatsby'
import Hero from '../../../hbui/components/hero/Hero'

const breadcrumbLinks = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/fleet", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/components/navigation/breadcrumbs", label: "Backtests" },
]

function BreadcrumbsPage() {
  return (
    <Layout>
      <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
        <H1 isBold>Breadcrumbs</H1>
        <P>Generic breadcrumbs bar</P>
      </Hero>
      <MainContent>
        <PLarge>
          The breadcrumbs bar takes 1 mandatory
          argument: <Bold>links</Bold> - an array of url / label pairs.
          <br />
          <br />
          It uses the React <Bold>NavLink</Bold> internally - a link will be highlighted when a route matches the URL.
        </PLarge>
        <Separator tw='mb-[2px]' />
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
