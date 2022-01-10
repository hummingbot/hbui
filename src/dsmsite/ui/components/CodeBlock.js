import React from 'react'
import tw, { styled } from 'twin.macro'
import { PSmall } from '../../../hb_ui/elements/typography'


const CodeBlock = ({ code }) => {
  return (
    <pre tw='mb-4 overflow-x-scroll text-sm text-secondary rounded border border-secondary bg-grey-light-200 dark:bg-grey-dark-400 p-4'>
      {code}
    </pre>
  )
}

export default CodeBlock
