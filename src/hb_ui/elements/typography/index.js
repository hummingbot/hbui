import tw, { css, styled, theme } from 'twin.macro'
import {
  phone_max,
  phablet_max,
  tablet_max,
  desktop_max,
} from '../../constants/media-queries'
import {
  black,
  green_primary,
  red,
  blue,
  orange,
} from '../../constants/colors'

const sharedTransforms = props => [
  tw`text-black dark:(text-white)`,
  tw`m-0 font-normal`,
  props.isSmall && tw`text-sm`,
  props.isUnderline && tw`underline`,
  props.isUppercase && tw`uppercase`,
  props.isItalic && tw`italic`,
  props.isLight && tw`font-light`,
  props.isMedium && tw`font-medium`,
  props.isBold && tw`font-bold`,
  props.isExtraBold && tw`font-extrabold`,
  props.isHeavy && tw`font-black`,
  props.isPulsing && tw`animate-pulse`,
  props.isCentered && tw`text-center`,
  props.noSelect && tw`select-none`,
  props.isWhite &&
    css`
      color: white;
    `,
  props.isBrandColor &&
    css`
      color: ${green_primary} !important;
    `,
  props.isRed &&
    css`
      color: ${red} !important;
    `,
  props.isBlue &&
    css`
      color: ${blue} !important;
    `,
  props.isOrange &&
    css`
      color: ${orange} !important;
    `,
  props.tightLineSpacing &&
    css`
      line-height: 120% !important;
    `,
  css`
    a {
      text-decoration: underline;
    }
  `,
]

export const PTiny = styled.p(
  {},
  props => [tw`text-xs`, tw`leading-tight`],
  sharedTransforms,
)

export const PSmall = styled.p(
  {},
  props => [tw`text-sm`, tw`leading-tight`],
  sharedTransforms,
)

export const P = styled.p(
  {},
  props => [tw`text-base md:text-lg md:leading-tight`, tw`leading-normal`],
  sharedTransforms,
)

export const Body = styled.p(
  {},
  props => [tw`pb-1 md:pb-8 text-lg md:text-xl`, tw`leading-normal`],
  sharedTransforms,
)

export const H6 = styled.h6(
  {},
  props => [tw`text-lg md:text-xl lg:text-2xl`, tw`leading-tight`],
  sharedTransforms,
)

export const H5 = styled.h5(
  {},
  props => [tw`text-xl md:text-2xl lg:text-3xl`, tw`leading-tight tracking-normal`],
  sharedTransforms,
)

export const H4 = styled.h4(
  {},
  props => [tw`text-2xl md:text-3xl lg:text-4xl`, tw`leading-tight tracking-normal`],
  sharedTransforms,
)

export const H3 = styled.h3(
  {},
  props => [tw`text-3xl md:text-4xl lg:text-5xl`, tw`leading-none tracking-tight`],
  sharedTransforms,
)

export const H2 = styled.h2(
  {},
  props => [tw`text-4xl md:text-5xl lg:text-6xl`, tw`leading-none tracking-tight`],
  sharedTransforms,
)

export const H1 = styled.h1(
  {},
  props => [tw`text-5xl md:text-6xl lg:text-7xl`, tw`leading-none tracking-tight`],
  sharedTransforms,
)

export const PrimaryColor = styled.span({
  color: green_primary,
})

export const Bold = styled.span({
  fontWeight: 'bold',
})

export const Red = styled.span({
  color: red,
})

export const Blue = styled.span({
  color: blue,
})

export const Green = styled.span({
  color: green_primary,
})

export const Orange = styled.span({
  color: orange,
})

export const LabelMicro = styled.p(
  {},
  props => [
    tw`text-xs`,
    tw`leading-none`,
    tw`text-dim dark:(text-dim)`,
    css`
      text-transform: uppercase;
    `,
  ],
  sharedTransforms,
)
