/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import tw from 'twin.macro'
import React, { useState } from 'react'
import { H1, P } from '../../../hbui/elements/typography'
import { Separator } from '../../../hbui/elements/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import Hero from '../../../hbui/components/hero/Hero'
import {
  Callout,
  CalloutSuccess,
  CalloutInfo,
  CalloutDanger,
  CalloutWarning,
  CalloutTip,
  CalloutBug,
  CalloutNote,
} from '../../../hbui/components/callout'
import Layout from '../../components/layout'
import PropsTable from '../../../hbui/components/table/PropsTable'

const CalloutPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Callout</H1>
      <P>The Callout component serves to convey highlighted information content of different types.</P>
    </Hero>
    <MainContent>
      <br />
      <br />
      <Callout
        title="Default callout"
        text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
      />
      <br />
      <CodeBlock code={codeDefault} />
      <br />
      <br />
      <br />
      <br />
      <CalloutSuccess
        title="Success callout"
        text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
      />
      <br />
      <CodeBlock code={codeSuccess} />
      <br />
      <br />
      <br />
      <br />
      <CalloutInfo
        title="Info callout"
        text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
      />
      <br />
      <CodeBlock code={codeInfo} />
      <br />
      <br />
      <br />
      <br />
      <CalloutWarning
        title="Warning callout"
        text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
      />
      <br />
      <CodeBlock code={codeWarning} />
      <br />
      <br />
      <br />
      <br />
      <CalloutDanger
        title="Danger callout"
        text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
      />
      <br />
      <CodeBlock code={codeDanger} />
      <br />
      <br />
      <br />
      <br />
      <CalloutTip
        title="Tip callout"
        text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
      />
      <br />
      <CodeBlock code={codeTip} />
      <br />
      <br />
      <br />
      <br />
      <CalloutBug
        title="Bug callout"
        text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
      />
      <br />
      <CodeBlock code={codeBug} />
      <br />
      <br />
      <br />
      <br />
      <CalloutNote
        title="Note callout"
        text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
      />
      <br />
      <CodeBlock code={codeNote} />
      <br />
      <br />
      <PropsTable
        title='CAllout Props'
        items={[
          {
            propName: 'title',
            type: 'String',
            default: "' '",
            required: 'required',
            description: 'The title of the callout.'
          },
          {
            propName: 'text',
            type: 'String',
            default: "' '",
            required: 'required',
            description: 'The description of the callout.)'
          },
        ]}
      />
    </MainContent>
  </Layout>
)

export default CalloutPage

const codeDefault = String.raw`import { Callout } from '@hummingbot/hbui/components/callout'

<Callout
  title='Default callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeSuccess = String.raw`import { CalloutSuccess } from '@hummingbot/hbui/components/callout'

<CalloutSuccess
  title='Success callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeInfo = String.raw`import { CalloutInfo } from '@hummingbot/hbui/components/callout'

<CalloutInfo
  title='Info callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeWarning = String.raw`import { CalloutWarning } from '@hummingbot/hbui/components/callout'

<CalloutWarning
  title='Warning callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeDanger = String.raw`import { CalloutDanger } from '@hummingbot/hbui/components/callout'

<CalloutDanger
  title='Danger callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeTip = String.raw`import { CalloutTip } from '@hummingbot/hbui/components/callout'

<CalloutTip
  title='Tip callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeBug = String.raw`import { CalloutBug } from '@hummingbot/hbui/components/callout'

<CalloutBug
  title='Bug callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeNote = String.raw`import { CalloutNote } from '@hummingbot/hbui/components/callout'

<CalloutNote
  title='Note callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`
