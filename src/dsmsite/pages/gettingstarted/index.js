import React from 'react'
import { Body, P } from '../../../../hbui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function GettingStarted() {
  return (
    <PageRoot>
      <ShortHero title="Getting Started" />
      <MainContent>
        <Body>First, you should become familiar with these libraries:</Body>
        <a href='https://github.com/ben-rogerson/twin.macro' target='_blank' rel="noreferrer">
          <P isUnderline>twin.macro</P>
        </a>
        <a href='https://tailwindcss.com/' target='_blank' rel="noreferrer">
          <P isUnderline>TailwindCSS</P>
        </a>
        <a href='https://styled-components.com/' target='_blank' rel="noreferrer">
          <P isUnderline>styled-components</P>
        </a>
        <br />
        <br />
        <br />
        <Body isBold>Start with a Boilerplate project</Body>
        <P>
          This is the easiest way to get started.
        </P>
        <br />
        <P>
          Create-React-App boilerplate project: <a href='https://github.com/CoinAlpha/hbui-boilerplate-cra' target='_blank' rel="noreferrer"></a>
        </P>
        <br />
        <P>
          Gatsby boilerplate project: <a href='https://github.com/CoinAlpha/hbui-boilerplate-gatsby' target='_blank' rel="noreferrer"></a>
        </P>
        <br />
        <P>
          These boilerplate projects have the HBUI Design System pre-installed and everything already set up.
          They contain 2 example pages and demonstrate the usage of typography, buttons and navigation.
        </P>
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default GettingStarted
