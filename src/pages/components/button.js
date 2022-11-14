/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { ShortHero, MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { Body } from '../../../hbui/elements/typography'
import { Button as ButtonComponent } from '../../../hbui/components/button'
import DummyIcon from '../../../hbui/assets/svgs/16x16/DummyIcon'
import PlayButton from '../../../hbui/assets/svgs/16x16/PlayButton'
// import MenuDropdown from '../../../hbui/components/menudropdown'
import Layout from '../../components/layout'

const Button = () => (
  <Layout>
    <ShortHero
      title="Button"
      subTitle="Component - To be used together with icons"
    />
    <MainContent>
      <Body>Button with dark-mode ready icon (before)</Body>
      <ButtonComponent
        isSecondary
        label="Button"
        iconBefore={<PlayButton />}
      />
      <br />
      <CodeBlock code={codeWithIconBefore} />
      <br />
      <br />
      <Body>Button with dark-mode ready icon (after)</Body>
      <ButtonComponent
        isSecondary
        label="Button"
        iconAfter={<PlayButton />}
      />
      <br />
      <CodeBlock code={codeWithIconAfter} />
      {/*<br />*/}
      {/*<br />*/}
      {/*<Body>Button with dark-mode ready icon (before and after)</Body>*/}
      {/*<ButtonComponent
        isSecondary
        label="Button"
        iconBefore={<PlayButton />}
        iconAfter={<MenuDropdown links={[]} />}
      />*/}
      {/*<br />*/}
      {/*<CodeBlock code={codeWithIconBeforeAndAfter} />*/}
      <br />
      <br />
      <Body>Button with "success" state and custom icon color</Body>
      <ButtonComponent
        isSuccess
        label="Button"
        iconBefore={<DummyIcon />}
        iconColor="white"
      />
      <br />
      <CodeBlock code={codeWithCustomIconColor} />
    </MainContent>
  </Layout>
)

export default Button

const codeWithIconBefore = String.raw`import { Button } from '@hummingbot/hbui/components/button'
import PlayButton from '@hummingbot/hbui/svgs/16x16/PlayButton'

<Button
  isSecondary
  label="Button"
  iconBefore={<PlayButton />}
/>
`

const codeWithIconAfter = String.raw`import { Button } from '@hummingbot/hbui/components/button'
import PlayButton from '@hummingbot/hbui/svgs/16x16/PlayButton'

<Button
  isSecondary
  label="Button"
  iconAfter={<PlayButton />}
/>
`

const codeWithIconBeforeAndAfter = String.raw`import { Button } from '@hummingbot/hbui/components/button'
import PlayButton from '@hummingbot/hbui/svgs/16x16/PlayButton'
import MenuDropdown from '@hummingbot/hbui/components/menudropdown'

<Button
  isSecondary
  label="Button"
  iconBefore={<PlayButton />}
  iconAfter={<MenuDropdown />}
/>
`

const codeWithCustomIconColor = String.raw`import { Button } from '@hummingbot/hbui/components/button'
import { DummyIcon } from '@hummingbot/hbui/svgs/16x16/DummyIcon'

<Button
  isSuccess
  label="Button"
  iconBefore={<DummyIcon />}
  iconColor="white"
/>
`
