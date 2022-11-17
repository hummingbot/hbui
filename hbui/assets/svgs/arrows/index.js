/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'

export function ArrowLeftIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="19"
      fill="none"
      viewBox="0 0 10 19"
    >
      <path
        tw='fill-current'
        fill="#000"
        d="M9.023 18.016l.782-.743c.156-.195.156-.507 0-.664L2.735 9.5l7.07-7.07c.156-.157.156-.47 0-.664l-.782-.743a.45.45 0 00-.664 0L.156 9.187a.529.529 0 000 .665l8.203 8.164a.45.45 0 00.664 0z"
      ></path>
    </svg>
  );
}

export function ArrowRightIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="19"
      fill="none"
      viewBox="0 0 10 19"
    >
      <path
        tw='fill-current'
        fill="#000"
        d="M.898 18.016l-.78-.743c-.157-.195-.157-.507 0-.664L7.187 9.5.117 2.43c-.157-.157-.157-.47 0-.664l.78-.743a.45.45 0 01.664 0l8.204 8.164a.529.529 0 010 .665l-8.204 8.164a.45.45 0 01-.664 0z"
      ></path>
    </svg>
  );
}

export function ArrowDownIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="11"
      fill="none"
      viewBox="0 0 18 11"
    >
      <path
        tw='fill-current'
        fill="#000"
        d="M.445 1.6l.742-.782c.196-.156.508-.156.665 0l7.109 7.07 7.07-7.07c.157-.156.469-.156.664 0l.742.782a.45.45 0 010 .664l-8.164 8.203a.53.53 0 01-.664 0L.445 2.264a.45.45 0 010-.664z"
      ></path>
    </svg>
  );
}

export function ArrowUpIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="10"
      fill="none"
      viewBox="0 0 18 10"
    >
      <path
        tw='fill-current'
        fill="#000"
        d="M17.438 8.984l-.743.782c-.195.156-.508.156-.664 0l-7.11-7.07-7.07 7.07c-.156.156-.468.156-.663 0l-.743-.782a.45.45 0 010-.664L8.61.117a.529.529 0 01.664 0l8.165 8.203a.45.45 0 010 .664z"
      ></path>
    </svg>
  );
}