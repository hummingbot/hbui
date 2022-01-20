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
  tw`shadow-xl dark:shadow-xl flex inline-flex overflow-hidden rounded bg-white dark:bg-grey-dark-500`,
  tw`mb-4`,
  // css`
  //   svg {
  //     margin-right: 8px;
  //   }
  // `,
  // type === 'success' && [
  //   tw`border-green-ui-100`
  // ],
  // type === 'info' && [
  //   tw`border-blue-ui-100`
  // ],
  // type === 'danger' && [
  //   tw`border-red-ui-100`
  // ],
  // type === 'warning' && [
  //   tw`border-orange-ui-100`
  // ],
  // type === 'tip' && [
  //   tw`border-purple-ui-100`
  // ],
  // type === 'bug' && [
  //   tw`border-orange-ui-100`
  // ],
])

const IconBox = styled.div(({
  type
}) => [
  tw`flex bg-grey-dark-200 items-center px-3 py-3`,
  type === 'success' && [
    tw`bg-green-ui-500`
  ],
  type === 'info' && [
    tw`bg-blue-ui-500`
  ],
  type === 'danger' && [
    tw`bg-red-ui-500`
  ],
  type === 'warning' && [
    tw`bg-orange-ui-500`
  ],
])

const Text = styled.div(({}) => [
  tw`flex font-medium text-grey-dark-200 dark:text-white items-center px-4`,
])