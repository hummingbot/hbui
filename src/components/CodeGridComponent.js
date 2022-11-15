/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import CodeBlock from '../../hbui/components/code/CodeBlock'

const CodeGridComponent = ({ element, code }) => {
  return (
    <div tw="grid grid-cols-10 gap-8">
      <div tw="col-span-10 md:col-span-4">{element}</div>
      <div tw="col-span-10 md:col-span-6">
        <CodeBlock code={code} />
      </div>
    </div>
  )
}

export default CodeGridComponent
