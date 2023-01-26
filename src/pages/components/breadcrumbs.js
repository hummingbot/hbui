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
import PropsTable from '../../../hbui/components/table/PropsTable'

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
          Simple breadcrumbs bar for internal site navigation
        </PLarge>
        <br />
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
        <PropsTable
          title='Breadcrumbs Props'
          items={[
            {
              propName: 'links',
              type: 'Array',
              default: "null",
              required: 'required',
              description: 'The array of links you intend to display, ads shown in the example above'
            },
            {
              propName: 'linkClass',
              type: 'Class',
              default: "null",
              required: 'required',
              description: 'Pass the { Link } class you are using in your site eg. from "react-router-dom" or "gatsby"'
            },
          ]}
        />
      </MainContent>
    </Layout>
  )
}

export default BreadcrumbsPage

const code = String.raw`import BreadcrumbsBar from '@hummingbot/hbui/components/navigation/BreadcrumbsBar'
import { Link } from 'gatsby'

const breadcrumbLinks = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/fleet", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/components/navigation/breadcrumbs", label: "Backtests" },
]

return (
  <BreadcrumbsBar
    links={breadcrumbLinks}
    linkClass={Link}
  />
)`
