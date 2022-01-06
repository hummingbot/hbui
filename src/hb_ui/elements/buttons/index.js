import tw, { css, styled, theme } from 'twin.macro'
import { black } from '../../constants/colors'

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
  tw`px-4 py-2 rounded-sm focus:outline-none`,
  // tw`transform transition-transform duration-75`,
  // tw`hover:(scale-105)`,
  tw`font-normal`,
  tw`text-tertiary bg-tertiary`,
  css`
    align-items: center;
    user-select: none;
    cursor: pointer;
    .icon-before * {
      margin-right: 10px;
      fill: ${iconColor ? iconColor : 'auto'};
    }
    .icon-after {
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
    tw`text-white bg-brand`,
    // tw`hover:(bg-brand)`,
    // tw`active:(bg-brand)`,
  ],

  isInfo && !isGhost && [
    css`
      color: white;
      background-color: ${theme`colors.info`};
    `,
  ],

  isWarning && !isGhost && [
    css`
      color: white;
      background-color: ${theme`colors.warning`};
    `,
  ],

  isDanger && !isGhost && [
    css`
      color: white;
      background-color: ${theme`colors.danger`};
    `,
  ],

  isGhost && !isPrimary && !isInfo && !isWarning && !isDanger  && [
    tw`text-black dark:text-white bg-transparent border border-2 border-black dark:border-white`,
  ],

  isPrimary && isGhost && [
    tw`text-brand bg-transparent`,
    css`
      border: 2px solid ${theme`colors.primary`};
    `,
  ],

  isInfo && isGhost && [
    tw`text-blue bg-transparent`,
    css`
      border: 2px solid ${theme`colors.blue`};
    `,
  ],

  isWarning && isGhost && [
    tw`text-orange bg-transparent`,
    css`
      border: 2px solid ${theme`colors.orange`};
    `,
  ],

  isDanger && isGhost && [
    tw`text-red bg-transparent`,
    css`
      border: 2px solid ${theme`colors.red`};
    `,
  ],

  isDisabled && [
    css`
      pointer-events: none !important;
      opacity: 0.3 !important;
    `,
  ],
])
