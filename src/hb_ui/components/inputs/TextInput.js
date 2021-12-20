import React from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import { black, greyscale_light_400 } from '../../constants/colors'

 const TextInput = ({ value, changeHandler, ...props }) => {
  return (
    <TextInputElement
      type="text"
      value={value}
      onChange={changeHandler}
      {...props}
    />
  )
}

export default TextInput

TextInput.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

TextInput.defaultProps = {
  value: '',
  changeHandler: null,
  isSmall: false,
  isLarge: false,
  isDisabled: false,
}

const TextInputElement = styled.input(({ isDisabled, isSmall, isLarge }) => [
  tw`px-5 py-2 rounded-md focus:outline-none`,
  
  css`
    background: ${greyscale_light_400};
    width: 100%;
    color: ${black};
    cursor: pointer;
  `,

  isSmall ? tw`text-xs` : (isLarge ? tw`text-base` : tw`text-sm`),

  isDisabled && [
    css`
      pointer-events: none;
      opacity: 0.3;
    `,
  ],
])
