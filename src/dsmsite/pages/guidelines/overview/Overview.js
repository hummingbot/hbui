import React from 'react'
import { Link } from 'react-router-dom'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import {
  P,
  PSmall,
  Body,
  H2,
  H4,
  H6,
  H5,
  LabelMicro
} from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import bgImage from './assets/bg.png'
import logoBw from './assets/logo_bw.png'
import logoProportions from './assets/logo_proportions.png'
import logoSizes from './assets/sizes.png'
import logoDonts1 from './assets/logo_donts_1.png'
import logoDonts2 from './assets/logo_donts_2.png'
import Callout from '../../../../hb_ui/components/callout'
import ErrorIcon from '../../../../hb_ui/svgs/notifications/ErrorIcon'

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
        <br />
        <H5 isBold>CoinAlpha Brand <span tw='text-dim'>#</span></H5>
        <Separator />
        <br />
        <Body>Our brand and product logos are clear, impactful and recognizable. In everything we do, we aim to bring focus and clarity to teams without distracting, so our logos and symbols are direct, clear, and impactful. To accomplish this, we adhere to the guidelines below.</Body>
        <br />
        <P>The CoinAlpha logo is available in two color schemes: black and white. The black version works best on a white or light background. The white version should be used on dark backgrounds.</P>
        <br />
        <br />
        <img src={logoBw} alt='CoinAlpha' style={{width: '100%'}} />
        <br />
        <Callout
          type='info'
          title='Download Brand Assets'
          text={<span>Get access to all the necessary formats so you can work with the correct brand requirements. <Link to='/downloads'>Download</Link>.</span>}
        />
        <br />
        <br />
        <br />
        <H6 isBold>Clearance (Minimum)</H6>
        <br />
        <P>To ensure that logos are clearly visible, surround them with clear minimal space that is free of type, graphics, and other elements that might cause visual clutter.</P>
        <br />
        <P>To make this calculation, 1x (unit) the scale of the symbol is used and the value is replicated by the margins of the logotype.</P>
        <br />
        <br />
        <img src={logoProportions} alt='Proportions' style={{width: '100%'}} />
        <br />
        <br />
        <br />
        <H6 isBold>Logo minimums</H6>
        <br />
        <P>To ensure legibility of CoinAlpha branding, never use the logos at sizes smaller than the minimum size requirements.</P>
        <br />
        <br />
        <img src={logoSizes} alt='Sizes' style={{width: '100%'}} />
        <br />
        <br />
        <br />
        <H6 isBold>Logo crimes</H6>
        <br />
        <P>To maintain the integrity of the CoinAlpha logo and to promote the consistency of the brand, please do not misuse it. Add soon crimes are listed below.</P>
        <br />
        <br />
        <img src={logoDonts1} alt="Logo dont's 1" style={{width: '100%'}} />
        <br />
        <div tw="grid grid-cols-12 gap-0">
          <div tw="col-span-4">
            {dont}
            <PSmall>Change logo anatomy</PSmall>
          </div>
          <div tw="col-span-4">
            {dont}
            <PSmall>Use the logo on top of complex backgrounds</PSmall>
          </div>
          <div tw="col-span-4">
            {dont}
            <PSmall>Use a drop shadow</PSmall>
          </div>
        </div>
        <br />
        <img src={logoDonts2} alt="Logo dont's 2" style={{width: '100%'}} />
        <br />
        <div tw="grid grid-cols-12 gap-0">
          <div tw="col-span-4">
            {dont}
            <PSmall>Apply rotation</PSmall>
          </div>
          <div tw="col-span-4">
            {dont}
            <PSmall>Apply rotation</PSmall>
          </div>
          <div tw="col-span-4">
            {dont}
            <PSmall>Use outline style</PSmall>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <H6 isBold>Brand colors</H6>
        <br />
        <P>Our primary colors are Black and White. They should be used in all applications within the brand with more weight than any other color.</P>
        <br />
        <br />
        <div tw="grid grid-cols-12 gap-0">
          <div tw="grid justify-between content-between col-span-12 md:col-span-6 bg-black py-4 px-5 h-[220px] md:h-[300px] relative">
            <P tw='font-medium' isWhite>Primary Black</P>
            <div>
              <PSmall tw='font-medium' isWhite>VAR (--n-color-ac-primary-black)</PSmall>
              <PSmall tw='font-medium' isWhite>HEX (#000000)</PSmall>
              <PSmall tw='font-medium' isWhite>RGB (0, 0, 0)</PSmall>
            </div>
          </div>
          <div tw="grid justify-between content-between col-span-12 md:col-span-6 bg-white py-4 px-5 h-[220px] md:h-[300px] relative">
            <P tw='font-medium'>Primary White</P>
            <div>
              <PSmall tw='font-medium'>VAR (--n-color-ac-primary-white)</PSmall>
              <PSmall tw='font-medium'>HEX (#FFFFFF)</PSmall>
              <PSmall tw='font-medium'>RGB (255, 255, 255)</PSmall>
            </div>
          </div>
        </div>
        <br />
        <Callout
          type='info'
          title='Color Library'
          text={<span>These are the colors represented for the AlphaCoin brand. To learn more about the design system color library, see the full <Link to='/guidelines/colors'>color section</Link>.</span>}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <H6 isBold>Typography</H6>
        <br />
        <P>The AlphaCoin typeface is called Satoshi. It’s used in all aspects of the brand. In headings, body copy, captions and numbers.</P>
        <br />
        <br />
        <H2 isBold tw='leading-tight'>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789</H2>
        <br />
        <br />
        <br />
        <PSmall>Type weights</PSmall>
        <br />
        <div tw="grid grid-cols-12 gap-4">
          <div tw="grid col-span-12 md:col-span-6">
            <H4 tw='py-4 font-light border-solid border-b-2 border-primary'>Satoshi Light</H4>
            <H4 tw='py-4 font-normal border-solid border-b-2 border-primary'>Satoshi Regular</H4>
            <H4 tw='py-4 font-medium border-solid border-b-2 border-primary'>Satoshi Medium</H4>
            <H4 tw='py-4 font-bold border-solid border-b-2 border-primary'>Satoshi Bold</H4>
            <H4 tw='py-4 font-black border-solid border-b-2 border-primary'>Satoshi Black</H4>
          </div>
          <div tw="grid col-span-12 md:col-span-6">
            <H4 tw='py-4 font-light border-solid border-b-2 border-primary italic'>Satoshi Light Italic</H4>
            <H4 tw='py-4 font-normal border-solid border-b-2 border-primary italic'>Satoshi Regular Italic</H4>
            <H4 tw='py-4 font-medium border-solid border-b-2 border-primary italic'>Satoshi Medium Italic</H4>
            <H4 tw='py-4 font-bold border-solid border-b-2 border-primary italic'>Satoshi Bold Italic</H4>
            <H4 tw='py-4 font-black border-solid border-b-2 border-primary italic'>Satoshi Black Italic</H4>
          </div>
        </div>
        <br />
        <br />
        <Callout
          type='info'
          title='Typeface Asset'
          text={<span>You can download the font pack from the <Link to='/downloads#typography'>resources section</Link>.</span>}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

const dont = (
  <div tw='flex items-center mb-2'>
    <ErrorIcon />
    <P isRed tw='font-medium ml-1.5'>DON'T</P>
  </div>
)

export default DesignOverview
