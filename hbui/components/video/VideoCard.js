import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { H6, P } from '../../elements/typography'

function VideoCard({
  videoEmbedSrc,
  title,
  description,
  ...props
  }) {
  return (
    <VideoRoot {...props}>
      <iframe
        tw='w-full aspect-video rounded'
        src={videoEmbedSrc}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
      { title &&
        <HeaderSection>
          <Header isBold>{title}</Header>
        </HeaderSection>
      }
      {description && 
        <Description>
          {description}
        </Description>
      }
    </VideoRoot>
  )
}

export default VideoCard

const VideoRoot = styled.div(() => [
  tw`bg-window border border-window hover:(border-green text-green) dark:(hover:(border-terminal text-terminal))`,
  tw`p-xxs lg:p-xs xl:p-sm rounded-[8px]`,
])

const HeaderSection = styled.div(() => [
  tw`w-full flex items-center pt-xs`,
])

const Header = styled(H6)(() => [
  tw`leading-none`,
  css`
    color: inherit;
  `
])

const Description = styled(P)(() => [
  tw`text-secondary leading-tight pt-xs`,
])
