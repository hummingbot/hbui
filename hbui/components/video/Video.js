/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'

function Video({
  videoEmbedSrc,
  ...props
  }) {
  return (
    <iframe
      title={props.title}
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
