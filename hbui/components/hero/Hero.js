import React from 'react'
import tw from 'twin.macro'
import { Section, Container} from '@hummingbot/hbui/elements/layout'

const HeroBlock = ({ children, containerVariant='large', ...props }) => {
  return (
    <Section {...props} tw='h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]'>
      <Container variant={containerVariant} tw='flex h-full flex-col justify-center'>
        {children}
      </Container>
    </Section>
  )
}

export default HeroBlock