import React, { useState } from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import { black, greyscale_light_400 } from '../../constants/colors'
import { TextInput as TextInputElement } from '../../elements/input'
import CheckIcon from '../../../ui_svgs/notifications/CheckIcon'
import WarningIcon from '../../../ui_svgs/notifications/WarningIcon'
import ErrorIcon from '../../../ui_svgs/notifications/ErrorIcon'

const TextInput = ({ value, label, onChange, required, extendedLabel, ...props }) => {
  const [inputFocused, setInputFocused] = useState(false);
  const stateIcon = getStateIcon(props)
  return (
    <Root label={label} inputFocused={inputFocused} {...props}>
      <Label
        className='label' 
        {...props}
      >
        {label}{required && <span tw='text-red ml-1'>*</span>}
      </Label>
      <TextInputElement
        type="text"
        inputFocused
        required
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        label={label}
        value={value}
        onChange={onChange}
        {...props}
      />
      { extendedLabel &&
        <ExtendedLabel {...props}>
          {stateIcon} {extendedLabel}
        </ExtendedLabel>
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

const Root = styled.span(({
  inputFocused,
  isValid,
  isInvalid,
  isWarning,
  label
}) => [
  inputFocused && label && css`
    .label {
      color: ${theme('colors.blue')};
    }
  `,
  isValid && label && css`
    .label {
      color: ${theme('colors.green')};
    }
  `,
  isInvalid && label && css`
    .label {
      color: ${theme('colors.red')};
    }
  `,
  isWarning && label && css`
    .label {
      color: ${theme('colors.orange')};
    }
  `,

  label && css`
    .label {
      position: relative;
      top: 11px;
      left: 8px;
    }
  `,
])

const Label = styled.span(({
  isValid,
  isInvalid,
  isWarning,
}) => [
  tw`bg-primary font-medium text-primary text-xs px-2 py-0.5 pointer-events-none focus:outline-none focus:text-blue`,
  isValid && [
    tw`text-green focus:text-green`
  ],
  isInvalid && [
    tw`text-red focus:text-red`
  ],
  isWarning && [
    tw`text-orange focus:text-orange`
  ],
  css`
    position: relative;
    top: 11px;
    left: 8px;
  `,
])

const ExtendedLabel = styled.div(({
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
