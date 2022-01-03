import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import {
  P,
  Body,
  PrimaryColor,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1,
  LabelMicro
} from '../../../../hb_ui/elements/typography'

function Typography() {
  return (
    <div>
      <ShortHero
        title='Typography'
      />
      <MainContent>
        <LabelMicro><PrimaryColor>Label Micro</PrimaryColor> The quick brown fox jumps over the lazy dog</LabelMicro>
        <br />
        <br />
        <P><PrimaryColor>Paragraph</PrimaryColor> The quick brown fox jumps over the lazy dog</P>
        <br />
        <br />
        <Body><PrimaryColor>Body</PrimaryColor> The quick brown fox jumps over the lazy dog</Body>
        <br />
        <br />
        <H6><PrimaryColor>H6</PrimaryColor> The quick brown fox jumps over the lazy dog</H6>
        <br />
        <br />
        <H5><PrimaryColor>H5</PrimaryColor> The quick brown fox jumps over the lazy dog</H5>
        <br />
        <br />
        <H4><PrimaryColor>H4</PrimaryColor> The quick brown fox jumps over the lazy dog</H4>
        <br />
        <br />
        <H3><PrimaryColor>H3</PrimaryColor> The quick brown fox jumps over the lazy dog</H3>
        <br />
        <br />
        <H2><PrimaryColor>H2</PrimaryColor> The quick brown fox jumps over the lazy dog</H2>
        <br />
        <br />
        <H1><PrimaryColor>H1</PrimaryColor> The quick brown fox jumps over the lazy dog</H1>
      </MainContent>
    </div>
  )
}

export default Typography