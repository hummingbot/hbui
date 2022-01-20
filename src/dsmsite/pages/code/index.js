import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { Body, P, H5, Bold } from '../../../hb_ui/elements/typography'
import { Separator } from '../../../hb_ui/elements/layout'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'
import TwinMacroLogo from './images/twin-macro'
import TailwindCssLogo from './images/tailwind'
import emotionLogo from './images/emotion.png'

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
          <Bold>Tailwind CSS</Bold> is used as the CSS foundation upon which the
          design system is built. Tailwind CSS is a powerful and flexible CSS
          framework that provides an excellent set of standards to ensure
          consistency across all styles and has a large active community as well
          as a great documentation site.
        </P>
        <br />
        <br />
        <TwinMacroLogo />
        <br />
        <P>
          <Bold>Twin.macro</Bold> blends the magic of Tailwind with the
          flexibility of css-in-js, making it the ideal solutin to use Tailwind
          CSS in React applications.
        </P>
        <br />
        <br />
        <img
          src={emotionLogo}
          alt="Emotion.js"
          style={{ maxHeight: '100px' }}
        />
        <br />
        <P>
          <Bold>Emotion.js</Bold> is the second most popular css-in-js library
          available. Our choice of Emotion.js is based on the fact that it is
          smaller and around 20% faster then styled-components. As of now, there
          are no features unique to styled-components that justify using
          styled-components instead of Emotion.js. We also considered using
          Stitches.js which is even faster, but still has a small community
          compared to that of Emotion.js.
        </P>
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default Code
