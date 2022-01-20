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
  title: 'Design guidelines',
  subItems: guidelinesComponents,
}
const designTokens = {
  link: '/design-tokens',
  title: 'Design Tokens',
}
const code = {
  link: '/code',
  title: 'Code',
}
const elements = {
  link: '/elements',
  title: 'Elements',
  subItems: navigationElements,
}
const components = {
  link: '/components',
  title: 'Components',
  subItems: navigationComponents,
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
  code,
  elements,
  components,
  downloads,
  faq,
]
