import React from "react";
import tw, { styled, css } from 'twin.macro'

function KebabControl({active, ...props}) {
  return (
    <KebabControlRoot active={active}  {...props}>
      <div tw='absolute top-[-2px] left-[-3px] rounded-sm bg-input w-[16px] h-[20px]' />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
        tw="cursor-pointer absolute top-0 left-0 fill-current text-primary"
      >
        <path
          d="M4 3.947c0 .533.438.948 1 .948.531 0 1-.415 1-.948C6 3.444 5.531 3 5 3c-.563 0-1 .444-1 .947zM4 7.947C4 7.444 4.438 7 5 7c.531 0 1 .444 1 .947 0 .533-.469.948-1 .948-.563 0-1-.415-1-.948zM5 12.895c-.563 0-1-.415-1-.948 0-.503.438-.947 1-.947.531 0 1 .444 1 .947 0 .533-.469.948-1 .948z"
        ></path>
      </svg>
    </KebabControlRoot>
  );
}

export default KebabControl

const KebabControlRoot = styled.div(({active}) => [
  tw`relative w-[10px] h-[16px]`,
  css`
    div {
      display: none;
    }
    :hover {
      div {
        display: block;
      }
    }
  `,
  active && [
    css`
      div {
        display: block;
      }
    `
  ],
])
