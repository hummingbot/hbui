import navigationComponents from './navigation_components'
import guidelinesComponents from './navigation_guidelines'
import navigationElements from './navigation_elements'

const home = {
  link: '/',
  title: 'Home',
}
const gettingStarted = {
  link: '/getting-started',
  title: 'Getting Started',
}
const guidelines = {
  link: '/guidelines',
  title: 'Guidelines',
  subItems: guidelinesComponents
}
const designTokens = {
  link: '/design-tokens',
  title: 'Design Tokens',
}
const elements = {
  link: '/elements',
  title: 'Elements',
  subItems: navigationElements
}
const components = {
  link: '/components',
  title: 'Components',
  subItems: navigationComponents
}
const downloads = {
  link: '/downloads',
  title: 'Downloads',
}
const faq = {
  link: '/faq',
  title: 'FAQ',
}

module.exports = [
  home,
  gettingStarted,
  guidelines,
  designTokens,
  elements,
  components,
  downloads,
  faq
]
