import React from 'react'
import { Body } from '../../../../hb_ui/elements/typography'
import { ShortHero, MainContent } from '../../../elements/layout'
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
        <Body>Icon before</Body>
        <ButtonComponent
          label='Button'
          iconBefore={<DummyIcon />}
        />
        <br />
        <br />
        <Body>Icon after</Body>
        <ButtonComponent
          label='Button'
          iconAfter={<DummyIcon />}
        />
        <br />
        <br />
        <Body>Custom icon color</Body>
        <ButtonComponent
          label='Button'
          iconBefore={<DummyIcon />}
          iconColor='#ff0000'
        />
      </MainContent>
    </div>
  )
}

export default Button
