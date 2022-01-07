import React from 'react'
import tw, { css, styled } from 'twin.macro'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'

import DSMSidebar from './dsmsite/sidebar/DSMSidebar'

import Home from './dsmsite/pages/home/Home'
import GettingStarted from './dsmsite/pages/gettingstarted/GettingStarted'
import Guidelines from './dsmsite/pages/guidelines/Guidelines'
import DesignTokens from './dsmsite/pages/designtokens/DesignTokens'
import Components from './dsmsite/pages/components/Components'

import Elements from './dsmsite/pages/elements/Elements'
import Typography from './dsmsite/pages/elements/typography/Typography'
import ButtonElement from './dsmsite/pages/elements/button/Button'
import GhostButtonElement from './dsmsite/pages/elements/button/GhostButton'
import InputElement from './dsmsite/pages/elements/input/Input'

import ButtonComponent from './dsmsite/pages/components/button/Button'
import Input from './dsmsite/pages/components/input/Input'
import Colors from './dsmsite/pages/guidelines/colors/Colors'
import Downloads from './dsmsite/pages/downloads/Downloads'
import FAQ from './dsmsite/pages/faq/FAQ'

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
              
              <Route path="/elements" element={<Elements />} />
              <Route path="/elements/typography" element={<Typography />} />
              <Route path="/elements/button" element={<ButtonElement />} />
              <Route path="/elements/ghostbutton" element={<GhostButtonElement />} />
              <Route path="/elements/input" element={<InputElement />} />
              
              <Route path="/components" element={<Components />} />
              <Route path="/components/button" element={<ButtonComponent />} />
              <Route path="/components/input" element={<Input />} />
              
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
