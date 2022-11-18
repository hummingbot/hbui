/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, Body } from '../../../hbui/elements/typography'
import { Button as ButtonComponent } from '../../../hbui/components/buttons'
import DummyIcon from '../../../hbui/assets/svgs/16x16/DummyIcon'
import Play from '../../../hbui/assets/svgs/16x16/Play'
import MenuDropdown from '../../../hbui/components/menudropdown'
import Layout from '../../components/layout'
import Hero from '../../../hbui/components/hero/Hero'
import { Link } from 'gatsby'

const Button = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Button</H1>
      <P>Component - To be used together with icons</P>
    </Hero>
    <MainContent>
      <Body>Button with dark-mode ready icon (before)</Body>
      <ButtonComponent
        variant='secondary'
        label="Button"
        iconBefore={<Play tw='fill-current' />}
      />
      <br />
      <CodeBlock code={codeWithIconBefore} />
      <br />
      <br />
      <Body>Button with dark-mode ready icon (after)</Body>
      <ButtonComponent
        variant='secondary'
        label="Button"
        iconAfter={<Play tw='fill-current' />}
      />
      <br />
      <CodeBlock code={codeWithIconAfter} />
      <br />
      <br />
      <Body>Button with dark-mode ready icon (before and after)</Body>
      <ButtonComponent
        variant='secondary'
        label="Button"
        iconBefore={<Play tw='fill-current' />}
        iconAfter={<MenuDropdown linkClass={Link} links={[]} />}
      />
      <br />
      <CodeBlock code={codeWithIconBeforeAndAfter} />
      <br />
      <br />
      <Body>Button with "success" state and custom icon color</Body>
      <ButtonComponent
        variant='success'
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

const codeWithIconBefore = String.raw`import { Button } from '@hummingbot/hbui/components/buttons'
import Play from '@hummingbot/hbui/svgs/16x16/Play'

<Button
  variant='secondary'
  label="Button"
  iconBefore={<Play tw='fill-current />}
/>`

const codeWithIconAfter = String.raw`import { Button } from '@hummingbot/hbui/components/buttons'
import Play from '@hummingbot/hbui/svgs/16x16/Play'

<Button
  variant='secondary'
  label="Button"
  iconAfter={<Play tw='fill-current />}
/>`

const codeWithIconBeforeAndAfter = String.raw`import { Button } from '@hummingbot/hbui/components/buttons'
import Play from '@hummingbot/hbui/svgs/16x16/Play'
import MenuDropdown from '@hummingbot/hbui/components/menudropdown'

<Button
  variant='secondary'
  label="Button"
  iconBefore={<Play tw='fill-current />}
  iconAfter={<MenuDropdown />}
/>`

const codeWithCustomIconColor = String.raw`import { Button } from '@hummingbot/hbui/components/buttons'
import { DummyIcon } from '@hummingbot/hbui/svgs/16x16/DummyIcon'

<Button
  variant='success'
  label="Button"
  iconBefore={<DummyIcon />}
  iconColor="white"
/>`
