/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import { H1, H4, H6, PSmall, P } from '../../../hbui/elements/typography'
import { Button } from '../../../hbui/elements/buttons'
import { Separator } from '../../../hbui/elements/layout'
import { CardA } from '../../../hbui/components/cards/CardA'
import { CardB } from '../../../hbui/components/cards/CardB'
import { CardC } from '../../../hbui/components/cards/CardC'
import { Link } from 'gatsby'
import Hero from '../../../hbui/components/hero/Hero'
import { PropertiesTable, PropertiesTableRow } from '../../../hbui/components/table/PropertiesTable'

const CardsPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isBold>Cards</H1>
      <P>Collection of Card components</P>
    </Hero>
    <MainContent>
      <H4>CardA</H4>
      <P>Most standard Card style</P>
      <br />
      <div tw='w-full grid grid-cols-1 gap-0 gap-y-4 lg:(grid-cols-3 gap-1 gap-y-0)'>
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
          descriptionText="Card with custom content."
          children={
            <div>
              <Button variant='info'>Button</Button>
            </div>
          }
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
      <PropertiesTable title='CardA Parameters'>
        <PropertiesTableRow
          propName='imgSrc'
          type='String'
          required='optional'
          description='URL to image'
        />
        <PropertiesTableRow
          propName='imgAlt'
          type='String'
          required='optional'
          description='ALT image description'
        />
        <PropertiesTableRow
          propName='headerText'
          type='String'
          required='optional'
          description='card title'
        />
        <PropertiesTableRow
          propName='descriptionText'
          type='String'
          required='optional'
          description='card description'
        />
        <PropertiesTableRow
          propName='children'
          type='JSX'
          required='optional'
          description='Custom JSX content'
        />
        <PropertiesTableRow
          propName='linkURL'
          type='String'
          required='optional'
          description='link destination URL'
        />
        <PropertiesTableRow
          propName='external'
          type='Boolean'
          required='conditional'
          description='when a link is external, pass {true}'
        />
        <PropertiesTableRow
          propName='linkClass'
          type='Class'
          required='conditional'
          description='if "linkUrl" is given and refers to an internal link, pass the "Link" class you are using, eg. imported from react-router-dom or gatsby'
        />
      </PropertiesTable>
      <br />
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <H4>CardB</H4>
      <P>Using an icon instead of an image</P>
      <br />
      <div tw='w-full grid grid-cols-1 gap-0 gap-y-4 lg:(grid-cols-3 gap-1 gap-y-0)'>
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
          descriptionText="Card with custom content."
          children={
            <div>
              <Button variant='info'>Button</Button>
            </div>
          }
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
      <PropertiesTable title='CardB Parameters'>
        <PropertiesTableRow
          propName='headerText'
          type='String'
          required='optional'
          description='card title'
        />
        <PropertiesTableRow
          propName='descriptionText'
          type='String'
          required='optional'
          description='card description'
        />
        <PropertiesTableRow
          propName='children'
          type='JSX'
          required='optional'
          description='Custom JSX content'
        />
        <PropertiesTableRow
          propName='linkURL'
          type='String'
          required='optional'
          description='link destination URL'
        />
        <PropertiesTableRow
          propName='external'
          type='Boolean'
          required='conditional'
          description='when a link is external, pass {true}'
        />
        <PropertiesTableRow
          propName='linkClass'
          type='Class'
          required='conditional'
          description='if "linkUrl" is given and refers to an internal link, pass the "Link" class you are using, eg. imported from react-router-dom or gatsby'
        />
      </PropertiesTable>
      <br />
      <br />
      <br />
      <Separator />
      <br />
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
          descriptionText="Card with custom content."
          children={
            <div>
              <Button variant='info'>Button</Button>
            </div>
          }
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
      <PropertiesTable title='CardC Parameters'>
        <PropertiesTableRow
          propName='headerText'
          type='String'
          required='optional'
          description='card title'
        />
        <PropertiesTableRow
          propName='descriptionText'
          type='String'
          required='optional'
          description='card description'
        />
        <PropertiesTableRow
          propName='children'
          type='JSX'
          required='optional'
          description='Custom JSX content'
        />
        <PropertiesTableRow
          propName='linkURL'
          type='String'
          required='optional'
          description='link destination URL'
        />
        <PropertiesTableRow
          propName='external'
          type='Boolean'
          required='conditional'
          description='when a link is external, pass {true}'
        />
        <PropertiesTableRow
          propName='linkClass'
          type='Class'
          required='conditional'
          description='if "linkUrl" is given and refers to an internal link, pass the "Link" class you are using, eg. imported from react-router-dom or gatsby'
        />
      </PropertiesTable>
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default CardsPage

const codeCardA = String.raw`import { CardA } from '@hummingbot/hbui/components/cards/CardA'
import { Link } from 'react-router-dom' // import from 'gatsby' package in Gatsby projects

<div tw='w-full grid grid-cols-1 gap-0 gap-y-4 lg:(grid-cols-3 gap-1 gap-y-0)'>
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
    descriptionText="Card with custom content."
    children={
      <div>
        <Button variant='info'>Button</Button>
      </div>
    }
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
</div>`

const codeCardB = String.raw`import { CardB } from '@hummingbot/hbui/components/cards/CardB'
import { Link } from 'react-router-dom' // import from 'gatsby' package in Gatsby projects

<div tw='w-full grid grid-cols-1 gap-0 gap-y-4 lg:(grid-cols-3 gap-1 gap-y-0)'>
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
    descriptionText="Card with custom content."
    children={
      <div>
        <Button variant='info'>Button</Button>
      </div>
    }
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
    descriptionText="Card with custom content."
    children={
      <div>
        <Button variant='info'>Button</Button>
      </div>
    }
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
}`



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
