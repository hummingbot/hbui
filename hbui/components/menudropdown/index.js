import React from "react";
import { Link } from 'react-router-dom'
import tw, { styled, css } from 'twin.macro'
import {
  LabelSmall,
} from '../../elements/typography'

function MenuDropdown({links, side='right', type='kebab', ...props}) {
  return (
    <KebabMenuRoot {...props}>
      {type === 'kebab' && <KebabControl /> }
      {type === 'chevron' && <TriangleDown /> }
      <KebabMenuContent className='kebab-menu-content' side={side}>
        {links.map(link => {
          return (
            <Link to={link.to} key={link.label}>
              <KebabMenuItem>{link.label}</KebabMenuItem>
            </Link>
          )
        })}
      </KebabMenuContent>
    </KebabMenuRoot>
  );
}

export default MenuDropdown

const KebabMenuRoot = styled.div(() => [
  tw`relative h-[18px]`,
  css`
    .kebab-menu-content {
      display: none;
    }
    .kebab-highlight {
      display: none;
    }
    :hover {
      .kebab-highlight {
        display: block;
      }
      .kebab-menu-content {
        display: block;
      }
    }
  `,
])

const KebabMenuContent = styled.div(({side}) => [
  css`
    min-width: 80px;
  `,
  tw`absolute right-[-4px] top-[18px]`,
  side === 'right' && tw`right-[-4px]`,
  side === 'left' && tw`left-[-4px]`,
  tw`z-50 rounded-sm border border-window`,
  tw`bg-grey-light-scale-500 dark:bg-grey-dark-scale-500`,
])

const KebabControlRoot = styled.div(({active}) => [
  tw`relative w-[10px] h-[16px]`,
  active && [
    css`
      .kebab-highlight {
        display: block;
      }
    `
  ],
])

const KebabMenuItem = styled(LabelSmall)(({active}) => [
  tw`select-none px-3 py-2 text-secondary hover:text-primary cursor-pointer`,
  tw`bg-grey-light-scale-50 dark:bg-grey-dark-scale-500`,
  tw`hover:bg-grey-light-scale-200 hover:dark:bg-grey-dark-scale-600`,
])

function KebabControl({active, ...props}) {
  return (
    <KebabControlRoot active={active}  {...props}>
      <div className='kebab-highlight' tw='absolute top-[-2px] left-[-3px] rounded-sm bg-input w-[16px] h-[20px]' />
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

function TriangleDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      tw="fill-current text-primary"
      className='chevron-down'
      viewBox="0 0 16 16"
    >
      <path fill="transparent" d="M0 0H16V16H0z"></path>
      <path
        fill="#AEB4B7"
        d="M11.404 7.059a.512.512 0 00.022-.73.512.512 0 00-.73-.022l-2.923 2.75-2.9-2.75a.512.512 0 00-.73.021.512.512 0 00.02.73l3.267 3.094a.571.571 0 00.343.13.583.583 0 00.366-.13l3.265-3.093z"
      ></path>
    </svg>
  );
}
