/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled }  from 'twin.macro'
import Layout from '../../components/layout'
import { H1, P, H6, LabelTiny, PSmall } from '../../../hbui/elements/typography'
import { Separator, Section, Container, Window } from '../../../hbui/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import {
  MainContent,
} from '../../components/elements/layout'
import tokens from '../../../hbui/tokens/index.json'
const colorTokens = tokens.colors


const DarkMode = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Dark/Light Mode</H1>
      <P>Color guide for dark and light modes</P>
    </Hero>
    <MainContent>
      <P>The Hummingbot design system provides an automatic dark mode out of the box. By applying the TailwindCSS classes correctly, the UI will adapt to the current color scheme.</P>
      <br />
      <P>See below the appearence of the different color schemes. See further below on how to implement them.</P>
      <br />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <H6 isBold>Dark Mode</H6>
      <br />
      <P>Appearance of Body, Window and Text variants in dark mode:</P>
      <br />
      <DarkModeBg tw='p-8'>
        <PTerminal>Body bg: {colorTokens.dark.body_bg}</PTerminal>
        <PTerminal>Body border: {colorTokens.dark.body_border}</PTerminal>
        <DarkModeWindow tw='w-[50%] p-8 my-10 mx-auto'>
          <PTerminal>Window bg: {colorTokens.dark.window_bg}</PTerminal>
          <PTerminal>Window border: {colorTokens.dark.window_border}</PTerminal>
          <br />
          <DarkModePPrimary>Text Primary: {colorTokens.dark.text_primary}</DarkModePPrimary>
          <br />
          <DarkModePSecondary>Text Secondary: {colorTokens.dark.text_secondary}</DarkModePSecondary>
          <br />
          <DarkModePTertiary>Text Tertiary: {colorTokens.dark.text_tertiary}</DarkModePTertiary>
        </DarkModeWindow>
      </DarkModeBg>
      <br />
      <br />
      <br />
      <H6 isBold>Light Mode</H6>
      <br />
      <P>Appearance of Body, Window and Text variants in light mode:</P>
      <br />
      <LightModeBg tw='p-8'>
        <PGreen>Body bg: {colorTokens.light.body_bg}</PGreen>
        <PGreen>Body border: {colorTokens.light.body_border}</PGreen>
        <LightModeWindow tw='w-[50%] p-8 my-10 mx-auto'>
          <PGreen tw='font-medium'>Window bg: {colorTokens.light.window_bg}</PGreen>
          <PGreen tw='font-medium'>Window border: {colorTokens.light.window_border}</PGreen>
          <br />
          <LightModePPrimary>Text Primary: {colorTokens.light.text_primary}</LightModePPrimary>
          <br />
          <LightModePSecondary>Text Secondary: {colorTokens.light.text_secondary}</LightModePSecondary>
          <br />
          <LightModePTertiary>Text Tertiary: {colorTokens.light.text_tertiary}</LightModePTertiary>
        </LightModeWindow>
      </LightModeBg>
      <br />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <H6 isBold>Implementation</H6>
      <br />
      <P>You should use HBUI's layout elements to achieve this effect systematically. The required classes have already been added for you, saving you time and possible errors.</P>
      <br />
      <CodeBlock code={codeHBUIImport} />
      <br />
      <br />
      <P>The code above produces the following HTML block. Press the Sun/Moon icon on the left sidebar to see the effect. (Note that the whole page will change as well)</P>
      <br />
      <Section tw='border-body border py-16'>
        <Container>
          <Window>
            <P tw='text-primary'>Text Primary</P>
            <br />
            <P tw='text-secondary'>Text Secondary</P>
            <br />
            <P tw='text-tertiary'>Text Tertiary</P>
          </Window>
        </Container>
      </Section>
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <H6 isBold>Doing it by hand</H6>
      <br />
      <P>It is useful to know how to achieve the same "by hand". The following code would produce the same effect:</P>
      <br />
      <CodeBlock code={codeImport} />
      <br />
      <P>Result is the same:</P>
      <P tw='text-tertiary'>(Press the Sun/Moon icon on the left sidebar to test)</P>
      <br />
      <div tw='bg-body border border-body p-8'>
        <div tw='bg-window border border-window w-[50%] p-8 my-10 mx-auto'>
          <LightModePPrimary tw='text-primary'>Text Primary</LightModePPrimary>
          <br />
          <LightModePSecondary tw='text-secondary'>Text Secondary</LightModePSecondary>
          <br />
          <LightModePTertiary tw='text-tertiary'>Text Tertiary</LightModePTertiary>
        </div>
      </div>
      <br />
      <br />
      <P tw='text-secondary'>Understanding the classes in use:</P>
      <br />
      <P>The class <Code>bg-body</Code> tells the element to assume the current scheme's <Underline>background color</Underline>.</P>
      <P>The class <Code>bg-window</Code> tells the element to assume the current scheme's <Underline>window color</Underline>.</P>
      <br />
      <P>The class <Code>bg-border</Code> tells the element to assume the current scheme's background-specific <Underline>border color</Underline>.</P>
      <P>The class <Code>window-border</Code> tells the element to assume the current scheme's window-specific <Underline>border color</Underline>.</P>
      <br />
      <P>The class <Code>text-primary</Code> tells the element to assume the current scheme's primary <Underline>text color</Underline>.</P>
      <P>The class <Code>text-secondary</Code> tells the element to assume the current scheme's secondary <Underline>text color</Underline>.</P>
      <P>The class <Code>text-tertiary</Code> tells the element to assume the current scheme's tertiary <Underline>text color</Underline>.</P>
      
      <br />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <H6 isBold>Different colors per scheme</H6>
      <br />
      <P>It is also possible to achieve different colors per color scheme. See the example below:</P>
      <br />
      <br />
      <P isBold>Text</P>
      <P tw='text-magenta dark:text-blue'>This text will be magenta on light mode, and blue on dark mode.</P>
      <br />
      <CodeBlock code={codeDifferentP} />
      <br />
      <br />
      <P isBold tw='mb-2'>Background</P>
      <P tw='mb-2'>Make a square magenta on light mode, and blue on dark mode:</P>
      <div tw='bg-magenta dark:bg-blue h-28 w-28 text-black p-2'/>
      <br />
      <CodeBlock code={codeDifferentDiv} />
      <br />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <H6 isBold>Custom colors per scheme</H6>
      <br />
      <P>It is also possible to achieve completely custom colors per color scheme. See the example below:</P>
      <br />
      <br />
      <P isBold>Text</P>
      <P tw='text-[#ff0000] dark:text-[#00ff00]'>This text will be red on light mode, and green on dark mode.</P>
      <br />
      <CodeBlock code={codeCustomP} />
      <br />
      <br />
      <P isBold tw='mb-2'>Background</P>
      <P tw='mb-2'>Make a square red on light mode, and green on dark mode:</P>
      <div tw='bg-[#ff0000] dark:bg-[#00ff00] h-28 w-28 text-black p-2'/>
      <br />
      <CodeBlock code={codeCustomDiv} />
      <br />
    </MainContent>
  </Layout>
)

export default DarkMode

const DarkModeBg = styled.div({
  backgroundColor: colorTokens.dark.body_bg,
  borderRadius: '3px',
  border: `1px solid ${colorTokens.dark.body_border}`,
})

const DarkModeWindow = styled.div({
  backgroundColor: colorTokens.dark.window_bg,
  borderRadius: '3px',
  border: `1px solid ${colorTokens.dark.window_border}`,
})
const DarkModePPrimary = styled(P)({
  color: colorTokens.dark.text_primary,
})
const DarkModePSecondary = styled(P)({
  color: colorTokens.dark.text_secondary,
})
const DarkModePTertiary = styled(P)({
  color: colorTokens.dark.text_tertiary,
})

const LightModeBg = styled.div({
  backgroundColor: colorTokens.light.body_bg,
  borderRadius: '3px',
  border: `1px solid ${colorTokens.light.body_border}`,
})

const LightModeWindow = styled.div({
  backgroundColor: colorTokens.light.window_bg,
  borderRadius: '3px',
  border: `1px solid ${colorTokens.light.window_border}`,
})
const LightModePPrimary = styled(P)({
  color: colorTokens.light.text_primary,
})
const LightModePSecondary = styled(P)({
  color: colorTokens.light.text_secondary,
})
const LightModePTertiary = styled(P)({
  color: colorTokens.light.text_tertiary,
})
const PTerminal = styled(P)({
  color: colorTokens.terminal,
})
const PGreen = styled(P)({
  color: colorTokens.color_palettes.green['500'],
})
const Code = styled.span(() => [
  tw`font-mono font-bold`,
])
const Underline = styled.span(() => [
  tw`underline`,
])

const codeImport = String.raw`import { P } from '@hummingbot/hbui/elements/typography' // use HBUI's "P" to enable responsive type
import tw  from 'twin.macro' // required for the tw property to work

// the body element
<div tw='bg-body p-8'>
  // the window element
  <div tw='bg-window border-window border w-[50%] p-8 my-10 mx-auto'>
    <P tw='text-primary'>Text Primary</P>
    <br />
    <P tw='text-secondary'>Text Secondary</P>
    <br />
    <P tw='text-tertiary'>Text Tertiary</P>
  </div>
</div>`


const codeHBUIImport = String.raw`import { Section, Container, Window } from '@hummingbot/hbui/elements/layout'
import { P } from '@hummingbot/hbui/elements/typography'
import tw  from 'twin.macro' // required for the tw property to work

<Section> // the "body" element
  <Container>
    <Window> // the window element
      <P tw='text-primary'>Text Primary</P>
      <br />
      <P tw='text-secondary'>Text Secondary</P>
      <br />
      <P tw='text-tertiary'>Text Tertiary</P>
    </Window>
  </Container>
</Section>`

const codeDifferentP = String.raw`import { P } from '@hummingbot/hbui/elements/typography'
import tw  from 'twin.macro'

<P tw='text-magenta dark:text-blue'>This text will be magenta on light mode, and blue on dark mode.</P>`

const codeDifferentDiv = String.raw`import tw  from 'twin.macro'

<div tw='bg-magenta dark:bg-blue h-28 w-28'/>`

const codeCustomP = String.raw`import { P } from '@hummingbot/hbui/elements/typography'
import tw  from 'twin.macro'

<P tw='text-[#ff0000] dark:text-[#00ff00]'>This text will be red on light mode, and gren on dark mode.</P>`

const codeCustomDiv = String.raw`import tw  from 'twin.macro'

<div tw='bg-[#ff0000] dark:bg-[#00ff00] h-28 w-28'/>`
