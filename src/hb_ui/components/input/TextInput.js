import React, { useState } from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import { black, greyscale_light_400 } from '../../constants/colors'
import { TextInput as TextInputElement } from '../../elements/input'
import CheckIcon from '../../../ui_svgs/notifications/CheckIcon'
import WarningIcon from '../../../ui_svgs/notifications/WarningIcon'
import ErrorIcon from '../../../ui_svgs/notifications/ErrorIcon'

const TextInput = ({ value, onChange, required, bottomLabel, ...props }) => {
  const [inputFocused, setInputFocused] = useState(false);
  const stateIcon = getStateIcon(props)
  const placeholder = props.placeholder
  if (!placeholder) {
    console.error('TextInput Component: A placeholder value is required')
  }
  return (
    <Root inputFocused={inputFocused} placeholder={placeholder} {...props}>
      { placeholder && 
        <PlaceholderLabel
          className='placeholder-label' 
          {...props}
        >
          {placeholder}{required && <span tw='text-red ml-1'>*</span>}
        </PlaceholderLabel>
      }
      <TextInputElement
        type="text"
        inputFocused
        required
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={value}
        onChange={onChange}
        {...props}
      />
      { bottomLabel &&
        <BottomLabel {...props}>
          {stateIcon} {bottomLabel}
        </BottomLabel>
      }
    </Root>
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

const getStateIcon = (props) => {
  if (props.isValid) return <CheckIcon />
  if (props.isWarning) return <WarningIcon />
  if (props.isInvalid) return <ErrorIcon />
  return null
}

const Root = styled.div(({
  inputFocused,
  isValid,
  isInvalid,
  isWarning,
  placeholder
}) => [
  tw`relative`,
  placeholder && css`
    .placeholder-label {
      top: 0px;
      left: 8px;
    }
  `,
  inputFocused && placeholder && css`
    .placeholder-label {
      opacity: 1;
      top: -10px;
    }
  `,
  inputFocused && placeholder && css`
    .placeholder-label {
      color: ${theme('colors.blue')};
    }
  `,
  isValid && placeholder && css`
    .placeholder-label {
      color: ${theme('colors.green')};
    }
  `,
  isInvalid && placeholder && css`
    .placeholder-label {
      color: ${theme('colors.red')};
    }
  `,
  isWarning && placeholder && css`
    .placeholder-label {
      color: ${theme('colors.orange')};
    }
  `,
])

const PlaceholderLabel = styled.span(({
  isValid,
  isInvalid,
  isWarning,
}) => [
  tw`transition-all absolute duration-200 opacity-0 bg-primary font-medium text-primary text-xs px-2 py-0.5 pointer-events-none focus:outline-none focus:text-blue`,
  isValid && [
    tw`text-green focus:text-green`
  ],
  isInvalid && [
    tw`text-red focus:text-red`
  ],
  isWarning && [
    tw`text-orange focus:text-orange`
  ],
])

const BottomLabel = styled.div(({
  isValid,
  isInvalid,
  isWarning,
}) => [
  tw`flex items-center w-full bg-tertiary font-medium text-dim text-sm px-4 py-2 pointer-events-none focus:outline-none focus:text-blue`,
  isValid && [
    tw`bg-green/10 rounded text-green focus:text-green`
  ],
  isInvalid && [
    tw`bg-red/10 rounded text-red focus:text-red`
  ],
  isWarning && [
    tw`bg-orange/10 rounded text-orange focus:text-orange`
  ],
  css`
    svg {
      margin-right: 6px;
    }
  `,
])
