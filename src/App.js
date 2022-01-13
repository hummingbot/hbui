import React from 'react'
import tw, { css, styled } from 'twin.macro'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import DSMSidebar from './dsmsite/sidebar/DSMSidebar'

// pages
import Home from './dsmsite/pages/home'
import GettingStarted from './dsmsite/pages/gettingstarted'
import Guidelines from './dsmsite/pages/guidelines'
import DesignTokens from './dsmsite/pages/designtokens'
import Elements from './dsmsite/pages/elements'
import Components from './dsmsite/pages/components'
import Downloads from './dsmsite/pages/downloads'
import FAQ from './dsmsite/pages/faq/FAQ'

// elements
import Typography from './dsmsite/pages/elements/typography/Typography'
import ButtonElement from './dsmsite/pages/elements/button/Button'
import GhostButtonElement from './dsmsite/pages/elements/button/GhostButton'
import InputElement from './dsmsite/pages/elements/input/Input'

// components
import ButtonComponent from './dsmsite/pages/components/button/Button'
import TextInput from './dsmsite/pages/components/input/TextInput'
import Spinner from './dsmsite/pages/components/spinner/Spinner'

// guidelines
import Colors from './dsmsite/pages/guidelines/colors/Colors'

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
              <Route path="/design-tokens" element={<DesignTokens />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/elements" element={<Elements />} />
              <Route path="/components" element={<Components />} />
              
              <Route path="/elements/typography" element={<Typography />} />
              <Route path="/elements/button" element={<ButtonElement />} />
              <Route path="/elements/ghostbutton" element={<GhostButtonElement />} />
              <Route path="/elements/input" element={<InputElement />} />
              
              <Route path="/components/button" element={<ButtonComponent />} />
              <Route path="/components/text-input" element={<TextInput />} />
              <Route path="/components/spinner" element={<Spinner />} />
              
              <Route path="/guidelines/colors" element={<Colors  />} />
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
