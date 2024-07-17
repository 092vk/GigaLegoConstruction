import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain="dev-k47zqbr8ropt45i3.us.auth0.com" 
    clientId='0lpba1reWoESZXsvJeFgQhqrZLjIWsQJ'
    authorizationParams={{
      redirect_uri:"https://gigalegoconstruction.netlify.app/"
    }}
    audience="https://gigalegoconstruction.netlify.app/"
    scope="openid profile email"
    >
      
    </Auth0Provider> */}
    <App />
  </React.StrictMode>,
)
