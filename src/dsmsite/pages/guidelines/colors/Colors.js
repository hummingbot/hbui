import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { P, LabelMicro } from '../../../../hb_ui/elements/typography'
import { ShortHero,
  MainContentRow,
  MainContentBody,
  MainContentSidebar
} from '../../../elements/layout'
import ColorCard from './ColorCard'

function Colors() {
  return (
    <div>
      <ShortHero
        title='Colors'
        subTitle='Color distinguishes our brand and helps us create consistent experiences across products.'
      />
      <MainContentRow>
        <MainContentBody>
          <P>Primary Colors</P>
          <br />
          <Separator />
          <br />
          <div tw='grid grid-cols-10 gap-4'>
            <div tw='col-span-2'>
              <LabelMicro>Color</LabelMicro>
            </div>
            <div tw='col-span-5'>
              <LabelMicro>Description</LabelMicro>
            </div>
            <div tw='col-span-3'>
              <LabelMicro>Token</LabelMicro>
            </div>
          </div>
          <br />
          <ColorCard />
          <br />
          <Separator />
        </MainContentBody>
        <MainContentSidebar>
          <P>Index</P>
        </MainContentSidebar>
      </MainContentRow>
    </div>
  )
}

export default Colors

export const Separator = styled.p(
  props => [
    css`
      height: 1px;
      width: 100%;
      opacity: 0.5;
      margin-top: 20px;
    `,
    tw`bg-[#E9EBEC] dark:(bg-[#606060])`,
  ]
)
