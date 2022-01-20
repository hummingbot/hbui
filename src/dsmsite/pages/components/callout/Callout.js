import React, { useState } from 'react'
import { Body } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import Callout from '../../../../hb_ui/components/callout'
import CodeBlock from '../../../ui/components/CodeBlock'

function TextInputPage() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <ShortHero
        title="Callout"
        subTitle="The Callout component serves to convey highlighted information content of different types."
      />
      <MainContent>
        <Body>Import Callout component (adjust path):</Body>
        <CodeBlock code={codeImport} />
        <br />
        <Separator />
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
        <Callout
          type="success"
          title="Success callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeSuccess} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          type="info"
          title="Info callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeInfo} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          type="warning"
          title="Warning callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeWarning} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          type="danger"
          title="Danger callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeDanger} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          type="tip"
          title="Tip callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeTip} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          type="bug"
          title="Bug callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeBug} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          type="note"
          title="Note callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeNote} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default TextInputPage

const codeImport = String.raw`import Callout from '../hb_ui/components/callout'
`

const codeDefault = String.raw`<Callout
  title='Default callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeSuccess = String.raw`<Callout
  type='success'
  title='Success callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeInfo = String.raw`<Callout
  type='info'
  title='Info callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeWarning = String.raw`<Callout
  type='warning'
  title='Warning callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeDanger = String.raw`<Callout
  type='danger'
  title='Danger callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeTip = String.raw`<Callout
  type='tip'
  title='Tip callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeBug = String.raw`<Callout
  type='bug'
  title='Bug callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeNote = String.raw`<Callout
  type='note'
  title='Note callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`
