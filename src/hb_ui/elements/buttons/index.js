import tw, { css, styled } from 'twin.macro'

export const Button = styled.button(
  ({
    isPrimary,
    isInfo,
    isSmall,
    isLarge,
    isExtraLarge,
    isSuccess,
    isWarning,
    isDanger,
    isDisabled,
    isUppercase,
    isGhost,
    iconColor,
  }) => [
    tw`flex`,
    tw`transition duration-100`,
    tw`px-4 py-1 lg:px-8 lg:py-1.5 rounded-sm focus:outline-none`,
    tw`hover:bg-quaternary active:bg-grey-dark-100`,
    tw`font-medium`,
    tw`text-tertiary bg-tertiary`,
    tw`text-base`,
    css`
      min-width: 100px;
      text-align: center;
      align-items: center;
      justify-content: center;
      user-select: none;
      cursor: pointer;
      .icon-before * {
        margin-right: 10px;
        fill: ${iconColor ? iconColor : 'auto'};
      }
      .icon-after * {
        margin-left: 10px;
        fill: ${iconColor ? iconColor : 'auto'};
      }
    `,
    isUppercase && [
      css`
        text-transform: uppercase;
      `,
    ],
    isLarge && [tw`px-10 py-2.5 text-lg lg:text-xl lg:px-14 lg:py-3`],
    isExtraLarge && [tw`px-14 py-4 text-xl lg:text-2xl lg:px-16 lg:py-5`],
    isPrimary &&
      !isGhost && [
        tw`text-white bg-green hover:bg-green-hovered active:bg-green-active`,
      ],

    isInfo &&
      !isGhost && [
        tw`text-white bg-blue hover:bg-blue-hovered active:bg-blue-active`,
      ],

    isWarning &&
      !isGhost && [
        tw`text-white bg-orange hover:bg-orange-hovered active:bg-orange-active`,
      ],

    isDanger &&
      !isGhost && [
        tw`text-white bg-red hover:bg-red-hovered active:bg-red-active`,
      ],

    isGhost && [tw`py-0.5`],
    isGhost &&
      !isPrimary &&
      !isInfo &&
      !isWarning &&
      !isDanger && [
        tw`text-black dark:text-white bg-transparent border border-2 border-grey-dark-300 dark:border-grey-light-500 hover:bg-tertiary active:bg-quaternary`,
      ],

    isPrimary &&
      isGhost && [
        tw`text-green bg-transparent border border-2 border-green hover:bg-green/10 active:bg-green/20`,
      ],

    isInfo &&
      isGhost && [
        tw`text-blue bg-transparent border border-2 border-blue hover:bg-blue/10 active:bg-blue/20`,
      ],

    isWarning &&
      isGhost && [
        tw`text-orange bg-transparent border border-2 border-orange hover:bg-orange/10 active:bg-orange/20`,
      ],

    isDanger &&
      isGhost && [
        tw`text-red bg-transparent border border-2 border-red hover:bg-red/10 active:bg-red/20`,
      ],

    isDisabled && [tw`pointer-events-none opacity-30`],
  ],
)
