/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled }  from 'twin.macro'
import Layout from '../../components/layout'
import { H1, P, H6, LabelTiny, PSmall } from '../../../hbui/elements/typography'
import { Separator, Section, Container } from '../../../hbui/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import {
  MainContent,
  MainContentRow,
  MainContentBody,
  MainContentSidebar,
} from '../../components/elements/layout'
import PageIndex from '../../components/PageIndex'
import { Button } from '../../../hbui/components/buttons'
import Copy from '../../../hbui/assets/svgs/16x16/Copy'

const Colors = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Colors</H1>
      <P>Color distinguishes our brand and helps us create consistent experiences across products.</P>
    </Hero>
    <MainContent>
      <H6 id="primary-colors">Primary Colors</H6>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <MainContentBody>
          <LabelsHeader />
          <Separator />
          <ColorCard
            title="green-hummingbot"
            description="Primary color for Hummingbot. Used as primary button background, hero area background, and as a link color. This color provides accessible contrast when used for text on light background."
            hex="#00C2CE"
            rgb="0, 206, 194"
          />
          <Separator />
          <ColorCard
            title="green-humminbot-dark-1"
            description="Strong primary color for Humminbot. Used in primary color gradients, and as a primary button hover color."
            hex="#0D999E"
            rgb="13, 153, 158"
          />
          <Separator />
          <ColorCard
            title="green-humminbot-dark-2"
            description="Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quam diu etiam furor iste tuus nos eludet."
            hex="#355C6A"
            rgb="53, 92, 106"
          />
          <Separator />
          <ColorCard
            title="green-humminbot-dark-3"
            description="Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quam diu etiam furor iste tuus nos eludet."
            hex="#404C5C"
            rgb="64, 76, 92"
          />
          <Separator />
          <ColorCard
            title="green-terminal"
            description="Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quam diu etiam furor iste tuus nos eludet."
            hex="#5FFFD7"
            rgb="95, 255, 215"
          />
          <Separator />
          <br />
          <br />
          <br />
          <br />
          <H6 id="secondary-colors">Secondary Colors</H6>
          <br />
          <P>
            Our secondary palette contains a variety of colors to keep things
            fresh and interesting. When used in conjunction with our primary
            palette, these colors make every moment feel on-brand and every
            interaction informative.
          </P>
          <br />
          <br />
          {<LabelsHeader />}
          <Separator />
          <ColorCard
            title="red"
            description="Primary color for Hummingbot. Used as primary button background, hero area background, and as a link color. This color provides accessible contrast when used for text on light background."
            hex="#EB5757"
            rgb="235, 87, 87"
          />
          <Separator />
          <ColorCard
            title="orange"
            description="Primary color for Hummingbot. Used as primary button background, hero area background, and as a link color. This color provides accessible contrast when used for text on light background."
            hex="#F08727"
            rgb="240, 135, 39"
          />
          <Separator />
          <ColorCard
            title="yellow"
            description="Primary color for Hummingbot. Used as primary button background, hero area background, and as a link color. This color provides accessible contrast when used for text on light background."
            hex="#FCDB17"
            rgb="252, 219, 23"
          />
          <Separator />
          <ColorCard
            title="blue"
            description="Primary color for Hummingbot. Used as primary button background, hero area background, and as a link color. This color provides accessible contrast when used for text on light background."
            hex="#318DFF"
            rgb="113, 83, 198"
          />
          <Separator />
          <br />
          <br />
        </MainContentBody>
        <MainContentSidebar>
          <PageIndex title="On this page" items={index} />
        </MainContentSidebar>
      </div>
    </MainContent>
  </Layout>
)

export default Colors

const primaryColors = {
  label: 'Primary colors',
  id: 'primary-colors',
}

const secondaryColors = {
  label: 'Secondary colors',
  id: 'secondary-colors',
}

const extendedPalette = {
  label: 'Extended palette',
  id: 'extended-palette',
}

const index = [primaryColors, secondaryColors, extendedPalette]



function ColorCard({ title, description, hex, rgb }) {
  return (
    <ColorCardRoot tw="grid grid-cols-10 gap-8">
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
    </ColorCardRoot>
  )
}

const ColorCardRoot = styled.div({
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

function LabelsHeader() {
  return (
    <div tw="grid grid-cols-10 gap-8">
      <div tw="col-span-2">
        <LabelTiny>Color</LabelTiny>
      </div>
      <div tw="col-span-5">
        <LabelTiny>Description</LabelTiny>
      </div>
      <div tw="invisible md:visible md:col-span-3">
        <LabelTiny>Token</LabelTiny>
      </div>
    </div>
  )
}

