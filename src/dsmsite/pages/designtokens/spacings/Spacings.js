import React from 'react'
import { ShortHero, MainContent, PageRoot } from '../../../ui/elements/layout'
import { P } from 'ab-tests/elements/typography'
import tw, { css, styled } from 'twin.macro'

function Spacings() {
  return (
    <PageRoot>
      <ShortHero
        title="Spacings"
        subTitle="The most commonly used spacings"
      />
      <MainContent>
        <SpacingRow label='xxs' width={8} />
        <SpacingRow label='xs' width={16} />
        <SpacingRow label='sm' width={24} />
        <SpacingRow label='md' width={32} />
        <SpacingRow label='lg' width={48} />
        <SpacingRow label='xl' width={64} />
        <SpacingRow label='xxl' width={80} />
        <SpacingRow label='xxxl' width={120} />
      </MainContent>
    </PageRoot>
  )
}

export default Spacings

const SpacingLabel = styled.div({
  width: '100px',
  height: '20px'
})

const SpacingRectangle = styled.div(({width}) => [
  tw`bg-quaternary rounded`,
  css`
    height: 20px;
    width: ${width + 'px'};
  `,
])

const SpacingRow = ({ label, width }) => {
  return (
    <div tw="flex mb-2">
      <SpacingLabel>{label}</SpacingLabel>
      <SpacingRectangle width={width} />
    </div>
  )
}