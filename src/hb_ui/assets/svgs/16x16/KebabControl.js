import React from "react";
import tw, { styled, css } from 'twin.macro'

function KebabControl({active, ...props}) {
  return (
    <SVG
      active={active}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      {...props}
    >
      <rect width="12" height="16" fill="#EBEBEB" rx="2"></rect>
      <path
        fill="#484D51"
        d="M4 3.947c0 .533.438.948 1 .948.531 0 1-.415 1-.948C6 3.444 5.531 3 5 3c-.563 0-1 .444-1 .947zM4 7.947C4 7.444 4.438 7 5 7c.531 0 1 .444 1 .947 0 .533-.469.948-1 .948-.563 0-1-.415-1-.948zM5 12.895c-.563 0-1-.415-1-.948 0-.503.438-.947 1-.947.531 0 1 .444 1 .947 0 .533-.469.948-1 .948z"
      ></path>
    </SVG>
  );
}

export default KebabControl;

const SVG = styled.svg(({ active }) => [
  tw`cursor-pointer`,
  css`
    rect {
      display: none;
    }
    :hover {
      rect {
        display: block;
      }
    }
  `,
  active && [
    css`
      rect {
        display: block;
      }
    `
  ],
])
