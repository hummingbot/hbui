/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'

function Stop({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      tw="fill-current text-primary"
      {...props}
    >
      <path
        d="M9.375 0h-8.25C.492 0 0 .516 0 1.125v8.25A1.11 1.11 0 001.125 10.5h8.25c.61 0 1.125-.492 1.125-1.125v-8.25A1.14 1.14 0 009.375 0z"
      ></path>
    </svg>
  );
}

export default Stop;
