/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import Layout from '../components/layout'
import { H1, H6, H5, P, PLarge, PTiny } from '../../hbui/elements/typography'
import { PageRoot, Separator } from '../../hbui/elements/layout'
import { Button } from '../../hbui/elements/buttons'
import { MainContent } from '../components/elements/layout'
import Hero from '../../hbui/components/hero/Hero'

const DesignTokens = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Downloads</H1>
    </Hero>
    <MainContent>
      <br />
      <br />
      <PLarge>In addition to the assets provided here, there are additional design resources available in our <a href='https://www.figma.com/file/hf03Mn2cecwA1ioUxlHg9P/Hummingbot-Design-System-1.3' target='_blank' rel="noreferrer">Figma workspace</a>.</PLarge>
      <br />
      <br />
      <H5 isBold>Logo</H5>
      <Separator />
      <br />
      <br />
      <div>
        <DownloadCard
          title='CoinAlpha Logotype'
          updatedAt='Feb 2023'
          downloadLink='/assets/downloads/coinalpha/coinalpha_logotype.zip'
          image='/assets/downloads_page/coinalpha_logotype.png'
        />
        <br />
        <DownloadCard
          title='Hummingbot Logotype'
          updatedAt='Feb 2023'
          downloadLink='/assets/downloads/hummingbot/hummingbot_logotype.zip'
          image='/assets/downloads_page/hummingbot_logotype.png'
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <H5 isBold>Typeface</H5>
      <Separator />
      <br />
      <br />
      <div>
        <DownloadCard
          title='Main typeface'
          updatedAt='Feb 2023'
          downloadLink='/assets/downloads/typography/satoshi.zip'
          image='/assets/downloads_page/brand_typeface.png'
        />
      </div>
      <br />
      <div>
        <DownloadCard
          title='Typeface for small labels'
          updatedAt='Feb 2023'
          downloadLink='/assets/downloads/typography/inter.zip'
          image='/assets/downloads_page/labels_typeface.png'
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <H5 isBold>Utility typefaces</H5>
      <Separator />
      <br />
      <br />
      <div>
        <DownloadCard
          title='Annotations'
          updatedAt='Feb 2023'
          downloadLink='/assets/downloads/typography/indie_flower.zip'
          image='/assets/downloads_page/annotations_typeface.png'
        />
      </div>
      <br />
      <div>
        <DownloadCard
          title='Arrows & Utilities'
          updatedAt='Feb 2023'
          downloadLink='/assets/downloads/typography/pw_new_arrows.zip'
          image='/assets/downloads_page/utilities_typeface.png'
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
      <div tw='py-2 px-3 lg:(py-4 px-6) grid justify-between content-between '>
        <div>
          <H6 isMedium tw='mb-2'>{title}</H6>
          <P tw='text-tertiary'>Updated at {updatedAt}</P>
        </div>
        <a href={downloadLink} target='_blank' rel='noreferrer'><Button isPrimary>Download</Button></a>
      </div>
    </DownloadCardElement>
  )
}

const DownloadCardElement = styled.div({
  '& img': {

  }
})
