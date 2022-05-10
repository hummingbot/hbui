import tw, { styled, css } from 'twin.macro'

export const Button = styled.button(
  ({
    isSecondary,
    isInfo,
    isSuccess,
    isWarning,
    isDanger,
    isSmall,
    isTiny,
    isLarge,
    isExtraLarge,
    isDisabled,
    isUppercase,
    isGhost,
    iconColor,
  }) => [
    tw`flex transition duration-100`,
    tw`font-medium! text-[14px]`,
    tw`px-3 pt-[5px] pb-[5px] border rounded-sm focus:outline-none`,
    css`
      font-family: 'Inter';
      align-items: center;
      justify-content: center;
      user-select: none;
      cursor: pointer;
      .icon-before {
        margin-right: 10px;
        position: relative;
      }
      .icon-after {
        margin-left: 10px;
        position: relative;
      }
      .icon-before * {
        fill: ${iconColor ? iconColor : 'auto'};
      }
      .icon-after * {
        fill: ${iconColor ? iconColor : 'auto'};
      }
    `,
    isUppercase && [
      css`
        text-transform: uppercase;
      `,
    ],
    // variantStyle(variant, isInfo, isSuccess, isWarning, isDanger),
    defaultStyle,
    isSecondary && secondaryStyle,
    isSuccess && successStyle,
    isInfo && infoStyle,
    isWarning && warningStyle,
    isDanger && dangerStyle,
    isSmall && [tw`px-2 pt-[2px] pb-[1.5px] text-[13px]`],
    isTiny && [tw`px-1 pt-0 pb-0 text-[11px]`],
    isLarge && [tw`px-4 py-1.5 text-[16px]`],

    isDisabled && [tw`pointer-events-none opacity-30`],
  ],
)

const defaultStyle = [
  tw`text-button hover:text-button-hover`,
  tw`bg-button hover:bg-button-hover active:bg-button-active`,
  tw`border-button hover:border-button-hover active:border-button-active`,
]

const secondaryStyle = [
  tw`text-button-secondary hover:text-button-secondary-hover`,
  tw`bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-active`,
  tw`border-button-secondary hover:border-button-secondary-hover active:border-button-secondary-active`,
]

const successStyle = [
  tw`text-button-success hover:text-button-success-hover`,
  tw`bg-success hover:bg-success-hover active:bg-success-active`,
  tw`border-button-success hover:border-button-success-hover active:border-button-success-active`,
]

const infoStyle = [
  tw`text-button-info hover:text-button-info-hover`,
  tw`bg-info hover:bg-info-hover active:bg-info-active`,
  tw`border-button-info hover:border-button-info-hover active:border-button-info-active`,
]

const warningStyle = [
  tw`text-button-warning hover:text-button-warning-hover`,
  tw`bg-warning hover:bg-warning-hover active:bg-warning-active`,
  tw`border-button-warning hover:border-button-warning-hover active:border-button-warning-active`,
]

const dangerStyle = [
  tw`text-button-danger hover:text-button-danger-hover`,
  tw`bg-danger hover:bg-danger-hover active:bg-danger-active`,
  tw`border-button-danger hover:border-button-danger-hover active:border-button-danger-active`,
]
