import React from 'react'
import tw, { styled } from 'twin.macro'
import { PSmall } from '../../../../hbui/elements/typography'

const CodeBlock = ({ code }) => {
  return (
    <pre tw="mb-4 p-4 bg-window overflow-x-scroll lg:overflow-x-hidden text-sm text-primary rounded border border-window">
      {code}
    </pre>
  )
}

export default CodeBlock
