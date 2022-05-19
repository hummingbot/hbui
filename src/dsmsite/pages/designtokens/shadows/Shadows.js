import React from 'react'
import { ShortHero, MainContent, PageRoot } from '../../../ui/elements/layout'
import { P } from '../../../../../hbui/elements/typography'
import tw, { css, styled } from 'twin.macro'

function Shadows() {
  return (
    <PageRoot>
      <ShortHero
        title="Shadows"
        subTitle="The standard shadows"
      />
      <MainContent>
        <P>shadow-sm</P>
        <div tw='bg-body w-[200px] h-[80px] mt-3 mb-4 shadow-sm dark:shadow-[rgba(255,255,255,0.2)]' />
        <P>shadow</P>
        <div tw='bg-body w-[200px] h-[80px] mt-3 mb-4 shadow dark:shadow-[rgba(255,255,255,0.2)]' />
        <P>shadow-md</P>
        <div tw='bg-body w-[200px] h-[80px] mt-3 mb-4 shadow-md dark:shadow-[rgba(255,255,255,0.2)]' />
        <P>shadow-lg</P>
        <div tw='bg-body w-[200px] h-[80px] mt-3 mb-4 shadow-lg dark:shadow-[rgba(255,255,255,0.2)]' />
        <P>shadow-xl</P>
        <div tw='bg-body w-[200px] h-[80px] mt-3 mb-4 shadow-xl dark:shadow-[rgba(255,255,255,0.2)]' />
        <P>shadow-2xl</P>
        <div tw='bg-body w-[200px] h-[80px] mt-3 mb-4 shadow-2xl dark:shadow-[rgba(255,255,255,0.2)]' />
      </MainContent>
    </PageRoot>
  )
}

export default Shadows

const SpacingLabel = styled.div({
  width: '100px',
  height: '20px'
})

const SpacingRectangle = styled.div(({width}) => [
  tw`bg-grey-light-scale-500 dark:bg-grey-dark-scale-200 rounded`,
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