import tw, { css, styled, theme } from 'twin.macro'
import {
  phone_max,
  phablet_max,
  tablet_max,
  desktop_max,
} from '../../constants/media-queries'
import {
  black,
  primary,
} from '../../constants/colors'

export const textStyle = {
  fontFamily: 'Satoshi, sans-serif',
  margin: '0',
  color: black,
  fontWeight: '400',
  '& a': {
    color: primary,
    textDecoration: 'underline',
  },
}

const textColor = tw`text-black dark:(text-white)`

const sharedTransforms = props => [
  props.isSmall && tw`text-sm`,
  props.isUnderline && tw`underline`,
  props.isUppercase && tw`uppercase`,
  props.isItalic && tw`italic`,
  props.isLight && tw`font-light`,
  props.isBold && tw`font-bold`,
  props.isMedium && tw`font-medium`,
  props.isPulsing && tw`animate-pulse`,
  props.isCentered && tw`text-center`,
  props.noSelect && tw`select-none`,
  props.isWhite && css`color: white`,
  // props.colorPrimary && css`color: ${primary};`,
]

export const P = styled.p({
    ...textStyle,
  },
  props => [
    tw`text-lg`,
    tw`leading-snug`,
    tw`pb-1`,
    textColor
  ],
  sharedTransforms
)

export const H6 = styled.h6({
    ...textStyle,
  },
  props => [
    tw`text-xl`,
    tw`leading-snug`,
    textColor
  ],
  sharedTransforms
)

export const H5 = styled.h5({
    ...textStyle,
  },
  props => [
    tw`text-2xl`,
    tw`leading-tight`,
    textColor
  ],
  sharedTransforms
)

export const H4 = styled.h4({
    ...textStyle,
  },
  props => [
    tw`text-3xl`,
    tw`leading-tight`,
    textColor
  ],
  sharedTransforms
)

export const H3 = styled.h3({
    ...textStyle,
  },
  props => [
    tw`text-4xl`,
    tw`leading-none`,
    textColor
  ],
  sharedTransforms
)

export const H2 = styled.h2({
    ...textStyle,
  },
  props => [
    tw`text-5xl`,
    tw`leading-none`,
    textColor
  ],
  sharedTransforms
)

export const H1 = styled.h1({
    ...textStyle,
  },
  props => [
    tw`text-6xl`,
    tw`leading-none`,
    textColor
  ],
  sharedTransforms
)

export const PrimaryColor = styled.span({
  color: primary
})
