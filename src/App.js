import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import DashboardPage from './pages/DashboardPage';
import Login from './pages/Login';
import './App.css';
import BackgroundSVG from './subtle-prism.svg'; // Adjust the path

const App = () => {
  return (
    <Auth0Provider
      domain="dev-ah4n30a7wqzo2izq.us.auth0.com"
      clientId="TIQtvfktQ8OCMv0wU2BIxKilvMTIsqmT"
      redirectUri={window.location.origin}
    >
      <div className="App">
        <Login />
        <DashboardPage />
      </div>
    </Auth0Provider>
  );
};

export default App;
