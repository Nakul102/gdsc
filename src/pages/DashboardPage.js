import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useWebSocket from '../hooks/useWebSocket';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const { list1, bloodPressure, cholesterol, glucose } = useWebSocket();

  const medicationData = [80, 20];
  const stepData = { stepsWalked: [1200, 1300, 1100, 1400, 1000, 1500, 1600], targetSteps: [10000, 10000, 10000, 10000, 10000, 10000, 10000] };

  if (!isAuthenticated) {
    return <div>Please log in to see the dashboard.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl p-6">Welcome {user.name}</h1>
      <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
      <Dashboard
        list1={list1}
        cholesterol={cholesterol}
        glucose={glucose}
        bloodPressure={bloodPressure}
        medicationData={medicationData}
        stepData={stepData}  // Passing stepData correctly
      />
    </div>
  );
};

export default DashboardPage;
