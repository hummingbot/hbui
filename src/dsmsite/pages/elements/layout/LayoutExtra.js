import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import {
  P,
  Body,
  Bold,
  H6,
  H5,
  Red,
  Blue,
  Green,
} from '../../../../hb_ui/elements/typography'
import {
  red,
  green_primary,
  blue_bright,
  purple,
  orange
} from '../../../../hb_ui/constants/colors'
import {
  PageRoot,
  PaddingBox,
  ButtonsRow,
  Separator
} from '../../../../hb_ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'

function LayoutExtra() {
  return (
    <PageRoot>
      <ShortHero
        title='Layout (extra)'
        subTitle='Layout utilities.'
      />
      <MainContent>
        <P>PaddingBox</P>
        <br />
        <P>ButtonsRow</P>
        <br />
        <P>Separator</P>
        <br />
        <P>PageRoot</P>
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default LayoutExtra


const codeSingleColumnLayout = String.raw
`import { PageRoot, Section, Container } from '../hb_ui/elements/layout'
import { P } from '../hb_ui/elements/typography'

<PageRoot>
  <Section>
    <Container>
      <P>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor.</P>
    </Container>
  </Section>
</PageRoot>
`
