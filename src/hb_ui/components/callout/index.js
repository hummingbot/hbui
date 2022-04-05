import React from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import { Button as ButtonElement } from '../../elements/buttons'
import CheckIcon from '../../svgs/notifications/CheckIcon'
import WarningIcon from '../../svgs/notifications/WarningIcon'
import ErrorIcon from '../../svgs/notifications/ErrorIcon'
import InfoIcon from '../../svgs/notifications/InfoIcon'
import TipIcon from '../../svgs/notifications/TipIcon'
import BugIcon from '../../svgs/notifications/BugIcon'
import NoteIcon from '../../svgs/notifications/NoteIcon'

const Callout = ({ title, text, type, ...props }) => {
  const stateIcon = getStateIcon(type)
  return (
    <Root type={type} {...props}>
      <Header type={type}>
        {stateIcon} {title}
      </Header>
      <Text className="text">{text}</Text>
    </Root>
  )
}

export default Callout

const getStateIcon = type => {
  if (type === 'success') return <CheckIcon />
  if (type === 'warning') return <WarningIcon />
  if (type === 'danger') return <ErrorIcon />
  if (type === 'info') return <InfoIcon />
  if (type === 'tip') return <TipIcon />
  if (type === 'bug') return <BugIcon />
  if (type === 'note') return <NoteIcon />
  return null
}

const Root = styled.div(({ type }) => [
  tw`rounded border-solid border-l-8 border-r border-b border-t border-grey-light-400 bg-grey-light-200 dark:bg-grey-light-100/5`,
  css`
    svg {
      margin-right: 10px;
    }
  `,
  type === 'success' && [
    tw`border-green-100 bg-green-100/20 dark:border-green-300 dark:bg-green-300/10`,
  ],
  type === 'info' && [
    tw`border-blue-100 bg-blue-100/20 dark:border-blue-300 dark:bg-blue-300/10`,
  ],
  type === 'danger' && [
    tw`border-red-100 bg-red-100/20 dark:border-red-300 dark:bg-red-300/10`,
  ],
  type === 'warning' && [
    tw`border-orange-100 bg-orange-100/20 dark:border-orange-300 dark:bg-orange-300/10`,
  ],
  type === 'tip' && [
    tw`border-purple-100 bg-purple-100/20 dark:border-purple-300 dark:bg-purple-300/10`,
  ],
  type === 'bug' && [
    tw`border-orange-100 bg-orange-100/20 dark:border-orange-300 dark:bg-orange-300/10`,
  ],
  type === 'note' && [
    tw`border-grey-light-400 bg-grey-light-400/20 dark:bg-grey-light-100/5`,
  ],
])

const Header = styled.div(({ type }) => [
  tw`flex items-center font-medium text-lg text-grey-dark-700 dark:text-grey-light-500 pt-4 px-4 `,
  type === 'success' && [
    tw`text-green-500 dark:text-green-400 focus:text-green-400`,
  ],
  type === 'info' && [
    tw`text-blue-500 dark:text-blue-300 focus:text-blue-400`,
  ],
  type === 'danger' && [
    tw`text-red-500 dark:text-red-400 focus:text-red-400`,
  ],
  type === 'warning' && [
    tw`text-orange-500 dark:text-orange-400 focus:text-orange-400`,
  ],
  type === 'tip' && [
    tw`text-purple-500 dark:text-purple-100 focus:text-purple-100`,
  ],
  type === 'bug' && [
    tw`text-orange-500 dark:text-orange-400 focus:text-orange-400`,
  ],
  type === 'note' && [tw`text-grey-dark-700 dark:text-white focus:text-white`],
])

const Text = styled.div(({ isSuccess, isInfo, isDanger, isWarning }) => [
  tw`font-medium text-grey-dark-200 dark:text-white px-4 pb-4 pt-2`,
  css`
    a {
      text-decoration: underline;
    }
  `,
])
