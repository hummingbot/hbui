/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled }  from 'twin.macro'
import Layout from '../../components/layout'
import { H1, P, H6, PSmall } from '../../../hbui/elements/typography'
import Hero from '../../../hbui/components/hero/Hero'
import {
  MainContent,
} from '../../components/elements/layout'
import tokens from '../../../hbui/tokens/index.json'
const colorTokens = tokens.colors

const Colors = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Colors</H1>
      <P>Color distinguishes our brand and helps us create consistent experiences across products.</P>
    </Hero>
    <MainContent>
      <H6 isBold id="primary-colors">Main Colors</H6>
      <br />
      <P>Each "main color" corresponds to the level "500" of the respective color palette.</P>
      <br />
      <MainColorsRow>
        <ColorLabel>Green</ColorLabel>
        <ColorLabel>Terminal</ColorLabel>
        <ColorLabel>Blue</ColorLabel>
        <ColorLabel>Purple</ColorLabel>
        <ColorLabel>Magenta</ColorLabel>
        <ColorLabel>Red</ColorLabel>
        <ColorLabel>Orange</ColorLabel>
        <ColorLabel>Yellow</ColorLabel>
      </MainColorsRow>
      <MainColorsRow>
        <ColorSwatch style={{backgroundColor: colorTokens.color_palettes.green['500'] }} />
        <ColorSwatch style={{backgroundColor: colorTokens.terminal }} />
        <ColorSwatch style={{backgroundColor: colorTokens.color_palettes.blue['500']  }} />
        <ColorSwatch style={{backgroundColor: colorTokens.color_palettes.purple['500'] }} />
        <ColorSwatch style={{backgroundColor: colorTokens.color_palettes.magenta['500'] }} />
        <ColorSwatch style={{backgroundColor: colorTokens.color_palettes.red['500'] }} />
        <ColorSwatch style={{backgroundColor: colorTokens.color_palettes.orange['500'] }} />
        <ColorSwatch style={{backgroundColor: colorTokens.color_palettes.yellow['500'] }} />
      </MainColorsRow>
      <MainColorsRow>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colorTokens.color_palettes.green['500']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colorTokens.color_palettes.blue['500'] }</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colorTokens.color_palettes.purple['500']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colorTokens.color_palettes.magenta['500']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colorTokens.color_palettes.red['500']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colorTokens.color_palettes.orange['500']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colorTokens.color_palettes.yellow['500']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colorTokens.terminal}</ColorHexLabel>
      </MainColorsRow>
      <br />
      <br />
      <br />
      <H6 isBold id="primary-colors">Color Palettes</H6>
      <br />
      <Palette colorName='Green' colors={colorTokens.color_palettes.green} />
      <Palette colorName='Blue' colors={colorTokens.color_palettes.blue} />
      <Palette colorName='Purple' colors={colorTokens.color_palettes.purple} />
      <Palette colorName='Magenta' colors={colorTokens.color_palettes.magenta} />
      <Palette colorName='Red' colors={colorTokens.color_palettes.red} />
      <Palette colorName='Orange' colors={colorTokens.color_palettes.orange} />
      <Palette colorName='Yellow' colors={colorTokens.color_palettes.yellow} />
      <Palette colorName='Grey Light' colors={colorTokens.color_palettes.grey_light} />
      <Palette colorName='Grey Dark' colors={colorTokens.color_palettes.grey_dark} />
    </MainContent>
  </Layout>
)

export default Colors

const MainColorsRow = styled.div(() => [
  tw`grid grid-cols-8 gap-2`,
])
const ColorsRow = styled.div(() => [
  tw`grid grid-cols-10 gap-2`,
])
const ColorSwatch = styled.div(() => [
  tw`aspect-video rounded`,
])
const ColorLabel = styled(PSmall)(() => [
  tw`mb-2`,
])
const ColorHexLabel = styled(ColorLabel)(() => [
  tw`font-mono`,
])

function Palette({colorName, colors}) {
  return (
    <div>
      <P tw='mb-4'>{colorName}</P>
      <ColorsRow>
        <ColorLabel>50</ColorLabel>
        <ColorLabel>100</ColorLabel>
        <ColorLabel>200</ColorLabel>
        <ColorLabel>300</ColorLabel>
        <ColorLabel>400</ColorLabel>
        <ColorLabel tw='font-black'>500</ColorLabel>
        <ColorLabel>600</ColorLabel>
        <ColorLabel>700</ColorLabel>
        <ColorLabel>800</ColorLabel>
        <ColorLabel>900</ColorLabel>
      </ColorsRow>
      <ColorsRow>
        <ColorSwatch style={{backgroundColor: colors['50']  }} />
        <ColorSwatch style={{backgroundColor: colors['100'] }} />
        <ColorSwatch style={{backgroundColor: colors['200'] }} />
        <ColorSwatch style={{backgroundColor: colors['300'] }} />
        <ColorSwatch style={{backgroundColor: colors['400'] }} />
        <ColorSwatch style={{backgroundColor: colors['500'] }} />
        <ColorSwatch style={{backgroundColor: colors['600'] }} />
        <ColorSwatch style={{backgroundColor: colors['700'] }} />
        <ColorSwatch style={{backgroundColor: colors['800'] }} />
        <ColorSwatch style={{backgroundColor: colors['900'] }} />
      </ColorsRow>
      <ColorsRow>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['50']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['100'] }</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['200']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['300']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['400']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['500']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['600']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['700']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['800']}</ColorHexLabel>
        <ColorHexLabel tw='mb-0 mt-2 text-secondary'>{colors['900']}</ColorHexLabel>
      </ColorsRow>
      <br />
      <br />
    </div>
  )
}
