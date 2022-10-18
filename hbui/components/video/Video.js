import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { H6, P } from '@hummingbot/hbui/elements/typography'

function Video({
  videoEmbedSrc,
  ...props
  }) {
  return (
    <iframe
      {...props}
      tw='w-full aspect-video rounded'
      src={videoEmbedSrc}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  )
}

export default Video

const VideoRoot = styled.div(() => [
  tw`bg-window border border-window hover:(border-green text-green) dark:(hover:(border-terminal text-terminal))`,
  tw`p-xxs lg:p-xs xl:p-sm rounded-[8px]`,
])
