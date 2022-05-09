import React from 'react'
import { NavLink } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro'

const Chip = ({ to, label, isUppercase, isDisabled, ...props }) => {
  return (
    <ChipRoot className='chip' isUppercase={isUppercase} isDisabled={isDisabled}>
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
      ${tw`bg-input`};
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
  tw`px-2 rounded focus:outline-none`,
  tw`bg-transparent hover:bg-button active:bg-button-hover`,
  tw`font-medium`,
  tw`text-button`,
  tw`text-base`,
  css`
    text-align: center;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
  `,
])
