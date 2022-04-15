import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from './styles'

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
