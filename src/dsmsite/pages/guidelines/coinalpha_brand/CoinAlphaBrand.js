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

function CoinAlphaBrand() {
  return (
    <div>
      <ShortHero
        title='CoinAlpha Brand'
        boldTitle={true}
      />
      <MainContent>
        <br />
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

export default CoinAlphaBrand
