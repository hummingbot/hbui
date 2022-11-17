/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import { LabelNano } from '../../elements/typography'

function Tag({label='', variant='default', ...props}) {
  return (
    <TagElement variant={variant} {...props}>
      <LabelNano tw='font-medium'>{label}</LabelNano>
    </TagElement>
  )
}

export default Tag

const defaultStyle = [
  tw`border-grey-light-scale-600`,
  css`p { color: ${theme('colors.grey-light-scale.600')};`
]
const infoStyle = [
  tw`border-blue`,
  css`p { color: ${theme('colors.blue')};`
]
const successStyle = [
  tw`border-green`,
  css`p { color: ${theme('colors.green')};`
]
const dangerStyle = [
  tw`border-red`,
  css`p { color: ${theme('colors.red')};`
]
const warningStyle = [
  tw`border-orange`,
  css`p { color: ${theme('colors.orange')};`
]

const tagVariants = {
  default: defaultStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle,
}
const TagElement = styled.div(
  ({
    isUppercase,
  }) => [
  tw`inline-flex rounded p-1 flex justify-center border`,
  ({ variant = 'default' }) => tagVariants[variant],
  isUppercase && tw`uppercase`
])