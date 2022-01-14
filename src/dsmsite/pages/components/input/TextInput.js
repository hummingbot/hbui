import React, { useState } from 'react'
import { P } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import TextInput from '../../../../hb_ui/components/input/TextInput'
import CodeBlock from '../../../ui/components/CodeBlock'

function TextInputPage() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <ShortHero
        title='TextInput'
        subTitle='The TextInput component extends the funcitonality of the TextInput element with additional labels.'
      />
      <MainContent>
        <P>Default</P>
        <br />
        <TextInput
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <br />
        <P>Custom top label</P>
        <br />
        <TextInput
          customTopLabel='Custom Top Label'
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeCustomTopLabel} />
        <br />
        <br />
        <P>Valid</P>
        <br />
        <TextInput
          isValid
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeValid} />
        <br />
        <br />
        <P>Warning</P>
        <br />
        <TextInput
          isWarning
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeWarning} />
        <br />
        <br />
        <P>Error</P>
        <br />
        <TextInput
          isInvalid
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeInvalid} />
        <br />
        <br />
        <P>Mandatory</P>
        <br />
        <TextInput
          required
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeRequired} />
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <P>Extended label: Default</P>
        <br />
        <TextInput
          bottomLabel='Bottom Label'
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeDefaultExtendedLabel} />
        <br />
        <br />
        <P>Extended label: Valid</P>
        <br />
        <TextInput
          isValid
          bottomLabel='Bottom Label'
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeValidExtendedLabel} />
        <br />
        <br />
        <P>Extended label: Warning</P>
        <br />
        <TextInput
          isWarning
          bottomLabel='Bottom Label'
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeWarningExtendedLabel} />
        <br />
        <br />
        <P>Extended label: Invalid</P>
        <br />
        <TextInput
          isInvalid
          bottomLabel='Bottom Label'
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeInvalidExtendedLabel} />
        <br />
        <br />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default TextInputPage

const codeDefault = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;

const codeCustomTopLabel = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  customTopLabel='Custom Top Label'
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;

const codeValid = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isValid
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;

const codeWarning = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isWarning
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;

const codeInvalid = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isInvalid
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;

const codeRequired = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  required
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;







const codeDefaultExtendedLabel = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;

const codeValidExtendedLabel = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isValid
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;

const codeWarningExtendedLabel = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isWarning
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;

const codeInvalidExtendedLabel = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  isInvalid
  placeholder='Placeholder Text'
  bottomLabel='Bottom Label'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;
