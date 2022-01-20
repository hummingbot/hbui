import tw, { css, styled } from 'twin.macro'

export const TextInput = styled.input(({ isValid, isInvalid, isWarning }) => [
  tw`flex w-full`,
  tw`transition duration-100`,
  tw`px-4 py-2.5 rounded focus:outline-none`,
  tw`bg-primary`,
  tw`font-normal text-primary`,
  tw`border border-2 border-secondary focus:border-blue`,
  isValid && [tw`border-green focus:border-green`],
  isInvalid && [tw`border-red focus:border-red`],
  isWarning && [tw`border-orange focus:border-orange`],
])
