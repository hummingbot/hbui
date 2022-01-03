import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { P, LabelMicro } from '../../../../hb_ui/elements/typography'
import { ShortHero,
  MainContentRow,
  MainContentBody,
  MainContentSidebar
} from '../../../elements/layout'

function ColorCard() {
  return (
    <div tw='grid grid-cols-10 gap-4'>
      <div tw='col-span-2'>
        <ColorSwatch tw='bg-brand' />
      </div>
      <div tw='col-span-5'>
        
      </div>
      <div tw='col-span-3'>
        
      </div>
    </div>
  )
}

export default ColorCard

const ColorSwatch = styled.div({
  height: '118px',
  width: '100%',
  borderRadius: '10px',
})
