/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import tw from 'twin.macro'
import React from 'react'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { P, PSmall } from '../../elements/typography'

/**
 * HeadlessUI "Tabs"
 * Customized for twin.macro
 * https://headlessui.dev/react/tabs
 */

export default function Tabs({ items, tabGroupProps }) {
  if (!items) return null
  return (
    <Tab.Group {...tabGroupProps}>
      <Tab.List tw="flex p-1 space-x-1 bg-green-scale-900/20 rounded-lg">
        {Object.keys(items).map(category => (
          <Tab as={Fragment} key={category}>
            {({ selected }) => (
              <button
                css={[
                  tw`w-full py-2.5 text-sm leading-5 font-medium text-green-scale-700 rounded-lg
                  focus:(outline-none ring-2) (ring-offset-2 ring-offset-green-scale-400 ring-green ring-opacity-60)`,
                  selected
                    ? tw`bg-green! shadow text-black`
                    : tw`text-primary hover:(bg-green/20 text-primary)`,
                ]}
              >
                {category}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels tw="mt-2">
        {Object.values(items).map((group, idx) => (
          <Tab.Panel
            key={idx}
            tw="rounded-lg mt-sm focus:(outline-none ring-2) (ring-offset-2 ring-offset-green-scale-400 ring-green ring-opacity-60)"
          >
            <ul>{group}</ul>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
