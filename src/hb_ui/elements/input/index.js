import tw, { css, styled } from 'twin.macro'

export const Input = styled.input(({
  isValid,
  isInvalid,
  isWarning,
  }) => [
  // Common button styles
  tw`flex w-full`,
  tw`transition duration-100`,
  tw`px-4 py-1 rounded-sm focus:outline-none`,
  // tw`hover:(scale-105)`,
  tw`bg-primary`,
  tw`font-normal text-primary`,
  tw`border border-2 border-secondary focus:border-blue`,

  isValid && [
    tw`border-green focus:border-green`
  ],

  isInvalid && [
    tw`border-red focus:border-red`
  ],

  isWarning && [
    tw`border-orange focus:border-orange`
  ],

  // css`
  //   min-width: 100px;
  //   text-align: center;
  //   align-items: center;
  //   justify-content: center;
  //   user-select: none;
  //   cursor: pointer;
  //   .icon-before > * {
  //     margin-right: 10px;
  //     fill: ${iconColor ? iconColor : 'auto'};
  //   }
  //   .icon-after > * {
  //     margin-left: 10px;
  //     fill: ${iconColor ? iconColor : 'auto'};
  //   }
  // `,

  // // conditional styles
  // isUppercase && [
  //   css`
  //     text-transform: uppercase;
  //   `,
  // ],

  // isValid [
  //   tw`text-white bg-brand hover:bg-green-hovered active:bg-green-active`,
  // ],
])
