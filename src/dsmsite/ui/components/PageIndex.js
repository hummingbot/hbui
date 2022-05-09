import React from 'react'
import tw, { styled } from 'twin.macro'
import { PSmall, LabelTiny } from '../../../../hbui/elements/typography'

const PageIndex = ({ title, items }) => {
  return (
    <Root>
      <LabelTiny>{title}</LabelTiny>
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
