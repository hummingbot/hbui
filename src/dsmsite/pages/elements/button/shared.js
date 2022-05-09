import React from 'react'
import { ShortHero } from '../../../ui/elements/layout'
import { ItemsRow } from '../../../../../hbui/elements/layout'
import Chip from '../../../../../hbui/components/chip'

export const hero = (
  <ShortHero
    title="Button"
    subTitle="The Button element is used by the Button component. Use the Button element directly when no icon is necessary or for custom scenarios."
  />
)

export const navigation = (
  <ItemsRow style={{ display: 'flex' }}>
    <Chip end label="Variants" to="/elements/button" />
    <Chip end label="Sizes" to="/elements/button/large" />
    <Chip end label="Disabled" to="/elements/button/disabled" />
  </ItemsRow>
)
