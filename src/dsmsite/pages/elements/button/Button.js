import React from 'react'
import { ShortHero, MainContent } from '../../../elements/layout'
import {
  Body
} from '../../../../hb_ui/elements/typography'
import {
  Button
} from '../../../../hb_ui/elements/buttons'

function ButtonElement() {
  return (
    <div>
      <ShortHero
        title='Button'
        subTitle='The Button element is used by the Button component'
      />
      <MainContent>
        <Body>Default states</Body>
        <br />
        <br />
        <Button>Default</Button>
        <br />
        <br />
        <Button isPrimary>Primary</Button>
        <br />
        <br />
        <Button isPrimaryGhost>Ghost</Button>
        <br />
        <br />
        <Button isInfo>Info</Button>
        <br />
        <br />
        <Button isWarning>Waning</Button>
        <br />
        <br />
        <Button isDanger>Danger</Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Body>Disabled states</Body>
        <br />
        <br />
        <Button isDisabled>Default (disabled)</Button>
        <br />
        <br />
        <Button isPrimary isDisabled>Primary (disabled)</Button>
        <br />
        <br />
        <Button isPrimaryGhost isDisabled>Ghost (disabled)</Button>
        <br />
        <br />
        <Button isInfo isDisabled>Info (disabled)</Button>
        <br />
        <br />
        <Button isWarning isDisabled>Waning (disabled)</Button>
        <br />
        <br />
        <Button isDanger isDisabled>Danger (disabled)</Button>
      </MainContent>
    </div>
  )
}

export default ButtonElement