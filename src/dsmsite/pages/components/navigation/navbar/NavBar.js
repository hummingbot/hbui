import React from 'react'
import { theme } from 'twin.macro'
import { ShortHero, MainContent, PageRoot } from '../../../../ui/elements/layout'
import CodeBlock from '../../../../ui/components/CodeBlock'
import { Body } from '../../../../../../hbui/elements/typography'
import { Separator } from '../../../../../../hbui/elements/layout'
import { NavBar } from '../../../../../../hbui/components/navigation'
import Chip from '../../../../../../hbui/components/chip'

const siteNameA = 'Hummingbot'
const siteNameB = 'Prime'
const userData = {
  name: 'Atif Beyes',
  profileImage: 'https://www.fillmurray.com/32/32'
}
const linksLeft = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/components/navigation/navbar", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/backtests", label: "Backtests" },
]
const linksRight = [
  { url: "/settings", label: "Settings" },
]

function NavBarPage() {
  return (
    <PageRoot>
      <ShortHero
        title="NavBar"
        subTitle="Generic navigation bar"
      />
      <MainContent>
        <Body>
          Default state
        </Body>
        <Separator />
        <br />
        <br />
        <NavBar
          showThemeToggle
          siteNameA={siteNameA}
          siteNameB={siteNameB}
          userData={userData}
          linksLeft={linksLeft}
          linksRight={linksRight}
        />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default NavBarPage

const code = String.raw`import NavBar from '@hummingbot/hbui/components/navigation/NavBar'

const siteNameA = 'Hummingbot'
const siteNameB = 'Prime'
const userData = {
  name: 'Atif Beyes',
  profileImage: 'https://www.fillmurray.com/32/32'
}
const linksLeft = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/components/navigation/navbar", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/backtests", label: "Backtests" },
]
const linksRight = [
  { url: "/settings", label: "Settings" },
]

return (
  <NavBar
    showThemeToggle
    siteNameA={siteNameA}
    siteNameB={siteNameB}
    userData={userData}
    linksLeft={linksLeft}
    linksRight={linksRight}
  />
)
`
