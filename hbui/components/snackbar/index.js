/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import SuccessIcon from '../../assets/svgs/alerts/SuccessIcon'
import WarningIcon from '../../assets/svgs/alerts/WarningIcon'
import DangerIcon from '../../assets/svgs/alerts/DangerIcon'
import InfoIcon from '../../assets/svgs/alerts/InfoIcon'
import DefaultIcon from '../../assets/svgs/alerts/DefaultIcon'

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
  tw`shadow-xl dark:shadow-xl flex inline-flex overflow-hidden rounded bg-white dark:bg-grey-dark-scale-500`,
  tw`mb-4`,
])

const IconBox = styled.div(({
  type
}) => [
  tw`flex bg-grey-dark-scale-200 items-center px-3 py-3`,
  type === 'success' && [
    tw`bg-green-scale-500`
  ],
  type === 'info' && [
    tw`bg-blue-scale-500`
  ],
  type === 'danger' && [
    tw`bg-red-scale-500`
  ],
  type === 'warning' && [
    tw`bg-orange-scale-500`
  ],
])

const Text = styled.div(() => [
  tw`flex font-medium text-grey-dark-scale-200 dark:text-white items-center px-4`,
])