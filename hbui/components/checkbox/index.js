import tw, { styled, css } from 'twin.macro'

function Checkbox({active, partial, disabled, ...props}) {
  return (
    <CheckboxRoot
      active={active}
      disabled={disabled}
      className={active ? 'is-active' : 'is-off'}
      {...props}
    >
      { active && !partial && <CheckIcon /> }
      { active && partial && <MinusIcon /> }
    </CheckboxRoot>
  );
}

const CheckboxRoot = styled.div(({ active, disabled }) => [
  tw`relative border-2 transition duration-150`,
  tw`cursor-pointer h-[16px] w-[16px] rounded flex justify-center! items-center!`,
  tw`relative border border-body hover:border-green`,
  tw`bg-checkbox-unselected-enabled border-checkbox-unselected-enabled`,
  tw`hover:(bg-checkbox-unselected-hover border-checkbox-unselected-hover)`,
  tw`active:(bg-checkbox-unselected-active border-checkbox-unselected-active)`,
  active && [
    tw`bg-checkbox-selected-enabled border-checkbox-selected-enabled`,
    tw`hover:(bg-checkbox-selected-hover border-checkbox-selected-hover)`,
    tw`active:(bg-checkbox-selected-active border-checkbox-selected-active)`,
  ],
  disabled && [
    tw`pointer-events-none opacity-30`,
  ],
])

function CheckIcon({active}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="6"
      fill='transparent'
      viewBox="0 0 8 6"
    >
      <path
        tw='fill-current text-white dark:text-black'
        d="M7.25 1.266c.25-.25.25-.641 0-.891a.632.632 0 00-.875 0L2.812 3.938 1.25 2.375a.632.632 0 00-.875 0c-.25.25-.25.64 0 .89l2 2c.11.126.281.188.438.188a.617.617 0 00.437-.187l4-4z"
      ></path>
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      fill='transparent'
      viewBox="0 0 10 2"
    >
      <path
        tw='fill-current text-white dark:text-black'
        d="M10 1a.627.627 0 00-.625-.625H.625a.64.64 0 00-.625.64.6.6 0 00.61.61h8.75A.64.64 0 0010 1z"
      ></path>
    </svg>
  );
}

export default Checkbox