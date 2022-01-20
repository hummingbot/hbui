import React, { useState } from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import { TextInput as TextInputElement } from '../../elements/input'
import CheckIcon from '../../../ui_svgs/notifications/CheckIcon'
import WarningIcon from '../../../ui_svgs/notifications/WarningIcon'
import ErrorIcon from '../../../ui_svgs/notifications/ErrorIcon'

const TextInput = ({
  value,
  onChange,
  required,
  customTopLabel,
  bottomLabel,
  ...props
}) => {
  const [inputFocused, setInputFocused] = useState(false)
  const stateIcon = getStateIcon(props)
  const placeholder = props.placeholder
  const hasValue =
    value && value !== '' && typeof value === 'string' && value.length > 0
  if (!placeholder) {
    console.error('TextInput Component: A placeholder value is required')
  }
  const labelValue = customTopLabel || placeholder
  return (
    <Root
      hasValue={hasValue}
      inputFocused={inputFocused}
      placeholder={placeholder}
      {...props}
    >
      {labelValue && (
        <PlaceholderLabel className="top-label" {...props}>
          {labelValue}
          {required && <span tw="text-red ml-1">*</span>}
        </PlaceholderLabel>
      )}
      <TextInputElement
        type="text"
        required
        inputFocused
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={value}
        onChange={onChange}
        {...props}
      />
      {bottomLabel && (
        <BottomLabel {...props}>
          {stateIcon} {bottomLabel}
        </BottomLabel>
      )}
    </Root>
  )
}

export default TextInput

TextInput.propTypes = {
  value: PropTypes.string,
  customTopLabel: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  isValid: PropTypes.bool,
  isWarning: PropTypes.bool,
  isInvalid: PropTypes.bool,
}

TextInput.defaultProps = {
  value: '',
  customTopLabel: '',
  onChange: null,
  required: false,
  isValid: false,
  isWarning: false,
  isInvalid: false,
}

const getStateIcon = props => {
  if (props.isValid) return <CheckIcon />
  if (props.isWarning) return <WarningIcon />
  if (props.isInvalid) return <ErrorIcon />
  return null
}

const Root = styled.div(
  ({ hasValue, isValid, isInvalid, isWarning, inputFocused }) => [
    tw`relative`,
    css`
      .top-label {
        top: 0px;
        left: 8px;
      }
    `,
    hasValue &&
      css`
        .top-label {
          opacity: 1;
          top: -10px;
        }
      `,
    hasValue &&
      inputFocused &&
      css`
        .top-label {
          color: ${theme('colors.blue')};
        }
      `,
    isValid &&
      css`
        .top-label {
          color: ${theme('colors.green')};
        }
      `,
    isInvalid &&
      css`
        .top-label {
          color: ${theme('colors.red')};
        }
      `,
    isWarning &&
      css`
        .top-label {
          color: ${theme('colors.orange')};
        }
      `,
  ],
)

const PlaceholderLabel = styled.span(({ isValid, isInvalid, isWarning }) => [
  tw`transition-all absolute duration-200 opacity-0 bg-primary font-medium text-primary text-xs px-2 py-0.5 pointer-events-none focus:outline-none focus:text-blue`,
  isValid && [tw`text-green focus:text-green`],
  isInvalid && [tw`text-red focus:text-red`],
  isWarning && [tw`text-orange focus:text-orange`],
])

const BottomLabel = styled.div(({ isValid, isInvalid, isWarning }) => [
  tw`flex items-center w-full bg-tertiary font-medium text-dim text-sm px-4 py-2 pointer-events-none focus:outline-none focus:text-blue`,
  isValid && [tw`bg-green/10 rounded text-green focus:text-green`],
  isInvalid && [tw`bg-red/10 rounded text-red focus:text-red`],
  isWarning && [tw`bg-orange/10 rounded text-orange focus:text-orange`],
  css`
    svg {
      margin-right: 6px;
    }
  `,
])
