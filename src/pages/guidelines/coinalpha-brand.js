/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { MainContent } from '../../components/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import {
  P,
  PSmall,
  PLarge,
  H1,
  H6,
} from '../../../hbui/elements/typography'
import { CalloutInfo } from '../../../hbui/components/callout'
import ErrorIcon from '../../../hbui/assets/svgs/notifications/ErrorIcon'

const Brand = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>CoinAlpha Brand</H1>
    </Hero>
    <MainContent>
      <PLarge>Our brand and product logos are clear, impactful and recognizable. In everything we do, we aim to bring focus and clarity to teams without distracting, so our logos and symbols are direct, clear, and impactful. To accomplish this, we adhere to the guidelines below.</PLarge>
      <br />
      <P>The CoinAlpha logo is available in two color schemes: black and white. The black version works best on a white or light background. The white version should be used on dark backgrounds.</P>
      <br />
      <br />
      <img src='/assets/guidelines/brand/logo_bw.png' alt='CoinAlpha' style={{width: '100%'}} />
      <br />
      <CalloutInfo
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
      <img src='/assets/guidelines/brand/logo_proportions.png' alt='Proportions' style={{width: '100%'}} />
      <br />
      <br />
      <br />
      <H6 isBold>Logo minimums</H6>
      <br />
      <P>To ensure legibility of CoinAlpha branding, never use the logos at sizes smaller than the minimum size requirements.</P>
      <br />
      <br />
      <img src='/assets/guidelines/brand/sizes.png' alt='Sizes' style={{width: '100%'}} />
      <br />
      <br />
      <br />
      <H6 isBold>Logo crimes</H6>
      <br />
      <P>To maintain the integrity of the CoinAlpha logo and to promote the consistency of the brand, please do not misuse it. Add soon crimes are listed below.</P>
      <br />
      <br />
      <img src='/assets/guidelines/brand/logo_donts_1.png' alt="Logo dont's 1" style={{width: '100%'}} />
      <br />
      <div tw="grid grid-cols-12 gap-0">
        <div tw="col-span-4">
          <Dont />
          <PSmall>Change logo anatomy</PSmall>
        </div>
        <div tw="col-span-4">
          <Dont />
          <PSmall>Use the logo on top of complex backgrounds</PSmall>
        </div>
        <div tw="col-span-4">
          <Dont />
          <PSmall>Use a drop shadow</PSmall>
        </div>
      </div>
      <br />
      <img src='/assets/guidelines/brand/logo_donts_2.png' alt="Logo dont's 2" style={{width: '100%'}} />
      <br />
      <div tw="grid grid-cols-12 gap-0">
        <div tw="col-span-4">
          <Dont />
          <PSmall>Apply rotation</PSmall>
        </div>
        <div tw="col-span-4">
          <Dont />
          <PSmall>Apply gradients</PSmall>
        </div>
        <div tw="col-span-4">
          <Dont />
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
      <CalloutInfo
        title='Color Library'
        text={<span>These are the colors represented for the CoinAlpha brand. To learn more about the design system color library, see the full <Link to='/guidelines/colors'>color section</Link>.</span>}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
    </MainContent>
  </Layout>
)

function Dont() {
  return(
    <div tw='flex items-center mb-2'>
      <ErrorIcon />
      <P isRed tw='font-medium ml-1.5'>DON'T</P>
    </div>
  )
}

export default Brand
