import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body, P } from '../../../../../hbui/elements/typography'
import { ExternalLinkButton as ExternalLinkButtonComponent } from '../../../../../hbui/components/button'

function ExternalLinkButton() {
  return (
    <div>
      <ShortHero
        title="ExternalLinkButton"
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
    </div>
  )
}

export default ExternalLinkButton

const codeWithIconBefore = String.raw`import { ExternalLinkButton } from '@hummingbot/hbui/components/button'

<ExternalLinkButton
  label="External Link Button"
/>
`
