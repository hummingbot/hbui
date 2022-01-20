import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonElement } from '../../elements/buttons'

export const Button = ({ label, iconBefore, iconAfter, ...props }) => {
  return (
    <ButtonElement type="button" {...props}>
      {iconBefore && <span className="icon-before">{iconBefore}</span>}
      {label}
      {iconAfter && <span className="icon-after">{iconAfter}</span>}
    </ButtonElement>
  )
}

Button.propTypes = {
  // Button types
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isSmall: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isDanger: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDisabled: PropTypes.bool,
  // Button label content
  label: PropTypes.string.isRequired,
  // Click handler
  onClick: PropTypes.func,
}

Button.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  isSmall: false,
  isSuccess: false,
  isDanger: false,
  isWarning: false,
  isDisabled: false,
  onClick: undefined,
}
