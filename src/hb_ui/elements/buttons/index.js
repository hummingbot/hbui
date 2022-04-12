import tw, { css, styled } from 'twin.macro'

export const Button = styled.button(
  ({
    isSecondary,
    isInfo,
    isSuccess,
    isWarning,
    isDanger,
    isSmall,
    isLarge,
    isExtraLarge,
    isDisabled,
    isUppercase,
    isGhost,
    iconColor,
  }) => [
    tw`flex`,
    tw`text-tertiary text-[14px] font-medium`,
    tw`transition duration-100`,
    // tw`focus:border-blue`,
    tw`border-2 border-primary hover:border-tertiary active:border-quaternary`,
    tw`bg-tertiary hover:bg-quaternary active:bg-quintenary`,
    tw`px-3 pt-[5px] pb-[5px] rounded focus:outline-none`,
    css`
      font-family: 'Inter';
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
    isSmall && [tw`px-2 pt-[2px] pb-[1.5px] text-[13px]`],
    isLarge && [tw`px-4 py-1.5 text-[16px]`],
    // isLarge && [tw`px-4 py-1.5 text-lg lg:text-xl lg:px-14 lg:py-3`],
    // isExtraLarge && [tw`px-14 py-4 text-xl lg:text-2xl lg:px-16 lg:py-5`],
    // hover:bg-quaternary active:bg-grey-dark-100
    isSecondary && [
      tw`bg-transparent hover:bg-transparent active:bg-tertiary`,
      tw`border-secondary hover:border-quaternary`,
    ],

    isSuccess && [
      tw`text-white`,
      tw`border-green hover:border-green active:border-green`,
      tw`bg-green hover:bg-success-hovered active:bg-success-active`,
    ],

    isInfo && [
      tw`text-white`,
      tw`border-blue hover:border-blue active:border-blue`,
      tw`bg-blue hover:bg-info-hovered active:bg-info-active`,
    ],

    isWarning && [
      tw`text-white`,
      tw`border-orange hover:border-orange active:border-orange`,
      tw`bg-orange hover:bg-warning-hovered active:bg-warning-active`,
    ],

    isDanger && [
      tw`text-white`,
      tw`border-red hover:border-red active:border-red`,
      tw`bg-red hover:bg-danger-hovered active:bg-danger-active`,
    ],

    isDisabled && [tw`pointer-events-none opacity-30`],
  ],
)
