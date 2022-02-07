import React from 'react'
import { styled } from 'twin.macro'
import { H6, H5, P, Body, PTiny } from '../../../hb_ui/elements/typography'
import { PageRoot, Separator } from '../../../hb_ui/elements/layout'
import { ShortHero, MainContent } from '../../ui/elements/layout'
import { Button } from '../../../hb_ui/elements/buttons'
import brandTypeface from './assets/brand_typeface.png'
import coinalphaLogotype from './assets/coinalpha_logotype.png'
import hummingbotLogotype from './assets/hummingbot_logotype.png'

function Downloads() {
  return (
    <PageRoot>
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
            downloadLink='/downloads/typography/satoshi.zip'
            image={brandTypeface}
          />
          <DownloadCard
            title='CoinAlpha Logotype'
            updatedAt='15.1.2022'
            downloadLink='/downloads/coinalpha/coinalpha_logotype.zip'
            image={coinalphaLogotype}
          />
          <DownloadCard
            title='Hummingbot Logotype'
            updatedAt='15.1.2022'
            downloadLink='/downloads/hummingbot/hummingbot_logotype.zip'
            image={hummingbotLogotype}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default Downloads

const DownloadCard = ({title, updatedAt, downloadLink, image}) => {
  return (
    <DownloadCardElement tw='flex border-2 border-secondary rounded'>
      <img src={image} alt={title} tw='max-h-40 lg:max-h-60 border-r border-secondary' />
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