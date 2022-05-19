import React from 'react'
import { ShortHero, MainContent, PageRoot } from '../../../ui/elements/layout'
import { P, Bold } from '../../../../../hbui/elements/typography'
import tokens from '../../../../../hbui/tokens'
import { Separator } from '../../../../../hbui/elements/layout'
import tw, { css, styled } from 'twin.macro'

function Spacings() {
  return (
    <PageRoot>
      <ShortHero
        title="Spacings"
        subTitle="The most commonly used spacings"
      />
      <MainContent>
        <P>These spaces are available in all spacing classes, such as margins, paddings, left, right, top, bottom. Examples: <Bold>m-xs</Bold> (margin xs), <Bold>mb-xs</Bold> (margin-bottom xs), <Bold>pt-xs</Bold> (padding-top xs), <Bold>left-xs</Bold> (position left xs), <Bold>top-xs</Bold> (position top xs).</P>
        <Separator />
        <br />
        <SpacingRow label='xxs' width={tokens.spacing.xxs} />
        <SpacingRow label='xs' width={tokens.spacing.xs} />
        <SpacingRow label='sm' width={tokens.spacing.sm} />
        <SpacingRow label='md' width={tokens.spacing.md} />
        <SpacingRow label='lg' width={tokens.spacing.lg} />
        <SpacingRow label='xl' width={tokens.spacing.xl} />
        <SpacingRow label='xxl' width={tokens.spacing.xxl} />
        <SpacingRow label='xxxl' width={tokens.spacing.xxxl} />
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
      <SpacingRectangle style={{width: width}} />
    </div>
  )
}