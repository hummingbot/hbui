import React from 'react'
import PropTypes from 'prop-types'
import tw, { styled } from 'twin.macro'
import { Button as ButtonElement } from '../../elements/buttons'
import Spinner from '../spinner'

export const Button = ({ label, iconBefore, iconAfter, variant, loading, ...props }) => {
  return (
    <ButtonElement variant={variant} {...props}>
      {iconBefore && <span className="icon-before">{iconBefore}</span>}
      {label}
      {iconAfter && <span className="icon-after">{iconAfter}</span>}
      {loading && <Spinner color='white' tw='block ml-xxs' radius={15} />}
    </ButtonElement>
  )
}

Button.propTypes = {
  // Button types
  variant: PropTypes.string,
  // disabled state
  isDisabled: PropTypes.bool,
  // Button label content
  label: PropTypes.string.isRequired,
  // Click handler
  onClick: PropTypes.func,
}

Button.defaultProps = {
  variant: 'default',
  label: 'Button',
  isDisabled: false,
  onClick: null,
}


export function ExternalLinkIcon({...props}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      viewBox="0 0 13 14"
    >
      <path
        tw="fill-current"
        d="M12.62.625L8.48.65a.347.347 0 00-.355.356v.838c0 .203.152.38.355.38l1.88-.076.05.051-7.084 7.084a.385.385 0 00-.101.203c0 .076.05.178.101.229l.584.584c.05.05.152.101.229.101.05 0 .152-.05.203-.101l7.084-7.084.05.05-.076 1.88c0 .203.178.355.381.355h.838a.347.347 0 00.356-.355L13 1.005a.39.39 0 00-.38-.38zm-1.651 7.313h-.406a.418.418 0 00-.407.406v3.91c0 .101-.076.152-.152.152H1.37c-.101 0-.152-.05-.152-.152V3.62c0-.076.05-.152.152-.152h3.91a.418.418 0 00.407-.406v-.407a.437.437 0 00-.407-.406H1.22C.533 2.25 0 2.809 0 3.469v8.937c0 .686.533 1.219 1.219 1.219h8.937c.66 0 1.219-.533 1.219-1.219V8.344a.437.437 0 00-.406-.406z"
      ></path>
    </svg>
  );
}

export const CustomExternalLinkButton = styled(ButtonElement)(() => [
  tw`flex justify-between rounded-sm! border`,
  tw`font-medium text-base text-white hover:text-green! dark:text-terminal`,
  tw`bg-green border-green hover:(bg-transparent border-green) active:(bg-transparent border-green/30)`,
  tw`dark:(border-terminal/0 bg-[rgba(95, 255, 215, 0.10)] hover:(text-terminal! bg-transparent border-terminal!) active:(bg-transparent border-terminal/50!))`,
])

export function ExternalLinkButton({label, ...props}) {
  return (
    <CustomExternalLinkButton {...props}>
      {label}
      <ExternalLinkIcon tw='ml-xs' />
    </CustomExternalLinkButton>
  );
}
