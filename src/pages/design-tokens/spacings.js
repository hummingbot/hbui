/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { css, styled } from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { Separator } from '../../../hbui/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import { H1, P, Bold } from '../../../hbui/elements/typography'
import tokens from '../../../hbui/tokens'

const SpacingsPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Spacings</H1>
      <P>The most commonly used spacings</P>
    </Hero>
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
  </Layout>
)

export default SpacingsPage

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
