/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, PLarge, PSmall } from '../../../hbui/elements/typography'
import Modal from '../../../hbui/components/modal'
import {Button} from '../../../hbui/elements/buttons'
import {Separator} from '../../../hbui/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'
import PropsTable from '../../../hbui/components/table/PropsTable'

const ModalPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Modal</H1>
      <P>Configurable modal component with keyboard control</P>
    </Hero>
    <MainContent>
      <br />
      <br />
      <P>Content-agnostic: only shows the content you pass in.</P>
      <br />
      <P>Press ESC or click outside the modal to close it.</P>
      <br />
      <P>Locks the scroll of background content.</P>
      <br />
      <P>Can be triggered with or without the click of a button.</P>
      <br />
      <P>Multiple "options" (buttons) can be configured. Each 
      button can take an optional callback function.</P>
      <br />
      <P>If no options are passed to the Modal, it will automatically generate a single 
      "Close" option, that simply closes the Modal.</P>
      <br />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <PLarge>Example triggered with button, with two options: "Accept" and "Close".</PLarge>
      <br />
      <PLarge>Click to open modal:</PLarge>
      <br />
      <Modal
        title='Modal title'
        description='Description of the modal context or purpose'
        content={
          <P>
            Your application has been successfully submitted. Please review your 
            order and if all looks good, click "Accept" to proceed.
          </P>
        }
        options={[
          {
            label: "Cancel",
            variant: "secondary",
          },
          {
            label: "Accept",
            variant: "success",
            callBack: () => console.log('Clicked: Accept Option')
          }
        ]}
        clickElement={
          <Button variant='success'>Open modal</Button>
        }
      />
      <br />
      <br />
      <CodeBlock code={codeWithTwoOptions} />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <PLarge>Example triggered with button, without providing any button options: A "Close" button is automatically generated.</PLarge>
      <br />
      <PLarge>Click to open modal</PLarge>
      <br />
      <Modal
        title='Modal title'
        description='Description of the modal context or purpose'
        content={
          <P>
            Your application has been successfully submitted.
          </P>
        }
        clickElement={
          <Button variant='success'>Open modal</Button>
        }
      />
      <br />
      <br />
      <CodeBlock code={codeWithoutOptions} />
      <br />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <PLarge>Example triggered with code: Pass in "showOpen" and omit "clickElement".</PLarge>
      <br />
      <br />
      <CodeBlock code={codeWithoutClickElement} />
      <br />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <br />
      <PropsTable
        title='Modal Props'
        items={[
          {
            propName: 'showOpen',
            type: 'Boolean',
            default: "false",
            required: 'false',
            description: "The state of the Modal. Pass 'true' to show the modal without having to click a button"
          },
          {
            propName: 'dialogOnClose',
            type: 'React props',
            default: "() => {}",
            required: 'false',
            description: "The function to run when the Modal is closed. Usually used to set the 'showOpen' state to 'false'"
          },
          {
            propName: 'clickElement',
            type: 'JSX',
            default: "null",
            required: 'false',
            description: 'The React element to click to show the Modal - usually a button - used when you want to use a button to trigger the Modal'
          },
          {
            propName: 'title',
            type: 'String',
            default: "' '",
            required: 'true',
            description: 'Modal title'
          },
          {
            propName: 'description',
            type: 'String',
            default: "' '",
            required: 'false',
            description: 'Optional sentence explaining the Modal intent or purpose'
          },
          {
            propName: 'content',
            type: 'JSX',
            default: "null",
            required: 'true',
            description: 'The content for the modal. Without it, the Modal will have nothing to show except the title and subtitle.'
          },
          {
            propName: 'options',
            type: 'Array',
            default: "null",
            required: 'false',
            description: 'The options define the buttons the Modal will have. Every button will close the Modal but will also trigger a custom callBack is one is provided.'
          },
          {
            propName: 'overlayProps',
            type: 'React props',
            default: "null",
            required: 'false',
            description: "To use in case you want to pass extra props to the Modal overlay element. Eg. change the background color"
          },
          {
            propName: 'titleProps',
            type: 'React props',
            default: "null",
            required: 'false',
            description: "To use in case you want to pass extra props to the Modal title element. Eg. style it differently."
          },
          {
            propName: 'descriptionProps',
            type: 'React props',
            default: "null",
            required: 'false',
            description: "To use in case you want to pass extra props to the Modal description element. Eg. style it differently."
          },
        ]}
      />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default ModalPage

const codeWithTwoOptions = String.raw`import Modal from '@hummingbot/hbui/components/modal'
import { P } from '@hummingbot/hbui/elements/typography'
import { Button  } from '@hummingbot/hbui/elements/buttons'

<Modal
  title='Modal title'
  description='Description of the modal context or purpose'
  content={
    <P>
      Your application has been successfully submitted. Please review your 
      order and if all looks good, click "Accept" to proceed.
    </P>
  }
  options={[
    {
      label: "Cancel",
      variant: "secondary",
    },
    {
      label: "Accept",
      variant: "success",
      callBack: () => console.log('Clicked: Accept Option')
    }
  ]}
  clickElement={
    <Button variant='success'>Open modal</Button>
  }
/>`

const codeWithoutOptions = String.raw`import Modal from '@hummingbot/hbui/components/modal'
import { P } from '@hummingbot/hbui/elements/typography'
import { Button  } from '@hummingbot/hbui/elements/buttons'

<Modal
  title='Modal title'
  description='Description of the modal context or purpose'
  content={
    <P>
      Your application has been successfully submitted.
    </P>
  }
  clickElement={
    <Button variant='success'>Open modal</Button>
  }
/>`

const codeWithoutClickElement = String.raw`import Modal from '@hummingbot/hbui/components/modal'
import { P } from '@hummingbot/hbui/elements/typography'

<Modal
  showOpen={true}
  dialogOnClose={() => console.log('Modal closed')}
  title='Modal title'
  description='Description of the modal context or purpose'
  content={
    <P>
      Your application has been successfully submitted.
    </P>
  }
/>`
