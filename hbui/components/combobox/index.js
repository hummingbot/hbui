import React, { useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import tw, { css } from 'twin.macro'

export default function ComboBox({items, selected, setSelected, ...props}) {
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

  return (
    <Combobox value={selected} onChange={setSelected} {...props}>
      <div tw="relative">
        <div tw="relative w-full text-left rounded-lg cursor-default focus:outline-none sm:text-sm overflow-hidden">
          <Combobox.Input
            tw="w-full bg-input font-medium border-none outline-none py-2 pl-3 pr-10 text-sm leading-5 text-secondary"
            displayValue={(item) => item.label}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button tw="absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon
              tw="w-5 h-5 text-tertiary"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Combobox.Options tw="absolute w-full py-1 mt-1 overflow-auto text-base bg-body rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm z-50">
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
                      className='aqui'
                      css={spanStyles[selected]}
                    >
                      {item.label}
                    </span>
                    {selected ? (
                      <span
                        css={spanBStyles[selected]}
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
spanStyles[true] = tw`block truncate font-medium px-4 pl-10 py-2 hover:bg-input hover:cursor-pointer`
spanStyles[false] = tw`block truncate font-normal px-4 pl-10 py-2 hover:bg-input hover:cursor-pointer`
const spanBStyles = {}
spanBStyles[true] = tw`absolute inset-y-0 left-0 top-0 flex items-center pl-3 text-green text-current`
spanBStyles[false] = tw`absolute inset-y-0 left-0 top-0 flex items-center pl-3 text-orange text-current`
