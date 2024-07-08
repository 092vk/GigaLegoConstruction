import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-k47zqbr8ropt45i3.us.auth0.com" 
    clientId='0lpba1reWoESZXsvJeFgQhqrZLjIWsQJ'
    authorizationParams={{
      redirect_uri:"http://localhost:5173/"
    }}
    audience="http://localhost:8000"
    scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
