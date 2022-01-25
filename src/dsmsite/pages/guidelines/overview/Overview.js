import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import bgImage from './assets/bg.png'
import {
  P,
  Body,
  PrimaryColor,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1,
  LabelMicro
} from '../../../../hb_ui/elements/typography'
import {
  Separator,
} from '../../../../hb_ui/elements/layout'

function DesignOverview() {
  return (
    <div>
      <ShortHero
        title='Design Guidelines'
        boldTitle={true}
        bgImage={bgImage}
      />
      <MainContent>
        <br />
        <br />
        <Body>The CoinAlpha Design System reflects the patterns and components that underpin the CoinAlpha products. These patterns and components provide a unified language and consistent look and feel when designing apps and products within the CoinAlpha ecosystem.</Body>
        <br />
        <br />
        <H5 isBold>Principles <span tw='text-dim'>#</span></H5>
        <Separator />
        <br />
        <Body>These principles form the foundation of our design system. They guide our team when working on different parts of the system and help us do better and more informed decisions.</Body>
        <br />
        <H6 isBold>Put user needs first</H6>
        <P>We care for the people who use our products. We’re here to make their day-to-day and long-term work better and more pleasant through great user experience.</P>
        <br />
        <br />
        <H6 isBold>Strive for consistency, not uniformity</H6>
        <P>We should use the same language and design patterns wherever possible. This helps people get familiar with our services. Same holds true for the system and its developer experience.</P>
        <br />
        <br />
        <H6 isBold>Default to openness</H6>
        <P>We should share what we’re doing whenever we can. Building our services transparently increases their visibility and accountability and makes us push towards higher quality.</P>
        <br />
        <br />
        <H6 isBold>Make it accessible</H6>
        <P>Our services are for everyone. We make sure people with different needs can use our products and that they meet the accessibility standards.</P>
        <br />
        <br />
        <H6 isBold>Provide a good developer experience</H6>
        <P>Providing a good developer experience is very important to us. Developers should be able to start using our tools in minutes, not hours, days or weeks.</P>
        <br />
        <br />
        <H6 isBold>Automate everything you can</H6>
        <P>We value the time of our colleagues, users, and our future selves over our own. We are always proactively looking for ways to automate repetitive tasks and testing.</P>
        <br />
        <br />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default DesignOverview
