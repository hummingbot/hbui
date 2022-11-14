/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import NavBar from '../../../hbui/components/navigation/NavBar'
import { Link } from 'gatsby'
import CustomLogo from './CustomLogo'

const userData = null
const siteNameA = 'HBUI'
const siteNameB = 'Gatsby Boilerplate'
const linksLeft = null
const linksRight = [
  { url: "/", label: "Home" },
  { url: "/instructions", label: "Instructions" },
]
const linkCTA = {
  label: 'CTA',
  url: '/instructions',
  external: false,
  buttonVariant: 'success',
}

function Navigation() {
  return (
    <NavBar
      linkClass={Link}
      showThemeToggle={true}
      siteNameA={siteNameA}
      siteNameB={siteNameB}
      userData={userData}
      linksLeft={linksLeft}
      linksRight={linksRight}
      linkCTA={linkCTA}
      position='relative'
      bgColor='transparent'
      containerVariant='short'
    />
  )
}

export default Navigation
