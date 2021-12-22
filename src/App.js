import React from 'react'
import tw, { css, styled } from 'twin.macro'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'

import DSMSidebar from './dsmsite/containers/sidebar/DSMSidebar'

import Home from './dsmsite/containers/pages/home/Home'
import GettingStarted from './dsmsite/containers/pages/gettingstarted/GettingStarted'
import Guidelines from './dsmsite/containers/pages/guidelines/Guidelines'
import DesignTokens from './dsmsite/containers/pages/designtokens/DesignTokens'
import Components from './dsmsite/containers/pages/components/Components'
import Button from './dsmsite/containers/pages/components/button/Button'
import Input from './dsmsite/containers/pages/components/input/Input'
import Typography from './dsmsite/containers/pages/components/typography/Typography'
import Colors from './dsmsite/containers/pages/guidelines/colors/Colors'
import Downloads from './dsmsite/containers/pages/downloads/Downloads'
import FAQ from './dsmsite/containers/pages/faq/FAQ'

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <DSMSidebar />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/guidelines/colors" element={<Colors  />} />
              <Route path="/design-tokens" element={<DesignTokens />} />
              <Route path="/components" element={<Components />} />
              <Route path="/components/button" element={<Button />} />
              <Route path="/components/input" element={<Input />} />
              <Route path="/components/typography" element={<Typography />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Main>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App

const Layout = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  overflow: 'hidden',
})

const Main = styled.div(() => [
  css`
    height: 100vh;
    overflow-y: scroll;
  `,
  tw`bg-primary w-full`
])
