import tw, { styled, css } from 'twin.macro'

const ButtonBase = styled.button(
  ({
    isSecondary,
    isInfo,
    isSuccess,
    variant,
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
    tw`px-3 pt-[5px] pb-[5px] rounded-sm focus:outline-none`,
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
    isTiny && [tw`px-1 pt-0 pb-0 text-[11px]`],
    isLarge && [tw`px-4 py-1.5 text-[16px]`],

    isDisabled && [tw`pointer-events-none opacity-30`],
  ],
)

export const Button = styled(ButtonBase)(
  ({}) => [
    tw`text-button hover:text-button-hover`,
    tw`bg-button hover:bg-button-hover active:bg-button-active`,
    tw`border-button hover:border-button-hover active:border-button-active`,
  ],
)

export const ButtonSecondary = styled(ButtonBase)(
  ({}) => [
    tw`text-button-secondary hover:text-button-secondary-hover`,
    tw`bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-active`,
    tw`border-button-secondary hover:border-button-secondary-hover active:border-button-secondary-active`,
  ],
)

export const ButtonSuccess = styled(ButtonBase)(
  ({}) => [
    tw`text-button-success hover:text-button-success-hover`,
    tw`bg-success hover:bg-success-hover active:bg-success-active`,
    tw`border-button-success hover:border-button-success-hover active:border-button-success-active`,
  ],
)

export const ButtonInfo = styled(ButtonBase)(
  ({}) => [
    tw`text-button-info hover:text-button-info-hover`,
    tw`bg-info hover:bg-info-hover active:bg-info-active`,
    tw`border-button-info hover:border-button-info-hover active:border-button-info-active`,
  ],
)

export const ButtonWarning = styled(ButtonBase)(
  ({}) => [
    tw`text-button-warning hover:text-button-warning-hover`,
    tw`bg-warning hover:bg-warning-hover active:bg-warning-active`,
    tw`border-button-warning hover:border-button-warning-hover active:border-button-warning-active`,
  ],
)

export const ButtonDanger = styled(ButtonBase)(
  ({}) => [
    tw`text-button-danger hover:text-button-danger-hover`,
    tw`bg-danger hover:bg-danger-hover active:bg-danger-active`,
    tw`border-button-danger hover:border-button-danger-hover active:border-button-danger-active`,
  ],
)
