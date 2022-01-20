import React from 'react'
import { NavLink } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro'

const Chip = ({ to, label, isUppercase, isDisabled, ...props }) => {
  return (
    <ChipRoot isUppercase={isUppercase} isDisabled={isDisabled}>
      <ChipElement to={to} {...props}>
        {label}
      </ChipElement>
    </ChipRoot>
  )
}

export default Chip

const ChipRoot = styled.span(({ isUppercase, isDisabled }) => [
  tw`flex`,
  css`
    a.active {
      ${tw`bg-tertiary`};
    }
  `,
  isUppercase && [
    css`
      a {
        text-transform: uppercase;
      }
    `,
  ],
  isDisabled && [tw`pointer-events-none opacity-30`],
])

const ChipElement = styled(NavLink)(({}) => [
  tw`flex`,
  tw`transition duration-100`,
  tw`px-4 py-1 lg:px-8 lg:py-1.5 rounded focus:outline-none`,
  tw`bg-transparent hover:bg-tertiary active:bg-quaternary`,
  // tw`bg-transparent border border-primary border-2 hover:bg-tertiary active:bg-quaternary`,
  tw`font-medium`,
  tw`text-tertiary`,
  tw`text-base`,
  css`
    min-width: 100px;
    text-align: center;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
  `,
])
