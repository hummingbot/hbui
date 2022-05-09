import React from 'react'
import { ShortHero } from '../../../ui/elements/layout'
import { ItemsRow } from '../../../../../hbui/elements/layout'
import Chip from '../../../../../hbui/components/chip'

export const hero = (
  <ShortHero
    title="Layout (core)"
    subTitle="The building blocks for every page layout."
  />
)

export const navigation = (
  <ItemsRow style={{ display: 'flex' }}>
    <Chip end label="Single column" to="/elements/layout-core" />
    <Chip end label="Sidebar layout" to="/elements/layout-core/sidebar" />
  </ItemsRow>
)
