import React from 'react'
import { NavLink } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro'

const TextLink = ({ to, label, isDisabled, ...props }) => {
  return (
    <TextLinkElement to={to} className='text-link'>
      {label}
    </TextLinkElement>
  )
}

export default TextLink

const TextLinkElement = styled(NavLink)(({}) => [
  tw`flex`,
  tw`transition duration-100`,
  tw`focus:outline-none`,
  tw`font-medium`,
  tw`text-tertiary`,
  tw`text-sm`,
  css`
    user-select: none;
    cursor: pointer;
  `,
])
