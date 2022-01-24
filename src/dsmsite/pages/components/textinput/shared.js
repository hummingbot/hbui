import React from 'react'
import { ShortHero } from '../../../ui/elements/layout'
import { ItemsRow } from '../../../../hb_ui/elements/layout'
import Chip from '../../../../hb_ui/components/chip'

export const hero = (
  <ShortHero
    title="TextInput"
    subTitle="The TextInput component extends the functionality of the TextInput element with additional labels."
  />
)

export const navigation = (
  <ItemsRow style={{ display: 'flex' }}>
    <Chip end label="Regular" to="/components/text-input" />
    <Chip end label="Custom label" to="/components/text-input/custom-label" />
    <Chip end label="Required" to="/components/text-input/required" />
    <Chip
      end
      label="Extended label"
      to="/components/text-input/extended-label"
    />
    <Chip
      end
      label="Prefix"
      to="/components/text-input/prefix"
    />
  </ItemsRow>
)
