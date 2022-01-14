import React from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import { Button as ButtonElement } from '../../elements/buttons'
import CheckIcon from '../../../ui_svgs/notifications/CheckIcon'
import WarningIcon from '../../../ui_svgs/notifications/WarningIcon'
import ErrorIcon from '../../../ui_svgs/notifications/ErrorIcon'
import InfoIcon from '../../../ui_svgs/notifications/InfoIcon'
import TipIcon from '../../../ui_svgs/notifications/TipIcon'
import BugIcon from '../../../ui_svgs/notifications/BugIcon'
import NoteIcon from '../../../ui_svgs/notifications/NoteIcon'

const Callout = ({ title, text, type, ...props }) => {
  const stateIcon = getStateIcon(type)
  return (
    <Root type={type} {...props}>
      <Header type={type}>{stateIcon} {title}</Header>
      <Text className='text'>{text}</Text>
    </Root>
  )
}

export default Callout

const getStateIcon = (type) => {
  if (type === 'success') return <CheckIcon />
  if (type === 'warning') return <WarningIcon />
  if (type === 'danger') return <ErrorIcon />
  if (type === 'info') return <InfoIcon />
  if (type === 'tip') return <TipIcon />
  if (type === 'bug') return <BugIcon />
  if (type === 'note') return <NoteIcon />
  return null
}

const Root = styled.div(({
  type
}) => [
  tw`border-solid border-l-4 border-grey-light-700`,
  css`
    svg {
      margin-right: 6px;
    }
  `,
  type === 'success' && [
    tw`border-green`
  ],
  type === 'info' && [
    tw`border-blue`
  ],
  type === 'danger' && [
    tw`border-red`
  ],
  type === 'warning' && [
    tw`border-orange`
  ],
  type === 'tip' && [
    tw`border-purple`
  ],
  type === 'bug' && [
    tw`border-orange-active`
  ],
])

const Header = styled.div(({
  type
}) => [
  tw`flex items-center bg-black/5 dark:bg-white/10 font-semibold text-sm text-grey-dark-200 dark:text-grey-light-500 uppercase px-6 py-4`,
  type === 'success' && [
    tw`bg-green/10 dark:bg-green/10 text-green dark:text-green focus:text-green`
  ],
  type === 'info' && [
    tw`bg-blue/10 dark:bg-blue/10 text-blue dark:text-blue focus:text-blue`
  ],
  type === 'danger' && [
    tw`bg-red/10 dark:bg-red/10 text-red dark:text-red focus:text-red`
  ],
  type === 'warning' && [
    tw`bg-orange/10 dark:bg-orange/10 text-orange dark:text-orange focus:text-orange`
  ],
  type === 'tip' && [
    tw`bg-purple/10 dark:bg-purple/10 text-purple dark:text-purple focus:text-purple`
  ],
  type === 'bug' && [
    tw`bg-orange-active/10 dark:bg-orange-active/5 text-orange-active dark:text-orange-hovered focus:text-orange-active`
  ],
])

const Text = styled.div(({
  isSuccess,
  isInfo,
  isDanger,
  isWarning,
}) => [
  tw`bg-primary dark:bg-black/20 font-medium text-primary px-6 py-4`,
])