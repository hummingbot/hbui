import React from 'react'
import { ShortHero } from '../../../ui/elements/layout'
import { ItemsRow } from '../../../../hb_ui/elements/layout'
import Chip from '../../../../hb_ui/components/chip'

export const hero = (
  <ShortHero
    title="Button"
    subTitle="The Button element is used by the Button component. Use the Button element directly when no icon is necessary or for custom scenarios."
  />
)

export const navigation = (
  <ItemsRow style={{ display: 'flex' }}>
    <Chip end label="Regular" to="/elements/button" />
    <Chip end label="Ghost" to="/elements/button/ghost" />
    <Chip end label="Large" to="/elements/button/large" />
    <Chip end label="Disabled" to="/elements/button/disabled" />
  </ItemsRow>
)
