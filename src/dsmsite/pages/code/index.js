import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { Body, P, H5, Bold } from '../../../../hbui/elements/typography'
import { Separator } from '../../../../hbui/elements/layout'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'
import TwinMacroLogo from './images/twin-macro'
import TailwindCssLogo from './images/tailwind'

function Code() {
  return (
    <PageRoot>
      <ShortHero
        title="Code"
        subTitle="The code foundations of the CoinAlpha design system"
      />
      <MainContent>
        <H5>Overview</H5>
        <br />
        <P>
          The CoinAlpha design system provides a ready-to-use code framework
          which makes the UI development quick and consistent.
        </P>
        <br />
        <P>
          To avoid re-inventing the wheel, the CoinAlpha design system is built
          upon existing 3rd-party libraries to leverage the support of active
          communities that evolve independently and provide well-maintained
          documentation.
        </P>
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <H5>The three pillars of this framework:</H5>
        <br />
        <br />
        <TailwindCssLogo />
        <br />
        <P>
          <Bold>Tailwind CSS</Bold> is a utility-first framework which generates
          a set of utility classes based on design tokens from our Design System created in Figma.
          This provides a reliable set of standards to ensure consistency across all Hummingbot
          projects with the added benefit of a large active community as well
          as a great documentation site.
        </P>
        <br />
        <br />
        <TwinMacroLogo />
        <br />
        <P>
          <Bold>Twin.macro</Bold> allows us to use the generated utility classes inside
          JavaScript and ensures only the used classes are bundled with the final code.
        </P>
        <br />
        <br />
        <div style={{fontSize: '50px'}}>💅</div>
        <P>
          <Bold>styled-components</Bold> is the most popular css-in-js library
          available, with a large community and 100% complete feature set.
        </P>
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default Code
