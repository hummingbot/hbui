/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import tw from 'twin.macro'
import React, { Fragment, useState } from 'react'
import { Listbox } from '@headlessui/react'
import HeroIcons from '../../assets/svgs/icons/HeroIcons'

/**
 * HeadlessUI "Listbox (Select)"
 * Customized for twin.macro
 * https://headlessui.dev/react/listbox
 */

export default function Select({ items, selected, setSelected, listboxProps, listboxOptionsProps }) {
  // const [selected, setSelected] = useState(items[0])
  if (items.length === 0) return null
  return (
    <Listbox
      value={selected}
      tw="bg-window focus-within:z-10 relative"
      onChange={setSelected}
      {...listboxProps}
    >
      {({ open }) => (
        <div>
          <Label text={selected?.label} open={open} />
          {items.length > 0 && (
            <Listbox.Options
              tw="absolute w-full py-1 mt-1 overflow-auto text-base bg-window border-window rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              {...listboxOptionsProps}
            >
              {items.map(ListboxOption)}
            </Listbox.Options>
          )}
        </div>
      )}
    </Listbox>
  )
}
function ListboxOption(item, index) {
  return (
    <Listbox.Option as={Fragment} key={index} value={item} disabled={item.disabled} style={{opacity: item.disabled ? '0.5' : '1'}}>
      {props => <Option label={item.label} {...props} />}
    </Listbox.Option>
  )
}
function Label({ text }) {
  return (
    <Listbox.Button tw="relative w-full py-2 pl-3 pr-10 text-left bg-window border border-window rounded-lg cursor-pointer focus:outline-none focus-visible:(ring-2 ring-opacity-75 ring-green ring-offset-green-scale-300 ring-offset-2 border-blue-scale-500) sm:text-sm">
      <span tw="block truncate">{text}</span>
      <span tw="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <HeroIcons.SelectorIcon tw="w-5 h-5 text-grey-light-scale-400" aria-hidden="true" />
      </span>
    </Listbox.Button>
  )
}
function Option({ label, active, selected, ...rest }) {
  return (
    <div
      css={[
        tw`cursor-pointer hover:font-bold select-none relative py-2 pl-10 pr-4`,
        active ? tw`text-white font-bold bg-green` : tw`text-primary`,
      ]}
      {...rest}
    >
      <span
        css={[tw`block truncate`, selected ? tw`font-medium` : tw`font-normal`]}
      >
        {label}
      </span>
      {selected && (
        <span
          css={[
            tw`absolute inset-y-0 left-0 flex items-center pl-3`,
            active ? tw`text-white` : tw`text-primary`,
          ]}
        >
          <HeroIcons.CheckIcon tw="w-5 h-5" aria-hidden="true" />
        </span>
      )}
    </div>
  )
}
