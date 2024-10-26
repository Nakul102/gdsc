import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Replace with your actual Auth0 domain and client ID
const domain = 'dev-ah4n30a7wqzo2izq.us.auth0.com'; // e.g., 'myapp.auth0.com'
const clientId = 'TIQtvfktQ8OCMv0wU2BIxKilvMTIsqmT'; // e.g., 'abc123'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
