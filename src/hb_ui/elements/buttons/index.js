import tw, { css, styled, theme } from 'twin.macro'
import { black } from '../../constants/colors'

export const Button = styled.button(({ isPrimary, isSecondary, isSmall, isLarge, isSuccess, isWarning, isDanger, isDisabled }) => [
  // The common button styles added with the tw import
  tw`px-5 py-1.5 rounded-md focus:outline-none`,
  tw`transform transition-transform duration-75`,
  tw`hover:(scale-105)`,
  tw`border-2`,
  tw`font-medium`,
  
  // straight CSS
  css`
    text-transform: uppercase;
    user-select: none;
    color: white;
    cursor: pointer;
  `,

  // conditional style
  isPrimary && [
    /// all instance of "violet" are using the color config in tailwind.config.js
    tw`bg-violet-500 border-violet-500`,
    tw`hover:(bg-violet-600)`,
    tw`active:(bg-violet-800)`,
    // Combine regular css with tailwind classes within backticks
    css`
      background-color: ${theme`colors.violet.500`};
      border: 2px solid ${theme`colors.violet.500`};
    `,
  ],

  isSecondary && [
    tw`active:(bg-violet-50)`,
    css`
      border: 2px solid #C4C4C4;
      background-color: transparent;
      color: ${black};
    `
  ],

  // Adjust the text size for small & large buttons
  isSmall ? tw`text-xs` : (isLarge ? tw`text-base` : tw`text-sm`),

  isSuccess && [
    tw`bg-green-500 border-green-500`,
    tw`focus:(bg-green-600)`,
    tw`active:(bg-green-800)`,
    css`
      background-color: ${theme`colors.green.500`};
      border: 2px solid ${theme`colors.green.500`};
    `,
  ],

  isWarning && [
    tw`bg-orange-500 border-orange-500`,
    tw`focus:(bg-orange-600)`,
    tw`active:(bg-orange-800)`,
    css`
      background-color: ${theme`colors.orange.500`};
      border: 2px solid ${theme`colors.orange.500`};
    `,
  ],

  isDanger && [
    tw`bg-red-500 border-red-500`,
    tw`focus:(bg-red-600)`,
    tw`active:(bg-red-800)`,
    css`
      background-color: ${theme`colors.red.500`};
      border: 2px solid ${theme`colors.red.500`};
    `,
  ],

  isDisabled && [
    css`
      pointer-events: none;
      opacity: 0.3;
    `,
  ],
])