/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import {
  P,
  PNano,
  PTiny,
  PSmall,
  PLarge,
  PrimaryColor,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1,
  Label,
  LabelNano,
  LabelTiny,
  LabelSmall,
} from '../../../hbui/elements/typography'

const Typography = () => (
  <Layout>
    <MainContent>
      <br />
      <LabelTiny>The quick brown fox jumps over the lazy dog</LabelTiny>
      <br />
      <br />
      <LabelTiny>P element</LabelTiny>
      <br />
      <P>Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.</P>
      <P>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.</P>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui.</P>
      <P>Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.</P>
      <br />
      <br />
      <LabelTiny>Body element  (bigger P with margin)</LabelTiny>
      <br />
      <PLarge>Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.</PLarge>
      <PLarge>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.</PLarge>
      <PLarge>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui.</PLarge>
      <PLarge>Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.</PLarge>
      <br />
      <br />
      <PSmall>Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.</PSmall>
      <br />
      <br />
      <br />
      <br />
      <br />
      <H1>H1 element - Etiam habebis sem dicantur magna mollis euismod. Integer legentibus erat a ante historiarum dapibus.</H1>
      <br />
      <P>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.</P>
      <br />
      <br />
      <H2>H2 element - Etiam habebis sem dicantur magna mollis euismod. Integer legentibus erat a ante historiarum dapibus.</H2>
      <br />
      <P>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.</P>
      <br />
      <br />
      <H3>H3 element - Etiam habebis sem dicantur magna mollis euismod. Integer legentibus erat a ante historiarum dapibus.</H3>
      <br />
      <P>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.</P>
      <br />
      <br />
      <H4>H4 element - Etiam habebis sem dicantur magna mollis euismod. Integer legentibus erat a ante historiarum dapibus.</H4>
      <br />
      <P>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.</P>
      <br />
      <br />
      <H4>H5 element - Etiam habebis sem dicantur magna mollis euismod. Integer legentibus erat a ante historiarum dapibus.</H4>
      <br />
      <P>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.</P>
      <br />
      <br />
      <H6>H6 element - Etiam habebis sem dicantur magna mollis euismod. Integer legentibus erat a ante historiarum dapibus. Etiam habebis sem dicantur magna mollis euismod. Integer legentibus erat a ante historiarum dapibus.</H6>
      <br />
      <P>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.</P>
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default Typography

const codeLabel = String.raw`import { Label } from '@hummingbot/hbui/elements/typography'

<Label>sdfsfsd</Label>
`

const codeLabelSmall = String.raw`import { LabelSmall } from '@hummingbot/hbui/elements/typography'

<LabelSmall>sdfsfsd</LabelSmall>
`

const codeLabelNano = String.raw`import { LabelNano } from '@hummingbot/hbui/elements/typography'

<LabelNano>sdfsfsd</LabelNano>
`

const codeLabelTiny = String.raw`import { LabelTiny } from '@hummingbot/hbui/elements/typography'

<LabelTiny>sdfsfsd</LabelTiny>
`


const codeParagraph = String.raw`import { P } from '@hummingbot/hbui/elements/typography'

<P>The quick brown fox jumps over the lazy dog</P>
`
const codeParagraphSmall = String.raw`import { PSmall } from '@hummingbot/hbui/elements/typography'

<PSmall>The quick brown fox jumps over the lazy dog</PSmall>
`
const codeParagraphTiny = String.raw`import { PTiny } from '@hummingbot/hbui/elements/typography'

<PTiny>The quick brown fox jumps over the lazy dog</PTiny>
`
const codeParagraphNano = String.raw`import { PNano } from '@hummingbot/hbui/elements/typography'

<PNano>The quick brown fox jumps over the lazy dog</PNano>
`


const codeBody = String.raw`import { Body } from '@hummingbot/hbui/elements/typography'

<PLarge>The quick brown fox jumps over the lazy dog</PLarge>
`


const codeH6 = String.raw`import { H5 } from '@hummingbot/hbui/elements/typography'

<H5>The quick brown fox jumps over the lazy dog</H5>
`
const codeH5 = String.raw`import { H4 } from '@hummingbot/hbui/elements/typography'

<H4>The quick brown fox jumps over the lazy dog</H4>
`
const codeH4 = String.raw`import { H4 } from '@hummingbot/hbui/elements/typography'

<H4>The quick brown fox jumps over the lazy dog</H4>
`
const codeH3 = String.raw`import { H3 } from '@hummingbot/hbui/elements/typography'

<H3>The quick brown fox jumps over the lazy dog</H3>
`
const codeH2 = String.raw`import { H2 } from '@hummingbot/hbui/elements/typography'

<H2>The quick brown fox jumps over the lazy dog</H2>
`
const codeH1 = String.raw`import { H1 } from '@hummingbot/hbui/elements/typography'

<H1>The quick brown fox jumps over the lazy dog</H1>
`
