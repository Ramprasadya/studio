import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserContextProvider from './components/context/userContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
    <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
    </BrowserRouter>
  </UserContextProvider>
)
