/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, H4, P, Bold } from '../../../hbui/elements/typography'
import Video from '../../../hbui/components/video/Video'
import VideoCard from '../../../hbui/components/video/VideoCard'
import Hero from '../../../hbui/components/hero/Hero'

const VideoPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Video</H1>
      <P>Collection of Video components</P>
    </Hero>
    <MainContent>
      <H4>Video Card</H4>
      <P>Video component in Card style. Both <Bold>title</Bold> and <Bold>description</Bold> props are optional. If you only pass the videoEmbedSrc prop, the video will still keep a smooth card style.</P>
      <br />
      <VideoCard
        videoEmbedSrc='https://www.youtube.com/embed/T3AuplcGNyo'
        title="Test"
        description="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
      />
      <br />
      <CodeBlock code={videoCardCode} />
      <br />
      <br />
      <H4>Video</H4>
      <P>Barebones video component</P>
      <br />
      <Video
        videoEmbedSrc='https://www.youtube.com/embed/T3AuplcGNyo'
      />
      <br />
      <CodeBlock code={videoStandaloneCode} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default VideoPage

const videoCardCode = String.raw`import VideoCard from '@hummingbot/hbui/components/video/VideoCard'

<VideoCard
  videoEmbedSrc='https://www.youtube.com/embed/T3AuplcGNyo' // must be EMBED url
  title="Test"
  descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
/>`

const videoStandaloneCode = String.raw`import Video from '@hummingbot/hbui/components/video/Video'

<Video
  videoEmbedSrc='https://www.youtube.com/embed/T3AuplcGNyo' // must be EMBED url
/>`
