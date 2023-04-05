/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { theme } from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, PLarge, Bold, Medium } from '../../../hbui/elements/typography'
import { Separator, Container } from '../../../hbui/elements/layout'
import { NavBar } from '../../../hbui/components/navigation'
import { Link } from 'gatsby'
import Hero from '../../../hbui/components/hero/Hero'

const siteNameA = 'Hummingbot'
const siteNameB = 'Prime'
const userData = null
// const userData = {
//   name: 'Atif Beyes',
//   profileImage: 'https://www.fillmurray.com/32/32'
// }
const linksRight = [
  { url: "/components/navigation/navbar", label: "Launchpad" },
  { url: "/components/navigation/navbar", label: "Fleet" },
  { url: "/components/navigation/navbar", label: "Strategies" },
  { url: null,
    label: 'Item With Sublinks',
    subLinks: [
      { label: 'Anchor Link', url: '/components/navigation/navbar#anchor', external: false },
      { label: 'Inner Page', url: '/components/navigation/navbar', external: false },
      { label: 'External Link', url: 'https://www.google.com', external: true }
    ] 
  },
]
const linksLeft = null

const linkCTA = {
  label: 'CTA',
  url: 'https://www.google.com',
  external: true,
  buttonVariant: 'success',
}

const Navigation = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>NavBar</H1>
      <P>The NavBar components offers a quick and easy way to set up a working navigation</P>
    </Hero>
    <MainContent>
      <PLarge>How to use the NavBar</PLarge>
      <br />
      <P>Create a component called <Bold>Navigation.js</Bold> and place it in your app where your navigation should be shown.</P>
      <br />
      <P>Inside that <Bold>Navigation.js</Bold> component, create an instance of <Bold>NavBar</Bold> and pass in the necessary props as explained and exemplified below.</P>
      <br />
      <Separator />
      <NavBar
        linkClass={Link}
        showThemeToggle
        siteNameA={siteNameA}
        siteNameB={siteNameB}
        userData={userData}
        linksLeft={linksLeft}
        linksRight={linksRight}
        linkCTA={linkCTA}
        position='relative'
        containerVariant='full'
      />
      <br />
      <br />
      <CodeBlock code={code} />
      <br />
      <P>Available props:</P>
      <br />
      <P><Bold>siteNameA:</Bold> (string) This is the main label displayed (usually your site name).</P>
      <br />
      <P><Bold>siteNameB:</Bold> (string) (optional) extra label to append to the main label - for example "Prime" in "Hummingbot Prime". This will be showin in a thinner font style.</P>
      <br />
      <P><Bold>logo:</Bold> (string) default is "hummingbot".</P>
      <br />
      <P><Bold>showThemeToggle:</Bold> (boolean) (default: "false") If true, the NavBar will display an icon to toggle the app between dark and light modes. Do not use this if your app is not ready to deal with these color modes.</P>
      <br />
      <P><Bold>linkClass:</Bold> (class) The Link component of your particular project type (see "important note" below).</P>
      <br />
      <P><Bold>position:</Bold> (string) (default: "fixed") CSS position for the NavBar root. If a value other than "fixed" is needed in your case, pass "relative" or "absolute" accordingly.</P>
      <br />
      <P><Bold>customLogoSVG:</Bold> (SVG component) (default: "null") Provide an SVG component to display as a custom logo.</P>
      <br />
      <P><Bold>containerVariant:</Bold> (string) ("short", "large", "full") to set the desired max-width of the content inside the navbar.</P>
      <br />
      <P><Bold>linksRight:</Bold> (array) Set of links to show in the left side. </P>
      <P tw='pl-sm'>Array should contain a sequence of objects with the following properties:</P>
      <P tw='pl-sm'><Medium>label</Medium> (string)</P>
      <P tw='pl-sm'><Medium>url</Medium> (string)</P>
      <P tw='pl-sm'><Medium>subLinks</Medium> (array) array of objects of nested links - these accept an additional property type "external" (boolean) for external links - these will show an external link icon.</P>
      <br />
      {/*<P><Bold>linksLeft:</Bold> (optional) Set of links to show on the left side. Usage of rightLinks instead os</P>*/}
      <P><Bold>linkCTA:</Bold> (object) (optional) Enables a highlighted CTA to be shown on the right side.</P>
      <P tw='pl-sm'>Object should contain:</P>
      <P tw='pl-sm'><Medium>label</Medium> (string)</P>
      <P tw='pl-sm'><Medium>url</Medium> (string)</P>
      <P tw='pl-sm'><Medium>external</Medium> (boolean)</P>
      <P tw='pl-sm'><Medium>buttonStyle</Medium> (string) - can be "success", "terminal", "info" or "secondary"</P>
      <br />
      <P><Bold>userData:</Bold> (object) (only for apps with a login feature) User data to display if a user is logged in.</P>
      <P tw='pl-sm'>Object should contain:</P>
      <P tw='pl-sm'><Medium>name</Medium> (string)</P>
      <P tw='pl-sm'><Medium>profileImage</Medium> (string) - URL to the profile image</P>
      <br />
      <P isRed isBold>Important note:</P>
      <br />
      <P>The <Bold>Link</Bold> component of your particular project type must be passed as a prop for the <Bold>NavBar</Bold> component to work. For example, CreateReactApp projects use <Bold>Link</Bold> from <Bold>react-router-dom</Bold>, and <Bold>Gatsby</Bold> Projects use <Bold>Link</Bold> from the <Bold>Gatsby</Bold> package itself.</P>
      <br />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default Navigation

const code = String.raw`import NavBar from '@hummingbot/hbui/components/navigation/NavBar'
import { Link } from 'react-router-dom' // or import { Link } from "gatsby" (in gatsby projects) or or import Link from "next/link" (in Next.js projects)

const siteNameA = 'Hummingbot'
const siteNameB = 'Prime'
const userData = null
const linksRight = [
  { url: "/components/navigation/navbar", label: "Launchpad" },
  { url: "/components/navigation/navbar", label: "Fleet" },
  { url: "/components/navigation/navbar", label: "Strategies" },
  { url: null,
    label: 'Item With Sublinks',
    subLinks: [
      { label: 'Anchor Link', url: '/components/navigation/navbar#anchor', external: false },
      { label: 'Inner Page', url: '/components/navigation/navbar', external: false },
      { label: 'External Link', url: 'https://www.google.com', external: true }
    ] 
  },
]
const linksLeft = null
const linkCTA = {
  label: 'CTA',
  url: 'https://www.google.com',
  external: true,
  buttonStyle: 'success',
}

return (
  <NavBar
    linkClass={Link}
    showThemeToggle={true}
    siteNameA={siteNameA}
    siteNameB={siteNameB}
    userData={userData}
    linksLeft={linksLeft}
    linksRight={linksRight}
    linkCTA={linkCTA}
    customLogoSVG={null}
    position='relative'
    containerVariant='full'
  />
)`
