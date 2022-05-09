import React, { useState } from 'react'
import tw, { styled, css } from 'twin.macro'
import {
  PSmall,
} from '../../elements/typography'

function Modal({content, path, closeFunction}) {
  return (
    <div tw='z-50 fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center'>
      <div tw='relative w-1/3 bg-body p-sm'>
        <div tw='flex justify-between'>
          {path && <PSmall isMedium tw='mb-sm'>{path}</PSmall>}
          <CloseIcon
            tw='cursor-pointer'
            onClick={() => closeFunction()}
          />
        </div>
        {content}
      </div>
    </div>
  )
}

export default Modal


function CloseIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#C9CDCF"
        d="M14.844 14.875a.53.53 0 000-.719L10.688 10l4.156-4.125a.53.53 0 000-.719.53.53 0 00-.719 0L10 9.313 5.844 5.155a.53.53 0 00-.719 0 .53.53 0 000 .719L9.281 10l-4.156 4.156a.53.53 0 000 .719.53.53 0 00.719 0L10 10.719l4.125 4.156a.53.53 0 00.719 0z"
      ></path>
    </svg>
  );
}

