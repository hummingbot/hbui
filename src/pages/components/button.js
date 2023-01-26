/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, PLarge } from '../../../hbui/elements/typography'
import { Button as ButtonComponent } from '../../../hbui/components/buttons'
import DummyIcon from '../../../hbui/assets/svgs/16x16/DummyIcon'
import Play from '../../../hbui/assets/svgs/16x16/Play'
import MenuDropdown from '../../../hbui/components/menudropdown'
import Layout from '../../components/layout'
import Hero from '../../../hbui/components/hero/Hero'
import { Link } from 'gatsby'
import PropsTable from '../../../hbui/components/table/PropsTable'

const Button = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Button</H1>
      <P>Button component - to be used together with icons</P>
    </Hero>
    <MainContent>
      <PLarge>Button with loading state</PLarge>
      <br />
      <ButtonComponent
        loading={true}
        variant='secondary'
        label="Loading..."
      />
      <br />
      <CodeBlock code={codeWithLoading} />
      <br />
      <br />
      <PLarge>Button with dark-mode ready icon (before)</PLarge>
      <br />
      <ButtonComponent
        variant='secondary'
        label="Button"
        iconBefore={<Play tw='fill-current' />}
      />
      <br />
      <CodeBlock code={codeWithIconBefore} />
      <br />
      <br />
      <PLarge>Button with dark-mode ready icon (after)</PLarge>
      <br />
      <ButtonComponent
        variant='secondary'
        label="Button"
        iconAfter={<Play tw='fill-current' />}
      />
      <br />
      <CodeBlock code={codeWithIconAfter} />
      <br />
      <br />
      <PLarge>Button with dark-mode ready icon (before and after)</PLarge>
      <br />
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
      <PLarge>Button with "success" variant and custom icon color</PLarge>
      <br />
      <ButtonComponent
        variant='success'
        label="Button"
        iconBefore={<DummyIcon />}
        iconColor="white"
      />
      <br />
      <CodeBlock code={codeWithCustomIconColor} />
      <br />
      <br />
      <PropsTable
        title='Button Props'
        items={[
          {
            propName: 'label',
            type: 'String',
            default: "' '",
            required: 'required',
            description: 'The label of the button.'
          },
          {
            propName: 'variant',
            type: 'String',
            default: "default",
            required: 'optional',
            description: 'The variant identifies the type of the Button (success, info, danger etc.)'
          },
          {
            propName: 'iconBefore',
            type: 'SVG JSX',
            default: "null",
            required: 'optional',
            description: 'Optional icon to show before the label'
          },
          {
            propName: 'iconAfter',
            type: 'SVG JSX',
            default: "null",
            required: 'optional',
            description: 'Optional icon to show after the label'
          },
          {
            propName: 'iconColor',
            type: 'HEX String',
            default: "null",
            required: 'optional',
            description: "If iconBefore or iconAfter is passed, this color will be applied to it's fill."
          },
        ]}
      />
    </MainContent>
  </Layout>
)

export default Button

const codeWithLoading = String.raw`import { Button } from '@hummingbot/hbui/components/buttons'

<Button
  variant='secondary'
  loading={true}
  label="Loading..."
/>`

const codeWithIconBefore = String.raw`import { Button } from '@hummingbot/hbui/components/buttons'
import Play from '@hummingbot/hbui/svgs/16x16/Play'

<Button
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
