import { useState } from 'react'
import { Switch } from '@headlessui/react'
import tw, { css } from 'twin.macro'

const stylesA = {}
stylesA[true] = tw`bg-success! relative inline-flex h-6 w-11 items-center rounded-full`
stylesA[false] = tw`bg-grey-light-scale-500 dark:bg-grey-dark-scale-300 relative inline-flex h-6 w-11 items-center rounded-full`

const stylesB = {}
stylesB[true] = tw`translate-x-6 inline-block h-4 w-4 transform rounded-full bg-body`
stylesB[false] = tw`translate-x-1 inline-block h-4 w-4 transform rounded-full bg-body`

function MyToggle({active=false, disabled=false}) {
  const [enabled, setEnabled] = useState(active)
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      tw='transition'
      css={stylesA[enabled]}
      style={disabled ? {pointerEvents: 'none', opacity: 0.5} : null}
    >
      <span
        css={stylesB[enabled]}
      />
    </Switch>
  )
}

export default MyToggle
