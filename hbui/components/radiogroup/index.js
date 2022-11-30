/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import { RadioGroup as HeadlessUiRadioGroup } from '@headlessui/react'
import HeroIcons from '../../assets/svgs/icons/HeroIcons'
import { P, PSmall } from '../../elements/typography'

/**
 * HeadlessUI "Radio Group"
 * Customized for twin.macro
 * https://headlessui.dev/react/radio-group
 */

export default function RadioGroup({ screenReaderLabel, items }) {
  const [selected, setSelected] = useState(items?.[0])
  if (items.length === 0) return null
  return (
    <HeadlessUiRadioGroup value={selected} onChange={setSelected}>
      <HeadlessUiRadioGroup.Label tw="sr-only">
        {screenReaderLabel}
      </HeadlessUiRadioGroup.Label>
      <div tw="space-y-2">{items.map(item)}</div>
    </HeadlessUiRadioGroup>
  )
}
function item(item) {
  return (
    <HeadlessUiRadioGroup.Option key={item.name} value={item}>
      {({ active, checked }) => (
        <div
          css={[
            tw`flex items-center justify-between w-full relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`,
            active &&
              tw`ring-2 ring-offset-2 ring-offset-green-scale-300 ring-green ring-opacity-60`,
            checked ? tw`bg-green-scale-900 bg-opacity-75 text-white` : tw`bg-window`,
          ]}
        >
          <div tw="flex items-center">
            <div tw="text-sm">
              <HeadlessUiRadioGroup.Label
                as={P}
                css={[
                  tw`font-bold`,
                  checked ? tw`text-white` : tw`text-grey-light-scale-900`,
                ]}
              >
                {item.name}
              </HeadlessUiRadioGroup.Label>
              <HeadlessUiRadioGroup.Description
                as={PSmall}
                css={[
                  tw`inline font-medium`,
                  checked ? tw`text-green-scale-100` : tw`text-grey-light-scale-500`,
                ]}
              >
                <span>
                  {item.ram}/{item.cpus}
                </span>{' '}
                <span aria-hidden="true">&middot;</span>{' '}
                <span>{item.disk}</span>
              </HeadlessUiRadioGroup.Description>
            </div>
          </div>
          {checked && (
            <div tw="flex-shrink-0 text-white">
              <HeroIcons.CheckRounded tw="w-6 h-6" />
            </div>
          )}
        </div>
      )}
    </HeadlessUiRadioGroup.Option>
  )
}
