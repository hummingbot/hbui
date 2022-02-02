import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import {
  P,
  Bold,
  H6,
  Red,
  Blue,
  Green,
} from '../../../../hb_ui/elements/typography'
import {
  red,
  green_primary,
  blue
} from '../../../../hb_ui/constants/colors'
import colors from '../../../../hb_ui/constants/colors'
import {
  PageRoot,
  Section,
  Container,
  Separator,
} from '../../../../hb_ui/elements/layout'
import { hero, navigation } from './shared'

function LayoutCoreSingle() {
  return (
    <PageRoot>
      {hero}
      <MainContent>
        {navigation}
        <br />
        <br />
        <P>
          The single column layout is the simplest layout and consists of a
          single central column housing all the content.
        </P>
        <br />
        <Separator />
        <br />
        <br />
        <H6>The 3 main elements:</H6>
        <br />
        <P isBold>PageRoot</P>
        <br />
        <P>
          Placed at the root of a page, ensures the page always takes the full
          height of the browser window. A great way to ensure the correct
          background color fills the screen.
        </P>
        <br />
        <P isBold>Section</P>
        <br />
        <P>
          Takes the full width of the screen, and is ready to handle a{' '}
          <Bold>Container</Bold> inside.
        </P>
        <br />
        <P isBold>Container</P>
        <br />
        <P>
          Is the central column, within a single-column layout.{' '}
          <Bold>Responsive</Bold> by default.
        </P>
        <br />
        <br />
        <br />
        <H6>Example:</H6>
        <br />
        <P>
          Resize the browser to see the interplay between{' '}
          <Green>PageRoot</Green>, <Red>Section</Red> and <Blue>Container</Blue>
          :
        </P>
        <br />
        <P>
          (Note how the <Green>PageRoot</Green> takes the full screen height,
          the <Red>Section</Red> the full width, and the <Blue>Container</Blue>{' '}
          a constrained central position.)
        </P>
        <br />
        <PageRoot style={{ border: `2px solid ${green_primary}` }}>
          <Section style={{ border: `2px solid ${red}` }}>
            <Container style={{ border: `2px solid ${blue}` }}>
              <P>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur
                blandit tempus porttitor. Morbi leo risus, porta ac consectetur
                ac, vestibulum at eros. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Curabitur blandit tempus
                porttitor.
              </P>
            </Container>
          </Section>
        </PageRoot>
        <br />
        <CodeBlock code={codeSingleColumnLayout} />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default LayoutCoreSingle

const codeSingleColumnLayout = String.raw`import { PageRoot, Section, Container } from '../hb_ui/elements/layout'
import { P } from '../hb_ui/elements/typography'

<PageRoot>
  <Section>
    <Container>
      <P>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor.</P>
    </Container>
  </Section>
</PageRoot>
`
