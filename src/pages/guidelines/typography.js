/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { MainContent } from '../../components/elements/layout'
import {
  P,
  PSmall,
  PTiny,
  H1,
  H2,
  H4,
  H6,
  H5,
  LabelTiny
} from '../../../hbui/elements/typography'
import { PageRoot, Separator } from '../../../hbui/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import { CalloutInfo } from '../../../hbui/components/callout'

const Typography = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Typography</H1>
    </Hero>
    <MainContent>
      <br />
      <br />
      <H5 isBold>Font stacks</H5>
      <Separator />
      <br />
      <br />
      <P>You can control the typeface of text using the font family utilities.</P>
      <br />
      <br />
      <br />
      <PSmall isBold>Font-sans</PSmall>
      <br />
      <H2 isBold tw='leading-tight'>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789</H2>
      <br />
      <br />
      <br />
      <PSmall>Type weights</PSmall>
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-6">
          <H4 tw='py-4 font-light border-solid border-b-2 border-body'>Satoshi Light</H4>
          <H4 tw='py-4 font-normal border-solid border-b-2 border-body'>Satoshi Regular</H4>
          <H4 tw='py-4 font-medium border-solid border-b-2 border-body'>Satoshi Medium</H4>
          <H4 tw='py-4 font-bold border-solid border-b-2 border-body'>Satoshi Bold</H4>
          <H4 tw='py-4 font-black border-solid border-b-2 border-body'>Satoshi Black</H4>
        </div>
        <div tw="grid col-span-12 md:col-span-6">
          <H4 tw='py-4 font-light border-solid border-b-2 border-body italic'>Satoshi Light Italic</H4>
          <H4 tw='py-4 font-normal border-solid border-b-2 border-body italic'>Satoshi Regular Italic</H4>
          <H4 tw='py-4 font-medium border-solid border-b-2 border-body italic'>Satoshi Medium Italic</H4>
          <H4 tw='py-4 font-bold border-solid border-b-2 border-body italic'>Satoshi Bold Italic</H4>
          <H4 tw='py-4 font-black border-solid border-b-2 border-body italic'>Satoshi Black Italic</H4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <PSmall isBold>Font-mono</PSmall>
      <br />
      <H2 isBold tw='leading-tight font-mono'>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789</H2>
      <br />
      <br />
      <PSmall>Type weights</PSmall>
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-6">
          <H4 tw='py-4 font-mono font-normal border-solid border-b-2 border-body'>SF Mono Regular</H4>
          <H4 tw='py-4 font-mono font-bold border-solid border-b-2 border-body'>SF Mono Bold</H4>
        </div>
        <div tw="grid col-span-12 md:col-span-6">
          <H4 tw='py-4 font-mono font-normal border-solid border-b-2 border-body italic'>SF Mono Reg. Italic</H4>
          <H4 tw='py-4 font-mono font-bold border-solid border-b-2 border-body italic'>SF Mono Bold Italic</H4>
        </div>
      </div>
      <br />
      <br />
      <CalloutInfo
        title='Download'
        text={<span>Get access to our font pack in the <Link to='/downloads#typography'>downloads</Link> section.</span>}
      />
      <br />
      <br />
      <br />
      <br />
      <H5 isBold>Font</H5>
      <Separator />
      <br />
      <br />
      <P>Use these transforms to set the font weight:</P>
      <br />
      <br />
      <br />
      <div tw="hidden md:grid grid-cols-3 gap-4 border-b-2 border-window">
        <div tw="grid col-span-1">
          <PSmall tw='py-2 font-medium'>Example</PSmall>
        </div>
        <div tw="grid col-span-1">
          <PSmall tw='py-2 font-medium'>Variant</PSmall>
        </div>
        <div tw="grid col-span-1">
          <PSmall tw='py-2 font-medium'>Transform</PSmall>
        </div>
      </div>
      <br />
      <div tw="block md:grid grid-cols-3 gap-4">
        <div tw="block md:(grid col-span-1)">
          <H4 isLight tw='py-2'>Aa</H4>
          <PTiny tw='py-2 font-medium pr-3'>Satoshi Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="items-center md:col-span-1 pb-2">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Variant:</PSmall>
          <PSmall tw='font-medium'>Light</PSmall>
        </div>
        <div tw="block md:col-span-1">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Transform:</PSmall>
          <PSmall tw='font-mono text-green dark:text-terminal'>isLight</PSmall>
          <PSmall tw='py-2 font-medium font-mono'>{'<H4 isLight>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="block md:grid grid-cols-3 gap-4">
        <div tw="block md:(grid col-span-1)">
          <H4 tw='py-2'>Aa</H4>
          <PTiny tw='py-2 font-medium pr-3'>Satoshi Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="items-center md:col-span-1 pb-2">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Variant:</PSmall>
          <PSmall tw='font-medium'>default</PSmall>
        </div>
        <div tw="block md:col-span-1">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Transform:</PSmall>
          <PSmall tw='py-2 font-medium font-mono'>None (default)</PSmall>
          <PSmall>{'<H4>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="block md:grid grid-cols-3 gap-4">
        <div tw="block md:(grid col-span-1)">
          <H4 isMedium tw='py-2'>Aa</H4>
          <PTiny tw='py-2 font-medium pr-3'>Satoshi Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="items-center md:col-span-1 pb-2">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Variant:</PSmall>
          <PSmall tw='font-medium'>Medium</PSmall>
        </div>
        <div tw="block md:col-span-1">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Transform:</PSmall>
          <PSmall tw='font-mono text-green dark:text-terminal'>isMedium</PSmall>
          <PSmall tw='py-2 font-medium font-mono'>{'<H4 isMedium>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="block md:grid grid-cols-3 gap-4">
        <div tw="block md:(grid col-span-1)">
          <H4 isBold tw='py-2'>Aa</H4>
          <PTiny tw='py-2 font-medium pr-3'>Satoshi Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="items-center md:col-span-1 pb-2">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Variant:</PSmall>
          <PSmall tw='font-medium'>Bold</PSmall>
        </div>
        <div tw="block md:col-span-1">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Transform:</PSmall>
          <PSmall tw='font-mono text-green dark:text-terminal'>isBold</PSmall>
          <PSmall tw='py-2 font-medium font-mono'>{'<H4 isBold>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="block md:grid grid-cols-3 gap-4">
        <div tw="block md:(grid col-span-1)">
          <H4 isExtraBold tw='py-2'>Aa</H4>
          <PTiny tw='py-2 font-medium pr-3'>Satoshi Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="items-center md:col-span-1 pb-2">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Variant:</PSmall>
          <PSmall tw='font-medium'>ExtraBold</PSmall>
        </div>
        <div tw="block md:col-span-1">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Transform:</PSmall>
          <PSmall tw='font-mono text-green dark:text-terminal'>isExtraBold</PSmall>
          <PSmall tw='py-2 font-medium font-mono'>{'<H4 isExtraBold>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="block md:grid grid-cols-3 gap-4">
        <div tw="block md:(grid col-span-1)">
          <H4 isHeavy tw='py-2'>Aa</H4>
          <PTiny tw='py-2 font-medium pr-3'>Satoshi Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="items-center md:col-span-1 pb-2">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Variant:</PSmall>
          <PSmall tw='font-medium'>Heavy</PSmall>
        </div>
        <div tw="block md:col-span-1">
          <PSmall tw="block md:hidden md:col-span-1 mr-2">Transform:</PSmall>
          <PSmall tw='font-mono text-green dark:text-terminal'>isHeavy</PSmall>
          <PSmall tw='py-2 font-medium font-mono'>{'<H4 isHeavy>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
    </MainContent>
  </Layout>
)

export default Typography
