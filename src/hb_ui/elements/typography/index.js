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
} from '../../constants/colors'

export const textStyle = {
  fontFamily: 'Satoshi, sans-serif',
  margin: '0',
  // color: black,
  // fontWeight: '400',
  '& a': {
    color: green_primary,
    textDecoration: 'underline',
  },
}

// const textColor = 

const sharedTransforms = props => [
  tw`text-black dark:(text-white)`,
  tw`m-0 font-normal`,
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
  props.tightLineSpacing && css`line-height: 120% !important`,
]

export const PSmall = styled.p({},
  props => [
    tw`text-sm`,
    tw`leading-tight`
  ],
  sharedTransforms
)

export const P = styled.p({},
  props => [
    tw`text-base md:text-lg md:leading-tight`,
    tw`leading-tight`
  ],
  sharedTransforms
)

export const Body = styled.p({},
  props => [
    tw`pb-1 md:pb-8 text-lg md:text-xl`,
    tw`leading-relaxed`
  ],
  sharedTransforms
)

export const H6 = styled.h6({},
  props => [
    tw`text-lg md:text-xl lg:text-2xl`,
    tw`leading-snug`
  ],
  sharedTransforms
)

export const H5 = styled.h5({},
  props => [
    tw`text-xl md:text-2xl lg:text-3xl`,
    tw`leading-tight`
  ],
  sharedTransforms
)

export const H4 = styled.h4({},
  props => [
    tw`text-2xl md:text-3xl lg:text-4xl`,
    tw`leading-tight`
  ],
  sharedTransforms
)

export const H3 = styled.h3({},
  props => [
    tw`text-3xl md:text-4xl lg:text-5xl`,
    tw`leading-none`
  ],
  sharedTransforms
)

export const H2 = styled.h2({},
  props => [
    tw`text-4xl md:text-5xl lg:text-6xl`,
    tw`leading-none`
  ],
  sharedTransforms
)

export const H1 = styled.h1({},
  props => [
    tw`text-5xl md:text-6xl lg:text-7xl`,
    tw`leading-none`
  ],
  sharedTransforms
)

export const PrimaryColor = styled.span({
  color: green_primary
})

export const Bold = styled.span({
  fontWeight: 'bold'
})

export const LabelMicro = styled.p({},
  props => [
    tw`text-xs`,
    tw`leading-none`,
    tw`text-dim dark:(text-dim)`,
    css`
      text-transform: uppercase;
    `,
  ],
  sharedTransforms
)
