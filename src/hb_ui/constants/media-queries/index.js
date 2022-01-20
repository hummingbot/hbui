// const { sm, md, lg, xl } = require('./breakpoints')

// import { sm, md, lg, xl } from './breakpoints'

const sm = 640
const md = 768
const lg = 1024
const xl = 1280

export const phone = `@media only screen and (min-width: 0px) and (max-width: ${sm})`
export const phablet = `@media only screen and (min-width: ${sm}) and (max-width: ${md})`
export const tablet = `@media only screen and (min-width: ${md}) and (max-width: ${lg})`
export const desktop = `@media only screen and (min-width: ${lg}) and (max-width: ${xl})`
export const hd = `@media only screen and (min-width: ${xl}) and (max-width: 1600px)`

export const phone_max = `@media only screen and (max-width: ${sm - 1})`
export const phablet_max = `@media only screen and (max-width: ${md - 1})`
export const tablet_max = `@media only screen and (max-width: ${lg - 1})`
export const desktop_max = `@media only screen and (max-width: ${xl - 1})`
export const hd_max = `@media only screen and (max-width: 2559px)`

export const phone_min = `@media only screen and (min-width: 0px)`
export const phablet_min = `@media only screen and (min-width: ${sm})`
export const tablet_min = `@media only screen and (min-width: ${md})`
export const desktop_min = `@media only screen and (min-width: ${lg})`
export const hd_min = `@media only screen and (min-width: ${xl})`
