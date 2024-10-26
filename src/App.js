import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import DashboardPage from './pages/DashboardPage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './App.css';

const App = () => {
  return (
    <Auth0Provider
      domain="dev-ah4n30a7wqzo2izq.us.auth0.com"
      clientId="TIQtvfktQ8OCMv0wU2BIxKilvMTIsqmT"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} /> {/* Route for the login page */}
            <Route path="/login" element={<Login />} /> {/* Explicitly add the /login route */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
};

export default App;
