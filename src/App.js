import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import ScrollToTop from './dsmsite/system/ScrollToTop'

// sidebar
import DSMSidebar from './dsmsite/sidebar/DSMSidebar'

// pages
import Home from './dsmsite/pages/home'
import GettingStarted from './dsmsite/pages/gettingstarted'
import Guidelines from './dsmsite/pages/guidelines'
import DesignTokens from './dsmsite/pages/designtokens'
import Code from './dsmsite/pages/code'
import Elements from './dsmsite/pages/elements'
import Components from './dsmsite/pages/components'
import Downloads from './dsmsite/pages/downloads'
import FAQ from './dsmsite/pages/faq/FAQ'

// elements
import LayoutCoreSingle from './dsmsite/pages/elements/layout/LayoutCoreSingle'
import LayoutCoreSidebar from './dsmsite/pages/elements/layout/LayoutCoreSidebar'
import LayoutExtra from './dsmsite/pages/elements/layout/LayoutExtra'
import TypographyElements from './dsmsite/pages/elements/typography/Typography'
import TypographyTests from './dsmsite/pages/elements/typography/Tests'
import ButtonElementRegular from './dsmsite/pages/elements/button/Button'
import ButtonElementGhost from './dsmsite/pages/elements/button/GhostButton'
import ButtonElementLarge from './dsmsite/pages/elements/button/ButtonLarge'
import ButtonElementDisabled from './dsmsite/pages/elements/button/ButtonDisabled'
import InputElement from './dsmsite/pages/elements/input/Input'

// components
import ButtonComponent from './dsmsite/pages/components/button/Button'
import TextInput from './dsmsite/pages/components/textinput/TextInput'
import TextInputCustomLabel from './dsmsite/pages/components/textinput/TextInputCustomLabel'
import TextInputExtendedLabel from './dsmsite/pages/components/textinput/TextInputExtendedLabel'
import TextInputRequired from './dsmsite/pages/components/textinput/TextInputRequired'
import TextInputPrefix from './dsmsite/pages/components/textinput/TextInputPrefix'
import ChipComponent from './dsmsite/pages/components/chip/Chip'
import Spinner from './dsmsite/pages/components/spinner/Spinner'
import Callout from './dsmsite/pages/components/callout/Callout'
import Snackbar from './dsmsite/pages/components/snackbar/Snackbar'

// guidelines
import Colors from './dsmsite/pages/guidelines/colors/Colors'
import DesignOverview from './dsmsite/pages/guidelines/overview/Overview'
import TypographyGuidelines from './dsmsite/pages/guidelines/typography/Typography'

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <DSMSidebar />
        <Main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/design-tokens" element={<DesignTokens />} />
            <Route path="/code" element={<Code />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/components" element={<Components />} />

            <Route
              path="/elements/layout-core"
              element={<LayoutCoreSingle />}
            />
            <Route
              path="/elements/layout-core/sidebar"
              element={<LayoutCoreSidebar />}
            />
            <Route path="/elements/layout-extra" element={<LayoutExtra />} />
            <Route path="/elements/typography" element={<TypographyElements />} />
            <Route path="/elements/typography/tests" element={<TypographyTests />} />
            <Route
              path="/elements/button"
              element={<ButtonElementRegular />}
            />
            <Route
              path="/elements/button/ghost"
              element={<ButtonElementGhost />}
            />
            <Route
              path="/elements/button/large"
              element={<ButtonElementLarge />}
            />
            <Route
              path="/elements/button/disabled"
              element={<ButtonElementDisabled />}
            />
            <Route path="/elements/text-input" element={<InputElement />} />

            <Route path="/components/button" element={<ButtonComponent />} />
            <Route path="/components/chip" element={<ChipComponent />} />
            <Route path="/components/text-input" element={<TextInput />} />
            <Route
              path="/components/text-input/custom-label"
              element={<TextInputCustomLabel />}
            />
            <Route
              path="/components/text-input/extended-label"
              element={<TextInputExtendedLabel />}
            />
            <Route
              path="/components/text-input/required"
              element={<TextInputRequired />}
            />
            <Route
              path="/components/text-input/prefix"
              element={<TextInputPrefix />}
            />
            <Route path="/components/spinner" element={<Spinner />} />
            <Route path="/components/callout" element={<Callout />} />
            <Route path="/components/snackbar" element={<Snackbar />} />

            <Route path="/guidelines/colors" element={<Colors />} />
            <Route path="/guidelines/overview" element={<DesignOverview />} />
            <Route path="/guidelines/typography" element={<TypographyGuidelines />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  )
}

export default App

const Main = styled.div(() => [
  tw`bg-secondary transition-all w-full ml-0 md:w-[calc(100% - 270px)] md:ml-[270px]`,
])
