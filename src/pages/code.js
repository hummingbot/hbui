/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { MainContent } from '../components/elements/layout'
import Hero from '../../hbui/components/hero/Hero'
import { H1, Body, P, H5, Bold } from '../../hbui/elements/typography'
import { Separator } from '../../hbui/elements/layout'
import { Section, Container } from '../../hbui/elements/layout'

const Code = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Code</H1>
      <P>The code foundations of the Hummingbot design system</P>
    </Hero>
    <MainContent>
      <H5>Overview</H5>
      <br />
      <P>
        The Hummingbot design system provides a ready-to-use code framework
        which makes the UI development quick and consistent.
      </P>
      <br />
      <P>
        To avoid re-inventing the wheel, the Hummingbot design system is built
        upon existing 3rd-party libraries to leverage the support of active
        communities that evolve independently and provide well-maintained
        documentation.
      </P>
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <H5>The three pillars of this framework:</H5>
      <br />
      <br />
      <TailwindLogo />
      <br />
      <P>
        <a href='https://tailwindcss.com/' target='_blank' rel="noreferrer"><Bold>Tailwind CSS</Bold></a> is a utility-first framework which generates
        a set of utility classes based on design tokens from our Design System created in Figma.
        This provides a reliable set of standards to ensure consistency across all Hummingbot
        projects with the added benefit of a large active community as well
        as a great documentation site.
      </P>
      <br />
      <br />
      <TwinMacroLogo />
      <br />
      <P>
        <a href='https://github.com/ben-rogerson/twin.macro' target='_blank' rel="noreferrer"><Bold>Twin.macro</Bold></a> allows us to use the generated utility classes inside
        JavaScript and ensures only the used classes are bundled with the final code.
      </P>
      <br />
      <br />
      <div style={{fontSize: '50px'}}>💅</div>
      <P>
        <a href='https://styled-components.com/' target='_blank' rel="noreferrer"><Bold>styled-components</Bold></a> is the most popular css-in-js library
        available, with a large community and a complete feature set.
      </P>
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default Code

function TailwindLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="247"
      height="31"
      fill="none"
      viewBox="0 0 247 31"
    >
      <path
        fill="#38BDF8"
        fillRule="evenodd"
        d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
        clipRule="evenodd"
      ></path>
      <path
        tw="fill-current text-primary"
        fillRule="evenodd"
        d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849H93.52v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.476 2.476 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878v.001zm29.053-17.849h4.094L137.8 26.961h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.476 2.476 0 012.478-2.463 2.476 2.476 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64v.001zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

function TwinMacroLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="35"
      fill="none"
      viewBox="0 0 100 35"
    >
      <path
        fill="url(#paint0_linear_508_14)"
        d="M31.839 11.667c0-6.222-3.351-10.111-10.054-11.667 3.351 2.333 4.608 5.056 3.77 8.167-.478 1.775-1.865 3.043-3.4 4.448-2.502 2.287-5.397 4.935-5.397 10.718 0 6.222 3.351 10.11 10.054 11.667-3.352-2.334-4.609-5.056-3.77-8.167.477-1.775 1.865-3.044 3.4-4.448 2.502-2.288 5.397-4.935 5.397-10.718z"
      ></path>
      <path
        fill="url(#paint1_linear_508_14)"
        d="M0 11.667C0 5.445 3.352 1.556 10.054 0c-3.351 2.333-4.608 5.056-3.77 8.167.478 1.775 1.865 3.043 3.4 4.448 2.502 2.287 5.397 4.935 5.397 10.718 0 6.222-3.351 10.11-10.054 11.667 3.352-2.334 4.609-5.056 3.77-8.167-.477-1.775-1.865-3.044-3.4-4.448C2.895 20.097 0 17.45 0 11.667z"
      ></path>
      <path
        tw="fill-current text-primary"
        d="M50.594 15.872h-3.948v7.6c0 2.027 1.337 1.995 3.948 1.868v3.072c-5.285.633-7.387-.823-7.387-4.94v-7.6h-2.929v-3.293h2.93V8.325l3.438-1.013v5.267h3.948v3.293zm21.324-3.293h3.63l-5 15.833h-3.374L63.863 17.74 60.52 28.412h-3.375l-5-15.833h3.63l3.089 10.925 3.343-10.925h3.28l3.31 10.925 3.121-10.925zm7.896-2.375c-1.21 0-2.197-1.014-2.197-2.185 0-1.204.987-2.185 2.197-2.185s2.197.981 2.197 2.185c0 1.171-.987 2.185-2.197 2.185zm-1.72 18.208V12.579h3.44v15.833h-3.44zm15.793-16.245c3.566 0 6.113 2.406 6.113 6.523v9.722H96.56v-9.374c0-2.406-1.4-3.673-3.566-3.673-2.26 0-4.043 1.33-4.043 4.56v8.487h-3.439V12.579h3.439v2.026c1.05-1.646 2.77-2.438 4.935-2.438z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_508_14"
          x1="29.5"
          x2="19"
          y1="7.5"
          y2="26.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C82AF6"></stop>
          <stop offset="1" stopColor="#3F32F5"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_508_14"
          x1="2.339"
          x2="12.839"
          y1="7.5"
          y2="26.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C82AF6"></stop>
          <stop offset="1" stopColor="#3F32F5"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
