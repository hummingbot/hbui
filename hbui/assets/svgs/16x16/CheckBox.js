/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'

function CheckBox({active, ...props}) {
  return (
    <SVG
      active={active}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#788187"
        d="M13.5 1h-11A1.5 1.5 0 001 2.5v11c0 .844.656 1.5 1.5 1.5h11a1.5 1.5 0 001.5-1.5v-11c0-.813-.688-1.5-1.5-1.5zm.5 12.5c0 .281-.25.5-.5.5h-11a.494.494 0 01-.5-.5v-11c0-.25.219-.5.5-.5h11c.25 0 .5.25.5.5v11z"
      ></path>
      <path
        className='checkbox-tick'
        fill="#000"
        d="M12.969 6.49a.856.856 0 000-1.224c-.344-.323-.881-.323-1.203 0l-4.899 4.898L4.72 8.016c-.344-.323-.881-.323-1.203 0a.856.856 0 000 1.224l2.75 2.75c.15.172.386.258.601.258.215 0 .43-.086.602-.258l5.5-5.5z"
      ></path>
    </SVG>
  );
}

export default CheckBox;

const SVG = styled.svg(({ active }) => [
  tw`cursor-pointer`,
  css`
    .checkbox-tick {
      display: none;
    }
    :hover {
      .checkbox-tick {
        display: block;
        opacity: 0.2;
      }
    }
  `,
  active && [
    css`
      .checkbox-tick {
        display: block;
        opacity: 1;
      }
    `
  ],
])
