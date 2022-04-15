import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './hb_ui/system'

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
