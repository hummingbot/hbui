import React from 'react'
import tw, { styled } from 'twin.macro'
import { PSmall } from '../../../hb_ui/elements/typography'

const CodeBlock = ({ code }) => {
  return (
    <code tw='mb-4 text-sm block text-secondary rounded border border-secondary bg-grey-light-200 dark:bg-grey-dark-400 p-4'>
      {code}
    </code>
  )
}

export default CodeBlock
