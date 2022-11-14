/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { PageRoot, Section, Container } from '../../hbui/elements/layout'
import { H1, H6 } from '../../hbui/elements/typography'
import { Button } from '../../hbui/elements/buttons'
import Navigation from '../ui/components/Navigation'
import { Link } from 'gatsby'

const ErrorPage = () => (
  <Layout>
    <PageRoot tw='bg-body'>
      <Navigation />
      <Section>
        <Container tw='bg-window border border-window p-sm'>
          <H1>404</H1>
          <br />
          <H6>Page not found</H6>
          <br />
          <Link to='/'>
            <Button isSuccess>
              return home
            </Button>
          </Link>
        </Container>
      </Section>
    </PageRoot>
  </Layout>
)

export default ErrorPage
