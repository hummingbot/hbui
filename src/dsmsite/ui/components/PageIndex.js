import React from 'react'
import tw, { styled } from 'twin.macro'
import { PSmall, LabelMicro } from '../../../hb_ui/elements/typography'

const PageIndex = ({ title, items }) => {
  return (
    <Root>
      <LabelMicro>{title}</LabelMicro>
      <br />
      {items.map(item => (
        <a href={`#${item.id}`} key={item.id}>
          <PSmall className="index-item">{item.label}</PSmall>
        </a>
      ))}
    </Root>
  )
}

export default PageIndex

const Root = styled.div({
  paddingLeft: '20px',
  marginLeft: '20px',
  '& .index-item': {
    marginBottom: '10px',
  },
})
