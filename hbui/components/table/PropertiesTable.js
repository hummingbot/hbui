/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { H6, P } from '../../../hbui/elements/typography'

const PropsTableRowElement = styled.span(() => [
  tw`grid grid-cols-12 gap-4`,
])

export function PropertiesTable({title, children}) {
  return (
    <div>
      <H6>{title || 'Parameters'}</H6>
      <br />
      <PropsTableRowElement tw='pb-2 mb-8 border-b border-green dark:border-terminal'>
        <P isBold tw='col-span-3'>Prop Name</P>
        <P isBold tw='col-span-2'>Type</P>
        <P isBold tw='col-span-2'>Required</P>
        <P isBold tw='col-span-5'>Description</P>
      </PropsTableRowElement>
      {children}
    </div>
  );
}

export function PropertiesTableRow({propName, type, required, description}) {
  return (
    <div>
      <PropsTableRowElement tw='mb-4'>
        <P isBold tw='col-span-3'>{propName}</P>
        <P tw='col-span-2'>{type}</P>
        <P tw='col-span-2'>{required}</P>
        <P tw='col-span-5'>{description}</P>
      </PropsTableRowElement>
    </div>
  );
}
