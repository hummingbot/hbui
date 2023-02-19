/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import tw from 'twin.macro'
import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon, XIcon, SelectorIcon } from '@heroicons/react/solid'

export default function ComboBox({items, selected, setSelected, placeholderName, ...props}) {
  const [query, setQuery] = useState('')
  const filteredItems =
    query === ''
      ? items
      : items.filter((item) =>
          item.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  if (!placeholderName) {
    placeholderName = props.multiple ? 'Select multiple' : 'Select one'
  }

  const getPlaceholder = () => {
    if (!selected) {
      return placeholderName
    }

    if (props.multiple) {
      if (selected.length === 0) {
        return placeholderName
      }
      if (selected.length === 1) {
        return selected[0].label
      }
      if (selected.length > 1) {
        return selected.map(item => item.label)
      }
    } else {
      return selected.label
    }
  }
  const hasSelection = () => {
    if (props.multiple && selected && selected.length > 0) return true
    if (!props.multiple && selected) return true
    return false
  }
  return (
    <Combobox value={selected} onChange={setSelected} {...props}>
      <div tw="relative">

        <div tw="relative w-full text-left rounded cursor-default focus:outline-none sm:text-sm overflow-hidden">
          <Combobox.Input
            tw="w-full bg-window font-medium border border-window outline-none py-2 pl-3 pr-10 text-sm leading-5 text-secondary"
            placeholder={getPlaceholder()}
            displayValue={(item) => !selected ? '' : (props.multiple ? '' : selected.label)}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
          <Combobox.Button tw="absolute inset-y-0 right-0 flex items-center pr-2">
            { hasSelection() && <XIcon tw="w-5 h-5 text-tertiary" aria-hidden="true" 
            onClick={
              () => {
                setSelected(props.multiple ? [] : null)
                setQuery('')
                }
              }
              />
            }
            <SelectorIcon
              tw="w-5 h-5 text-tertiary"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Combobox.Options tw="absolute w-full py-1 mt-1 overflow-auto text-base bg-window border border-window rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm z-50">
          {filteredItems.length === 0 && query !== '' ? (
            <div tw="cursor-default select-none relative py-2 px-4 text-primary">
              Nothing found.
            </div>
          ) : (
            filteredItems.map((item) => (
              <Combobox.Option
                key={item.id}
                css={({ active }) => comboBoxStyles[active]}
                value={item}
              >
                {({ selected, active }) => (
                  <span tw='block relative'>
                    <span
                      css={spanStyles[active]}
                    >
                      {item.label}
                    </span>
                    {selected ? (
                      <span
                        css={spanBStyles[active]}
                      >
                        <CheckIcon tw="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </span>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

const comboBoxStyles = {}
comboBoxStyles[true] = tw`cursor-default select-none relative py-2 pl-10 pr-4 text-tertiary`
comboBoxStyles[false] = tw`cursor-default select-none relative py-2 pl-10 pr-4 text-secondary`
const spanStyles = {}
spanStyles[true] = tw`block truncate font-medium px-4 pl-10 py-2 bg-grey-light-scale-500/10 hover:cursor-pointer`
spanStyles[false] = tw`block truncate font-normal px-4 pl-10 py-2 hover:cursor-pointer`
const spanBStyles = {}
spanBStyles[true] = tw`absolute inset-y-0 left-0 top-0 flex items-center pl-3 text-green text-current`
spanBStyles[false] = tw`absolute inset-y-0 left-0 top-0 flex items-center pl-3 text-orange text-current`
