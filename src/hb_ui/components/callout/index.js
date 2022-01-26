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
    tw`border-green-ui-100 bg-green-ui-100/20 dark:border-green-ui-300 dark:bg-green-ui-300/10`,
  ],
  type === 'info' && [
    tw`border-blue-ui-100 bg-blue-ui-100/20 dark:border-blue-ui-300 dark:bg-blue-ui-300/10`,
  ],
  type === 'danger' && [
    tw`border-red-ui-100 bg-red-ui-100/20 dark:border-red-ui-300 dark:bg-red-ui-300/10`,
  ],
  type === 'warning' && [
    tw`border-orange-ui-100 bg-orange-ui-100/20 dark:border-orange-ui-300 dark:bg-orange-ui-300/10`,
  ],
  type === 'tip' && [
    tw`border-purple-ui-100 bg-purple-ui-100/20 dark:border-purple-ui-300 dark:bg-purple-ui-300/10`,
  ],
  type === 'bug' && [
    tw`border-orange-ui-100 bg-orange-ui-100/20 dark:border-orange-ui-300 dark:bg-orange-ui-300/10`,
  ],
  type === 'note' && [
    tw`border-grey-light-400 bg-grey-light-400/20 dark:bg-grey-light-100/5`,
  ],
])

const Header = styled.div(({ type }) => [
  tw`flex items-center font-medium text-lg text-grey-dark-700 dark:text-grey-light-500 pt-4 px-4 `,
  type === 'success' && [
    tw`text-green-ui-500 dark:text-green-ui-400 focus:text-green-ui-400`,
  ],
  type === 'info' && [
    tw`text-blue-ui-500 dark:text-blue-ui-300 focus:text-blue-ui-400`,
  ],
  type === 'danger' && [
    tw`text-red-ui-500 dark:text-red-ui-400 focus:text-red-ui-400`,
  ],
  type === 'warning' && [
    tw`text-orange-ui-500 dark:text-orange-ui-400 focus:text-orange-ui-400`,
  ],
  type === 'tip' && [
    tw`text-purple-ui-500 dark:text-purple-ui-100 focus:text-purple-ui-100`,
  ],
  type === 'bug' && [
    tw`text-orange-ui-500 dark:text-orange-ui-400 focus:text-orange-ui-400`,
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
