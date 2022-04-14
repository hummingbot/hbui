import React from 'react'
import { theme } from 'twin.macro'
import { ShortHero, MainContent, PageRoot } from '../../../../ui/elements/layout'
import CodeBlock from '../../../../ui/components/CodeBlock'
import { Body } from '../../../../../hb_ui/elements/typography'
import { Separator } from '../../../../../hb_ui/elements/layout'
import NavBar from '../../../../../hb_ui/components/navigation/NavBar'
import Chip from '../../../../../hb_ui/components/chip'

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
          siteNameA={siteNameA}
          siteNameB={siteNameB}
          userData={userData}
          linksLeft={linksLeft}
          linksRight={linksRight}
        />
        <br />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default NavBarPage

const codeSpinnerDefault = String.raw`import Spinner from '../hb_ui/components/spinner'

<Spinner
  radius={50}
/>
`
