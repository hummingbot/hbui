/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, P, Body, PSmall } from '../../../hbui/elements/typography'
import Modal from '../../../hbui/components/modal'
import {Button} from '../../../hbui/elements/buttons'
import {Separator} from '../../../hbui/elements/layout'
import Hero from '../../../hbui/components/hero/Hero'

const ModalPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Modal</H1>
      <P>Configurable modal component with keyboard control</P>
    </Hero>
    <MainContent>
      <br />
      <br />
      <P>Fully configurable modal component, with keyboard control. Press ESC or click outside the modal to close it.</P>
      <br />
      <P>Two buttons can be configured (one minimum) with optional button variant styles. Each button can have an optional callback function.</P>
      <br />
      <P>The modal also locks the scroll of background content.</P>
      <Separator />
      <br />
      <Body>Click to open modal</Body>
      <Modal
        contentProps={{
          title: 'Modal title',
          subtitle: 'Praesent commodo cursus magna.',
          content: (
            <P tw='leading-tight'>
              Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et.
            </P>
          ),
          closeLabel: 'Option A',
          closeLabelVariant: 'success',
          closeLabelCallback: () => console.log('Clicked option A'),
          closeLabelB: 'Option B',
          closeLabelBVariant: 'secondary',
          closeLabelBCallback: () => console.log('Clicked option B'),
        }}
      >
        <Button variant='success'>Open modal</Button>
      </Modal>
      <br />
      <br />
      <CodeBlock code={codeDefault} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default ModalPage

const codeDefault = String.raw`import Modal from '@hummingbot/hbui/components/modal'
import { P } from '@hummingbot/hbui/elements/typography'

<Modal
  contentProps={{
    title: 'Modal title',
    subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    content: (
      <P tw='leading-tight'>
        Your payment has been successfully submitted. We’ve sent you an
        email with all of the details of your order.
      </P>
    ),
    closeLabel: 'Option A',
    closeLabelVariant: 'success', // default - 'success'
    closeLabelCallback: () => console.log('Clicked option A'),
    closeLabelB: 'Option B',
    closeLabelBVariant: 'secondary', // default - 'secondary'
    closeLabelBCallback: () => console.log('Clicked option B'),
  }}
>
  <Button variant='info'>Open dialog</Button>
</Modal>`
