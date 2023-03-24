/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, H5, P } from '../../../hbui/elements/typography'
import Pagination from '../../../hbui/components/pagination'
import Hero from '../../../hbui/components/hero/Hero'
import CodeBlock from '../../../hbui/components/code/CodeBlock'

const RadioGroupPage = () => {
  const [currentPage, setCurrentPage] = useState(2)

  return (
    <Layout>
      <Hero tw="bg-window border-b-2 border-green dark:border-terminal">
        <H1 isBold>Pagination</H1>
        <P>
          A component that lead user to specific of the page by displaying the
          pages number
        </P>
      </Hero>
      <MainContent>
        <H5> Current page is : {currentPage}</H5>
        <br />
        <br />
        <Pagination
          count={10}
          defaultPage={currentPage}
          onPageChange={number => setCurrentPage(number)}
        />
        <br />
        <br />
        <CodeBlock code={PaginationCode} />
      </MainContent>
    </Layout>
  )
}

export default RadioGroupPage

const PaginationCode = String.raw`
  <Pagination
    count={10}
    defaultPage={2}
    onPageChange={number => number}    
  />
`
