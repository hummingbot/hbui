import React from 'react'
import PropTypes from 'prop-types'
import tw, { css, styled, theme } from 'twin.macro'
import { Button as ButtonElement } from '../../elements/buttons'
import CheckIcon from '../../assets/svgs/notifications/CheckIcon'
import WarningIcon from '../../assets/svgs/notifications/WarningIcon'
import ErrorIcon from '../../assets/svgs/notifications/ErrorIcon'
import InfoIcon from '../../assets/svgs/notifications/InfoIcon'
import TipIcon from '../../assets/svgs/notifications/TipIcon'
import BugIcon from '../../assets/svgs/notifications/BugIcon'
import NoteIcon from '../../assets/svgs/notifications/NoteIcon'

export const Callout = ({ title, text, ...props }) => {
  return (
    <RootDefault {...props}>
      <HeaderDefault>
        {title}
      </HeaderDefault>
      <Text className="text">{text}</Text>
    </RootDefault>
  )
}

export const CalloutSuccess = ({ title, text, ...props }) => {
  return (
    <RootSuccess {...props}>
      <HeaderSuccess>
        <CheckIcon /> {title}
      </HeaderSuccess>
      <Text className="text">{text}</Text>
    </RootSuccess>
  )
}

export const CalloutInfo = ({ title, text, ...props }) => {
  return (
    <RootInfo {...props}>
      <HeaderInfo>
        <InfoIcon /> {title}
      </HeaderInfo>
      <Text className="text">{text}</Text>
    </RootInfo>
  )
}

export const CalloutWarning = ({ title, text, ...props }) => {
  return (
    <RootWarning {...props}>
      <HeaderWarning>
        <WarningIcon /> {title}
      </HeaderWarning>
      <Text className="text">{text}</Text>
    </RootWarning>
  )
}

export const CalloutDanger = ({ title, text, ...props }) => {
  return (
    <RootDanger {...props}>
      <HeaderDanger>
        <ErrorIcon /> {title}
      </HeaderDanger>
      <Text className="text">{text}</Text>
    </RootDanger>
  )
}

export const CalloutTip = ({ title, text, ...props }) => {
  return (
    <RootTip {...props}>
      <HeaderTip>
        <TipIcon /> {title}
      </HeaderTip>
      <Text className="text">{text}</Text>
    </RootTip>
  )
}

export const CalloutBug = ({ title, text, ...props }) => {
  return (
    <RootBug {...props}>
      <HeaderBug>
        <BugIcon /> {title}
      </HeaderBug>
      <Text className="text">{text}</Text>
    </RootBug>
  )
}

export const CalloutNote = ({ title, text, ...props }) => {
  return (
    <RootNote {...props}>
      <HeaderNote>
        <NoteIcon /> {title}
      </HeaderNote>
      <Text className="text">{text}</Text>
    </RootNote>
  )
}

const Root = styled.div(({ type }) => [
  tw`rounded border-solid border-l-8 border-r border-b border-t`,
  css`
    svg {
      margin-right: 10px;
    }
  `,
])

const RootDefault = styled(Root)(({}) => [
  tw`border-grey-light-scale-400 bg-grey-light-scale-200`,
  tw`dark:bg-grey-light-scale-100/5`,
])

const RootSuccess = styled(Root)(({}) => [
  tw`border-green-scale-100 bg-green-scale-100/20`,
  tw`dark:border-green-scale-300 dark:bg-green-scale-500/10`,
])
const RootInfo = styled(Root)(({}) => [
  tw`border-blue-scale-100 bg-blue-scale-100/20`,
  tw`dark:border-blue-scale-300 dark:bg-blue-scale-300/10`,
])
const RootDanger = styled(Root)(({}) => [
  tw`border-red-scale-100 bg-red-scale-100/20`,
  tw`dark:border-red-scale-300 dark:bg-red-scale-300/10`,
])
const RootWarning = styled(Root)(({}) => [
  tw`border-orange-scale-100 bg-orange-scale-100/20`,
  tw`dark:border-orange-scale-300 dark:bg-orange-scale-300/10`,
])
const RootTip = styled(Root)(({}) => [
  tw`border-purple-scale-100 bg-purple-scale-100/20`,
  tw`dark:border-purple-scale-300 dark:bg-purple-scale-300/10`,
])
const RootBug = styled(Root)(({}) => [
  tw`border-orange-scale-100 bg-orange-scale-100/20`,
  tw`dark:border-orange-scale-300 dark:bg-orange-scale-300/10`,
])
const RootNote = styled(Root)(({}) => [
  tw`border-grey-light-scale-400 bg-grey-light-scale-400/20`,
  tw`dark:bg-grey-light-scale-100/5`,
])

const Header = styled.div(({ type }) => [
  tw`flex items-center font-medium text-lg pt-4 px-4`,
])

const HeaderDefault = styled(Header)(({ type }) => [
  tw`text-grey-dark-scale-700 dark:text-grey-light-scale-500`,
])
const HeaderSuccess = styled(Header)(({ type }) => [
  tw`text-green-scale-500 dark:text-green-scale-400`,
])
const HeaderInfo = styled(Header)(({ type }) => [
  tw`text-blue-scale-500 dark:text-blue-scale-300`,
])
const HeaderDanger = styled(Header)(({ type }) => [
  tw`text-red-scale-500 dark:text-red-scale-400`,
])
const HeaderWarning = styled(Header)(({ type }) => [
  tw`text-orange-scale-500 dark:text-orange-scale-400`,
])
const HeaderTip = styled(Header)(({ type }) => [
  tw`text-purple-scale-500 dark:text-purple-scale-100`,
])
const HeaderBug = styled(Header)(({ type }) => [
  tw`text-orange-scale-500 dark:text-orange-scale-400`,
])
const HeaderNote = styled(Header)(({ type }) => [
  tw`text-grey-dark-scale-700 dark:text-white`
])

const Text = styled.div(({}) => [
  tw`font-medium text-grey-dark-scale-200 dark:text-white px-4 pb-4 pt-2`,
  css`
    a {
      text-decoration: underline;
    }
  `,
])