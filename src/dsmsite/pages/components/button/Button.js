import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from '../../../../hb_ui/elements/typography'
import { Button as ButtonComponent } from '../../../../hb_ui/components/button'
import DummyIcon from '../../../../ui_svgs/16x16/DummyIcon'

function Button() {
  return (
    <div>
      <ShortHero
        title='Button'
        subTitle='Button Component - To be used together with icons'
      />
      <MainContent>
        <Body>Button with icon before</Body>
        <ButtonComponent
          label='Button'
          iconBefore={<DummyIcon />}
        />
        <br />
        <CodeBlock code="<ButtonComponent label='Button' iconBefore={<DummyIcon />} />" />
        <br />
        <br />
        <Body>Button with icon after</Body>
        <ButtonComponent
          label='Button'
          iconAfter={<DummyIcon />}
        />
        <br />
        <CodeBlock code="<ButtonComponent label='Button' iconAfter={<DummyIcon />} />" />
        <br />
        <br />
        <Body>Button with custom icon color</Body>
        <ButtonComponent
          label='Button'
          iconBefore={<DummyIcon />}
          iconColor='#ff0000'
        />
        <br />
        <CodeBlock code="<ButtonComponent label='Button' iconBefore={<DummyIcon />} iconColor='#ff0000' />" />
      </MainContent>
    </div>
  )
}

export default Button
