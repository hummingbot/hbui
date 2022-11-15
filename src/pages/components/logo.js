/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { Separator } from '../../../hbui/elements/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, H6, H3, H4, P, Bold } from '../../../hbui/elements/typography'
import Hero from '../../../hbui/components/hero/Hero'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import HummingbotLogo from '../../../hbui/assets/svgs/logos/HummingbotLogo'
import CodeGridComponent from '../../components/CodeGridComponent'

const HeroPage = () => (
  <Layout>
    <Hero tw='bg-window border border-b border-window'>
      <H3>Logo</H3>
      <P>Hummingbot logo variations</P>
    </Hero>
    <MainContent>
      <H4>Basic usage</H4>
      <br />
      <CodeBlock
        code={basicCodeBlock}
      />
      <br />
      <br />
      <P>There are 4 color variations and 5 default sizes.</P>
      <br />
      <Separator />
      <br />
      <H4>Sizes</H4>
      <Separator />
      <br />
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo size='tiny' />"}
        element={<HummingbotLogo size='tiny' />}
      />
      <br />
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo />"}
        element={<HummingbotLogo />}
      />
      <br />
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo size='medium' />"}
        element={<HummingbotLogo size='medium' />}
      />
      <br />
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo size='large' />"}
        element={<HummingbotLogo size='large' />}
      />
      <br />
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo size='huge' />"}
        element={<HummingbotLogo size='huge' />}
      />
      <br />
      <br />
      <H4>Colors</H4>
      <Separator />
      <br />
      <br />
      <H6>Classic Green (default)</H6>
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo />"}
        element={<HummingbotLogo />}
      />
      <br />
      <br />
      <H6>Terminal Green</H6>
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo \n  colorStyle='terminal'\n/>"}
        element={<HummingbotLogo colorStyle='terminal' />}
      />
      <br />
      <br />
      <H6>White on Black</H6>
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo \n  colorStyle='white-black'\n/>"}
        element={<HummingbotLogo colorStyle='white-black' />}
      />
      <br />
      <br />
      <H6>Black on White</H6>
      <br />
      <CodeGridComponent
        code={"<HummingbotLogo \n  colorStyle='black-white'\n/>"}
        element={
          <div tw='bg-white p-sm inline-flex'>
            <HummingbotLogo colorStyle='black-white' />
          </div>
        }
      />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default HeroPage

const basicCodeBlock = String.raw
`import HummingbotLogo from '@hummingbot/hbui/assets/svgs/logos/HummingbotLogo

<HummingbotLogo />`
