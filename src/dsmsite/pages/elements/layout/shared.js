import React from 'react'
import { ShortHero } from '../../../ui/elements/layout'
import { ItemsRow } from '../../../../hb_ui/elements/layout'
import Chip from '../../../../hb_ui/components/chip'

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
