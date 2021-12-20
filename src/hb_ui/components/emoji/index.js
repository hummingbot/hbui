import React from 'react'
import PropTypes from 'prop-types'

Emoji.propTypes = {
  emoji: PropTypes.string,
  label: PropTypes.string
}

function Emoji({ children, label, style }) {
  return (
    <span role="img" aria-label={label || 'emoji'} className="tw-mx-0.5" style={{...style}}>
      {children}
    </span>
  )
}

export default Emoji
