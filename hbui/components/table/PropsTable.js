/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { H6, P } from '../../../hbui/elements/typography'

const PropsTableRowElement = styled.span(() => [
  tw`grid grid-cols-12 gap-4`,
])

const defaultStyle = [tw`col-span-4`]
const skip1ColumnsStyle = [tw`col-span-6`]
const skip2ColumnsStyle = [tw`col-span-8`]
const skip3ColumnsStyle = [tw`col-span-10`]

const lastPVariants = {
  default: defaultStyle,
  skip1Columns: skip1ColumnsStyle,
  skip2Columns: skip2ColumnsStyle,
  skip3Columns: skip3ColumnsStyle,
}

const LastP = styled(P)(() => [
  ({ variant = 'default' }) => lastPVariants[variant]
])

const getLastPVariant = (skipColumn2, skipColumn3, skipColumn4) => {
  let skipColumnsNum = 0
  if (skipColumn2) skipColumnsNum++
  if (skipColumn3) skipColumnsNum++
  if (skipColumn4) skipColumnsNum++
    console.log('skipColumnsNum', skipColumnsNum)
  if (skipColumnsNum === 0) return 'default'
  
  return `skip${skipColumnsNum}Columns`
}
function PropsTable({
  title="Props",
  items=null,
  omitTitle=false,
  col1Name="Prop Name",
  col2Name="Type",
  col3Name="Default",
  col4Name="Required",
  col5Name="Description",
  param1Name="propName",
  param2Name="type",
  param3Name="default",
  param4Name="required",
  param5Name="description",
  skipColumn2=false,
  skipColumn3=false,
  skipColumn4=false
}) {
  const lastPVariant = getLastPVariant(skipColumn2, skipColumn3, skipColumn4)
  return (
    <div>
      {!omitTitle && <H6>{title || 'Props'}</H6>}
      {!omitTitle && <br />}
      <PropsTableRowElement tw='pb-2 mb-8 border-b border-green dark:border-terminal'>
        <P isBold tw='col-span-2'>{col1Name}</P>
        {!skipColumn2 && <P isBold tw='col-span-2'>{col2Name}</P>}
        {!skipColumn3 && <P isBold tw='col-span-2'>{col3Name}</P>}
        {!skipColumn4 && <P isBold tw='col-span-2'>{col4Name}</P>}
        <LastP isBold variant={lastPVariant}>{col5Name}</LastP>
      </PropsTableRowElement>
      {items.map((item, index) => 
        <PropsTableRowElement tw='mb-4' key={index}>
          <P tw='col-span-2' isBold>{item[param1Name]}</P>
          {!skipColumn2 && <P tw='col-span-2'>{item[param2Name]}</P>}
          {!skipColumn3 && <P tw='col-span-2'>{item[param3Name]}</P>}
          {!skipColumn4 && <P tw='col-span-2'>{item[param4Name]}</P>}
          <LastP variant={lastPVariant}>{item[param5Name]}</LastP>
        </PropsTableRowElement>
      )}
    </div>
  );
}

export default PropsTable
