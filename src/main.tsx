import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './rudexTolkit/store.ts'
import { GlobalStyle } from './styles/global.ts'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle/>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
