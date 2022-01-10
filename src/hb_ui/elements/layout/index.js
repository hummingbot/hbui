import React from 'react'
import tw, { css, styled } from 'twin.macro'
import {
  phone,
  phone_max,
  phablet,
  phablet_max,
  tablet,
  tablet_min,
  tablet_max,
  desktop,
  desktop_min,
  desktop_max,
  hd,
  hd_min
} from '../../constants/media-queries'
import {
  greyscale_light_300
} from '../../constants/colors'

export const Section = styled.div(() => [
  css`
    // outline: 1px solid red;
    display: flex;
    flex-direction: column;
  `,
  tw`w-full`
])

export const Container = styled.div(() => [
  css`
    // outline: 1px solid blue;
    align-self: center;
  `,
  tw`w-[calc(100% - 40px)] md:w-11/12 xl:w-10/12 2xl:w-9/12`
])

export const ContainerRow = styled(Container)`
  display: flex;
`

export const PaddingBox = styled.div(() => [
  css`
    // outline: 1px solid yellow;
  `,
  tw`py-4 md:py-8 lg:py-12`
])

export const WhiteBox = styled.div({
  background: 'white',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)'
})

export const WhiteBoxRound = styled(WhiteBox)({
  borderRadius: '7px',
  [desktop_max]: { borderRadius: '6px' },
  [tablet_max]: { borderRadius: '5px' },
  [phablet_max]: { borderRadius: '4px' },
  [phone_max]: { borderRadius: '3px' }
})


export const DivHdMin = styled.div({ [desktop_max]: { display: 'none' } })
export const DivDesktopMin = styled.div({ [tablet_max]: { display: 'none' } })
export const DivTabletMin = styled.div({ [phablet_max]: { display: 'none' } })
export const DivPhabletMin = styled.div({ [phone_max]: { display: 'none' } })

export const DivDesktopMax = styled.div({ [hd_min]: { display: 'none' } })
export const DivPhabletMax = styled.div({ [tablet_min]: { display: 'none' } })
export const DivTabletMax = styled.div({ [desktop_min]: { display: 'none' } })

export const DivHdOnly = styled.div({
  [hd]: { display: 'block' },
  [desktop]: { display: 'none' },
  [tablet]: { display: 'none' },
  [phablet]: { display: 'none' },
  [phone]: { display: 'none' }
})
export const DivDesktopOnly = styled.div({
  [hd]: { display: 'none' },
  [desktop]: { display: 'block' },
  [tablet]: { display: 'none' },
  [phablet]: { display: 'none' },
  [phone]: { display: 'none' }
})
export const DivTabletOnly = styled.div({
  [hd]: { display: 'none' },
  [desktop]: { display: 'none' },
  [tablet]: { display: 'block' },
  [phablet]: { display: 'none' },
  [phone]: { display: 'none' }
})
export const DivPhabletOnly = styled.div({
  [hd]: { display: 'none' },
  [desktop]: { display: 'none' },
  [tablet]: { display: 'none' },
  [phablet]: { display: 'block' },
  [phone]: { display: 'none' }
})
export const DivPhoneOnly = styled.div({
  [hd]: { display: 'none' },
  [desktop]: { display: 'none' },
  [tablet]: { display: 'none' },
  [phablet]: { display: 'none' },
  [phone]: { display: 'block' }
})

export const Spacer = styled.div({
  height: '50px',
  [tablet_max]: { height: '40px' },
  [phablet_max]: { height: '30px' },
  [phone_max]: { height: '20px' }
})

export const SpacerSmall = styled.div({
  height: '25px',
  [tablet_max]: { height: '20px' },
  [phablet_max]: { height: '15px' },
  [phone_max]: { height: '10px' }
})

export const SpacerLarge = styled.div({
  height: '90px',
  [desktop_max]: { height: '80px' },
  [tablet_max]: { height: '70px' },
  [phablet_max]: { height: '65px' },
  [phone_max]: { height: '60px' }
})

export const MobileSpaceMaker = styled.div({
  width: '100%',
  height: '0',
  [tablet_max]: {
    height: '80px'
  }
})

export const Separator = styled.div(
  props => [
    css`
      height: 1px;
      width: 100%;
      opacity: 0.5;
      margin-top: 20px;
    `,
    tw`bg-quaternary dark:(bg-quaternary)`,
  ]
)
