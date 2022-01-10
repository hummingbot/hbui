import tw, { css, styled } from 'twin.macro'

export const Button = styled.button(({
  isPrimary,
  isInfo,
  isSmall,
  isLarge,
  isSuccess,
  isWarning,
  isDanger,
  isDisabled,
  isUppercase,
  isGhost,
  iconColor
  }) => [
  // Common button styles
  tw`flex`,
  tw`transition duration-100`,
  tw`px-4 py-1 rounded-sm focus:outline-none`,
  // tw`hover:(scale-105)`,
  tw`hover:bg-quaternary active:bg-grey-dark-100`,
  tw`font-normal`,
  tw`text-tertiary bg-tertiary`,
  css`
    min-width: 100px;
    text-align: center;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    .icon-before > * {
      margin-right: 10px;
      fill: ${iconColor ? iconColor : 'auto'};
    }
    .icon-after > * {
      margin-left: 10px;
      fill: ${iconColor ? iconColor : 'auto'};
    }
  `,

  // conditional styles
  isUppercase && [
    css`
      text-transform: uppercase;
    `,
  ],

  isPrimary && !isGhost && [
    tw`text-white bg-brand hover:bg-green-hovered active:bg-green-active`,
  ],

  isInfo && !isGhost && [
    tw`text-white bg-blue hover:bg-blue-hovered active:bg-blue-active`,
  ],

  isWarning && !isGhost && [
    tw`text-white bg-orange hover:bg-orange-hovered active:bg-orange-active`,
  ],

  isDanger && !isGhost && [
    tw`text-white bg-red hover:bg-red-hovered active:bg-red-active`,
  ],

  isGhost && [
    tw`py-0.5`,
  ],

  isGhost && !isPrimary && !isInfo && !isWarning && !isDanger  && [
    tw`text-black dark:text-white bg-transparent border border-2 border-grey-dark-300 dark:border-grey-light-500 hover:bg-tertiary active:bg-quaternary`,
  ],

  isPrimary && isGhost && [
    tw`text-brand bg-transparent border border-2 border-green hover:bg-green-superlight active:bg-green-light`,
  ],

  isInfo && isGhost && [
    tw`text-blue bg-transparent border border-2 border-blue hover:bg-blue-superlight active:bg-blue-light`,
  ],

  isWarning && isGhost && [
    tw`text-orange bg-transparent border border-2 border-orange hover:bg-orange-superlight active:bg-orange-light`,
  ],

  isDanger && isGhost && [
    tw`text-red bg-transparent border border-2 border-red hover:bg-red-superlight active:bg-red-light`,
  ],

  isDisabled && [
    tw`pointer-events-none opacity-30`,
  ],
])
