/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import Layout from '../components/layout'
import { H6, H5, P, Body, PTiny } from '../../hbui/elements/typography'
import { PageRoot, Separator } from '../../hbui/elements/layout'
import { Button } from '../../hbui/elements/buttons'
import { ShortHero, MainContent } from '../components/elements/layout'
// import Navigation from '../ui/components/Navigation'
// import Hero from '../ui/components/home/Hero'

const DesignTokens = () => (
  <Layout>
    <ShortHero title="Downloads" />
    <MainContent>
      <br />
      <br />
      <Body>In addition to the assets provided here we also offer additional design resources in our Figma workspace. <a href='mailto:support@hummingbot.io'>Contact our support</a> if you need access to Figma.</Body>
      <br />
      <br />
      <H5 isBold>Brand Assets</H5>
      <Separator />
      <br />
      <br />
      <div tw='w-full grid grid-cols-1 xl:grid-cols-2 gap-8'>
        <DownloadCard
          title='CoinAlpha Brand Typeface'
          updatedAt='15.1.2022'
          downloadLink='/downloads_page/typography/satoshi.zip'
          image='/assets/downloads_page/brand_typeface.png'
        />
        <DownloadCard
          title='CoinAlpha Logotype'
          updatedAt='15.1.2022'
          downloadLink='/downloads_page/coinalpha/coinalpha_logotype.zip'
          image='/assets/downloads_page/coinalpha_logotype.png'
        />
        <DownloadCard
          title='Hummingbot Logotype'
          updatedAt='15.1.2022'
          downloadLink='/downloads_page/hummingbot/hummingbot_logotype.zip'
          image='/assets/downloads_page/hummingbot_logotype.png'
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default DesignTokens

const DownloadCard = ({title, updatedAt, downloadLink, image}) => {
  return (
    <DownloadCardElement tw='flex border-2 border-window rounded'>
      <img src={image} alt={title} tw='max-h-40 lg:max-h-60 border-r border-window' />
      <div tw='p-4 lg:p-8 grid justify-between content-between '>
        <div>
          <H6 isMedium tw='mb-2'>{title}</H6>
          <P tw='text-tertiary'>Updated at {updatedAt}</P>
        </div>
        <a href={downloadLink} target='_blank'><Button isPrimary>Download</Button></a>
      </div>
    </DownloadCardElement>
  )
}

const DownloadCardElement = styled.div({
  '& img': {

  }
})
