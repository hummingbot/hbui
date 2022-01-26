import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { P, PSmall, LabelMicro } from '../../../../hb_ui/elements/typography'
import {
  ShortHero,
  MainContentRow,
  MainContentBody,
  MainContentSidebar,
} from '../../../ui/elements/layout'
import { Button } from '../../../../hb_ui/components/button'
import Copy from '../../../../hb_ui/svgs/16x16/Copy'

function ColorCard({ title, description, hex, rgb }) {
  return (
    <Root tw="grid grid-cols-10 gap-8">
      <div tw="col-span-4 md:col-span-2">
        <ColorSwatch hex={hex} />
      </div>
      <div tw="col-span-6 md:col-span-5">
        <PSmall isBold className="title">
          {title}
        </PSmall>
        <PSmall>{description}</PSmall>
      </div>
      <div tw="col-span-12 lg:col-span-3">
        <Button label={`HEX (${hex})`} iconAfter={<Copy />} />
        <Button label={`RGB (${rgb})`} iconAfter={<Copy />} />
      </div>
    </Root>
  )
}

export default ColorCard

const Root = styled.div({
  paddingTop: '30px',
  paddingBottom: '30px',
  '& .title': {
    marginBottom: '10px',
  },
  '& button': {
    marginBottom: '10px',
  },
})

const ColorSwatch = styled.div(props => ({
  height: '118px',
  width: '100%',
  borderRadius: '10px',
  background: props.hex,
}))
