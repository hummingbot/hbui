/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'

function InfoCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      tw="fill-current text-tertiary"
    >
      <path
        d="M6 .875A5.626 5.626 0 00.375 6.5 5.611 5.611 0 006 12.125 5.626 5.626 0 0011.625 6.5C11.625 3.406 9.094.875 6 .875zM6 11a4.501 4.501 0 01-4.5-4.5C1.5 4.04 3.516 2 6 2c2.46 0 4.5 2.04 4.5 4.5C10.5 8.984 8.46 11 6 11zm.938-2.625h-.375V6.312A.57.57 0 006 5.75h-.75a.555.555 0 00-.563.563c0 .328.235.562.563.562h.188v1.5h-.375a.555.555 0 00-.563.563c0 .328.234.562.563.562h1.875a.555.555 0 00.562-.563.57.57 0 00-.563-.562zM6 5c.398 0 .75-.328.75-.75A.771.771 0 006 3.5a.755.755 0 00-.75.75c0 .422.328.75.75.75z"
      ></path>
    </svg>
  );
}

export default InfoCircle;
