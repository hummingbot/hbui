import React from 'react'
import { PageRoot, ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { H4, P } from '../../../../../hbui/elements/typography'
import { CardA } from '../../../../../hbui/components/cards/CardA'
import { CardB } from '../../../../../hbui/components/cards/CardB'
import { CardC } from '../../../../../hbui/components/cards/CardC'
import { Link } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function CardsPage() {
  return (
    <PageRoot>
      <ShortHero
        title="Cards"
        subTitle="Collection of Card components"
      />
      <MainContent>
        <H4>CardA</H4>
        <P>Most standard Card style</P>
        <br />
        <div tw='w-full flex content-between'>
          <CardA
            tw='mr-xs'
            imgSrc="https://picsum.photos/id/1/328/200"
            imgAlt="Test"
            headerText="Inner Site Link"
            descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
            linkURL="/"
            linkClass={Link}
            external={false}
          />
          <CardA
            tw='mr-xs'
            imgSrc="https://picsum.photos/id/1/328/200"
            imgAlt="Test"
            headerText="External Link"
            descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
            linkURL="https://www.google.com"
            external={true}
          />
          <CardA
            headerText="No Image"
            descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
            linkURL="https://www.google.com"
            external={true}
          />
        </div>
        <br />
        <CodeBlock code={codeCardA} />
        <br />
        <br />
        <H4>CardB</H4>
        <P>Using an icon instead of an image</P>
        <br />
        <div tw='w-full flex content-between'>
          <CardB
            tw='mr-xs'
            iconElement={<IconA/>}
            headerText="Icon Card 1"
            descriptionText="Inner site link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus."
            linkURL="/"
            linkClass={Link}
            external={false}
          />
          <CardB
            tw='mr-xs'
            iconElement={<IconB/>}
            headerText="Icon Card 2"
            descriptionText="With external link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
            linkURL="https://www.google.com"
            external={true}
          />
          <CardB
            headerText="No Icon"
            descriptionText="With external link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
            linkURL="https://www.google.com"
            external={true}
          />
        </div>
        <br />
        <CodeBlock code={codeCardB} />
        <br />
        <br />
        <H4>CardC</H4>
        <P>Bar style card</P>
        <br />
        <div tw='grid grid-cols-1 gap-xs lg:grid-cols-2 w-full content-between'>
          <CardC
            iconElement={<IconB/>}
            headerText="External Link Card 1"
            descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
            linkURL="https://www.google.com"
            linkClass={Link}
            external={true}
          />
          <CardC
            iconElement={<IconB/>}
            headerText="Internal Link Card 2"
            descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
            linkURL="/"
            external={false}
            linkClass={Link}
          />
          <CardC
            iconElement={<IconB/>}
            headerText="External Link Card 3"
            descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
            linkURL="https://www.google.com"
            linkClass={Link}
            external={true}
          />
          <CardC
            headerText="Internal Link Card 4"
            descriptionText="Example without icon. Vestibulum id ligula porta felis euismod semper."
            linkURL="/"
            external={false}
            linkClass={Link}
          />
        </div>
        <br />
        <CodeBlock code={codeCardC} />
        <br />
        <br />
      </MainContent>
    </PageRoot>
  )
}

export default CardsPage

const codeCardA = String.raw`import { CardA } from '@hummingbot/hbui/components/cards/CardA'
import { Link } from 'react-router-dom' // import from 'gatsby' package in Gatsby projects

<div tw='w-full flex content-between'>
  <CardA
    tw='mr-xs'
    imgSrc="https://picsum.photos/id/1/328/200"
    imgAlt="Test"
    headerText="Inner Site Link"
    descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
    linkURL="/"
    linkClass={Link}
    external={false}
  />
  <CardA
    tw='mr-xs'
    imgSrc="https://picsum.photos/id/1/328/200"
    imgAlt="Test"
    headerText="External Link"
    descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
    linkURL="https://www.google.com"
    external={true}
  />
  <CardA
    headerText="No Image"
    descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
    linkURL="https://www.google.com"
    linkClass={Link}
    external={true}
  />
</div>
`

const codeCardB = String.raw`import { CardB } from '@hummingbot/hbui/components/cards/CardB'
import { Link } from 'react-router-dom' // import from 'gatsby' package in Gatsby projects

<div tw='w-full flex content-between'>
  <CardB
    tw='mr-xs'
    iconElement={<IconA/>}
    headerText="Icon Card 1"
    descriptionText="Inner site link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus."
    linkURL="/"
    linkClass={Link}
    external={false}
  />
  <CardB
    tw='mr-xs'
    iconElement={<IconB/>}
    headerText="Icon Card 2"
    descriptionText="With external link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
    linkURL="https://www.google.com"
    external={true}
  />
  <CardB
    headerText="No Icon"
    descriptionText="With external link. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
    linkURL="https://www.google.com"
    linkClass={Link}
    external={true}
  />
</div>

function IconA() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 8L12 12"></path>
      <path d="M12 16L12.01 16"></path>
    </svg>
  );
}


function IconB() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
    </svg>
  );
}`

const codeCardC = String.raw`import { CardC } from '@hummingbot/hbui/components/cards/CardC'
import { Link } from 'react-router-dom' // import from 'gatsby' package in Gatsby projects

<div tw='grid grid-cols-1 gap-xs lg:grid-cols-2 w-full content-between'>
  <CardC
    iconElement={<IconB/>}
    headerText="External Link Card 1"
    descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
    linkURL="https://www.google.com"
    linkClass={Link}
    external={true}
  />
  <CardC
    iconElement={<IconB/>}
    headerText="Internal Link Card 2"
    descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
    linkURL="/"
    external={false}
    linkClass={Link}
  />
  <CardC
    iconElement={<IconB/>}
    headerText="External Link Card 3"
    descriptionText="Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum."
    linkURL="https://www.google.com"
    linkClass={Link}
    external={true}
  />
  <CardC
    headerText="Internal Link Card 4"
    descriptionText="Example without icon. Vestibulum id ligula porta felis euismod semper."
    linkURL="/"
    external={false}
    linkClass={Link}
  />
</div>

function IconB() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
    </svg>
  );
}
`

function IconA() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 8L12 12"></path>
      <path d="M12 16L12.01 16"></path>
    </svg>
  );
}


function IconB() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
    </svg>
  );
}

function IconC() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M16 18L22 12 16 6"></path>
      <path d="M8 6L2 12 8 18"></path>
    </svg>
  );
}
