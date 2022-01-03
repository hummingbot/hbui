import tw, { css, styled, theme } from 'twin.macro'
import { black } from '../../constants/colors'

export const Button = styled.button(({
  isPrimary,
  isPrimaryGhost,
  isInfo,
  isSmall,
  isLarge,
  isSuccess,
  isWarning,
  isDanger,
  isDisabled,
  isUppercase,
  iconColor
  }) => [
  // Common button styles
  tw`flex`,
  tw`px-4 py-1.5 rounded-sm focus:outline-none`,
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

  isPrimary && [
    tw`text-white bg-brand`,
    // tw`hover:(bg-brand)`,
    // tw`active:(bg-brand)`,
  ],

  isPrimaryGhost && [
    tw`text-brand bg-transparent`,
    css`
      border: 2px solid ${theme`colors.primary`};
    `,
  ],

  isInfo && [
    css`
      color: white;
      background-color: ${theme`colors.info`};
    `,
  ],

  isWarning && [
    css`
      color: white;
      background-color: ${theme`colors.warning`};
    `,
  ],

  isDanger && [
    css`
      color: white;
      background-color: ${theme`colors.danger`};
    `,
  ],

  isDisabled && [
    css`
      pointer-events: none !important;
      opacity: 0.3 !important;
    `,
  ],
])
