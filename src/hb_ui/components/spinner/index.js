import React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

const Spinner = (props) => {

  const { color, radius, style, duration, strokeWidth } = props

  const animationDuration = duration ? `${duration}ms` : '900ms'
  const strokeW = props.strokeWidth ? `${props.strokeWidth}px` : '3px'

  const AnimatedSVG = styled.svg({
    display: 'inline-block',
    width: `${!radius ? 40 : radius}${'px'}`,
    height: `${!radius ? 40 : radius}${'px'}`,
    animation: `${keyframes({
      '100%': { transform: `rotate(360deg)` },
    })} ${animationDuration} linear infinite`,
  })

  const Styles = {
    circle: {
      stroke: '#979797',
      strokeOpacity: '0.25'
    },
    segment: {
      stroke: !color ? '#979797' : color,
      strokeWidth: strokeW,
    }
  }

  return (
    <span style={style}>
      <AnimatedSVG viewBox="0 0 42 42">
        <g
          fill="none"
          transform="translate(3 3)"
          strokeWidth="3">
          <circle
            style={Styles.circle}
            cx="18"
            cy="18"
            r="18" />
          <path
            style={Styles.segment}
            d="M36 18c0-9.94-8.06-18-18-18"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
      </AnimatedSVG>
    </span>
  )
}

export default Spinner

export const SpinnerBlock = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  height: '20%',
})