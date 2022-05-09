import tw, { css, styled } from 'twin.macro'

export const TextInput = styled.input(({ isValid, isInvalid, isWarning }) => [
  tw`flex w-full`,
  tw`transition duration-100`,
  tw`px-2.5 py-1 rounded focus:outline-none`,
  tw`font-normal`,
  tw`bg-input text-input border-input`,
  tw`border-2 focus:border-blue`,
  isValid && [tw`border-green focus:border-green`],
  isInvalid && [tw`border-red focus:border-red`],
  isWarning && [tw`border-orange focus:border-orange`],
])
