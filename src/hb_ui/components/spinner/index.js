import React from 'react'
import { keyframes } from '@emotion/react'
import { styled, theme } from 'twin.macro'

const Spinner = props => {
  const { color, radius, style, duration, strokeWidth, center } = props
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

  const styles = style || {}
  if (center) {
    styles.display = 'block'
    styles.textAlign = 'center'
  }

  const Path = getPathElement(color)

  return (
    <span style={styles}>
      <AnimatedSVG viewBox="0 0 42 42">
        <g fill="none" transform="translate(3 3)" strokeWidth="3">
          <circle
            tw="stroke-current text-grey-light-400 dark:text-grey-dark-300"
            cx="18"
            cy="18"
            r="18"
          />
          {Path}
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

const defaultPath = (
  <path
    tw="stroke-current text-black dark:text-white"
    d="M36 18c0-9.94-8.06-18-18-18"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)

const bluePath = (
  <path
    tw="stroke-current text-blue"
    d="M36 18c0-9.94-8.06-18-18-18"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)

const greenPath = (
  <path
    tw="stroke-current text-green"
    d="M36 18c0-9.94-8.06-18-18-18"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)

const redPath = (
  <path
    tw="stroke-current text-red"
    d="M36 18c0-9.94-8.06-18-18-18"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)

const orangePath = (
  <path
    tw="stroke-current text-orange"
    d="M36 18c0-9.94-8.06-18-18-18"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)

const getPathElement = color => {
  switch (color) {
    case 'green':
      return greenPath
    case 'blue':
      return bluePath
    case 'orange':
      return orangePath
    case 'red':
      return redPath
  }

  return defaultPath
}
