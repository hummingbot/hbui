/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { ShortHero, MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { Body, P } from '../../../hbui/elements/typography'
import { ExternalLinkButton as ExternalLinkButtonComponent } from '../../../hbui/components/buttons'
import Layout from '../../components/layout'

const ExternalLinkButton = () => (
  <Layout>
    <ShortHero
      title="External Link Button"
      subTitle="Button for external links"
    />
    <MainContent>
      <Body>External link Button with dark-mode ready icon (before)</Body>
      <P>This button includes an "external link" icon on the right side by default</P>
      <br />
      <ExternalLinkButtonComponent
        label="External Link Button"
      />
      <br />
      <CodeBlock code={codeWithIconBefore} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default ExternalLinkButton

const codeWithIconBefore = String.raw`import { ExternalLinkButton } from '@hummingbot/hbui/components/buttons'

<ExternalLinkButton
  label="External Link Button"
/>
`
