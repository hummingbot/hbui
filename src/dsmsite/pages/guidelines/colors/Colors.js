import React from 'react'
import tw from 'twin.macro'
import { P, H6, LabelMicro } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import ColorCard from './ColorCard'
import {
  ShortHero,
  MainContent,
  MainContentRow,
  MainContentBody,
  MainContentSidebar,
} from '../../../ui/elements/layout'
import PageIndex from '../../../ui/components/PageIndex'
import index from './index'

const labelsHeader = (
  <div tw="grid grid-cols-10 gap-8">
    <div tw="col-span-2">
      <LabelMicro>Color</LabelMicro>
    </div>
    <div tw="col-span-5">
      <LabelMicro>Description</LabelMicro>
    </div>
    <div tw="invisible md:visible md:col-span-3">
      <LabelMicro>Token</LabelMicro>
    </div>
  </div>
)

function Colors() {
  return (
    <div>
      <ShortHero
        title="Colors"
        subTitle="Color distinguishes our brand and helps us create consistent experiences across products."
      />
      <MainContent>
        <H6 id="primary-colors">Primary Colors</H6>
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <MainContentBody>
            {labelsHeader}
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
            {labelsHeader}
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
    </div>
  )
}

export default Colors
