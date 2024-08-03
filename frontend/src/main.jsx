import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-kb7ckgsswgfzkrlz.ca.auth0.com"
    clientId="2YeCsuU7nOX6TAFPdrrd1d9Z0Cpca0UC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
