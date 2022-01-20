import React from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import SuccessIcon from '../../../ui_svgs/alerts/SuccessIcon'
import WarningIcon from '../../../ui_svgs/alerts/WarningIcon'
import DangerIcon from '../../../ui_svgs/alerts/DangerIcon'
import InfoIcon from '../../../ui_svgs/alerts/InfoIcon'
import DefaultIcon from '../../../ui_svgs/alerts/DefaultIcon'

const Snackbar = ({ label, type, ...props }) => {
  const stateIcon = getStateIcon(type)
  return (
    <Root type={type} {...props}>
      <IconBox type={type}>{stateIcon}</IconBox>
      <Text>{label}</Text>
    </Root>
  )
}

export default Snackbar

const getStateIcon = (type) => {
  if (type === 'success') return <SuccessIcon />
  if (type === 'warning') return <WarningIcon />
  if (type === 'danger') return <DangerIcon />
  if (type === 'info') return <InfoIcon />
  return <DefaultIcon />
}

const Root = styled.div(({
  type
}) => [
  tw`flex inline-flex overflow-hidden rounded bg-grey-dark-100/10 dark:bg-white/10`,
  tw`mb-4`,
])

const IconBox = styled.div(({
  type
}) => [
  tw`flex bg-grey-dark-500 items-center px-3 py-3`,
  type === 'success' && [
    tw`bg-green`
  ],
  type === 'info' && [
    tw`bg-blue`
  ],
  type === 'danger' && [
    tw`bg-red`
  ],
  type === 'warning' && [
    tw`bg-orange`
  ],
])

const Text = styled.div(({}) => [
  tw`flex font-medium text-primary items-center px-4`,
])
