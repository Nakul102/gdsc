import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const [randomMetricsToDisplay, setRandomMetricsToDisplay] = useState([]);
  const navigate = useNavigate();

  const healthMetrics = [
    { label: 'Daily Water Intake', value: '2.5 liters' },
    { label: 'Average Sleep', value: '7 hours' },
    { label: 'Weekly Exercise', value: '5 workouts' },
    { label: 'Calories Burned Today', value: '350 calories' },
    { label: 'Steps Taken', value: '8,000 steps' },
    { label: 'Mood Level', value: 'Happy 😊' },
    { label: 'Stress Level', value: 'Low' },
    { label: 'Daily Fiber Intake', value: '30 grams' },
    { label: 'Meditation Time', value: '15 minutes' },
    { label: 'Fruit Servings', value: '4 servings' },
    { label: 'Daily Protein Intake', value: '120 grams' },
    { label: 'Average Heart Rate', value: '72 bpm' },
    { label: 'Weekly Yoga Sessions', value: '3 sessions' },
    { label: 'Weekly Cycling Distance', value: '25 miles' },
    { label: 'Daily Step Goal', value: '10,000 steps' },
    { label: 'Blood Pressure', value: '120/80 mmHg' },
    { label: 'Daily Caloric Intake', value: '2,000 calories' },
    { label: 'Hours of Screen Time', value: '4 hours' },
    { label: 'Weekly Swimming Sessions', value: '2 sessions' },
    { label: 'Healthy Snacks Consumed', value: '5 servings' },
    { label: 'Daily Meditation Goal', value: '10 minutes' },
  ];

  const getRandomMetrics = (num) => {
    const shuffled = [...healthMetrics].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    if (isAuthenticated) {
      const metrics = getRandomMetrics(5);
      setRandomMetricsToDisplay(metrics);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen bg-gradient-to-r from-green-400 to-blue-500 justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to see the dashboard.</h2>
          <p className="text-gray-600 mb-2">To access your profile and dashboard, please log in.</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Left Menu Bar */}
      <div className="bg-gray-800 w-full md:w-1/6 p-4 flex flex-col">
        <h1 className="text-white text-2xl mb-2">Menu</h1>
        <hr className="border-gray-500 mb-4" />
        <ul className="space-y-3">
          <li
            className="bg-gray-700 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition duration-200 cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </li>
          <li
            className="bg-gray-700 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition duration-200 cursor-pointer"
            onClick={() => navigate('/profile')}
          >
            Profile
          </li>
          <li
            className="bg-gray-700 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition duration-200 cursor-pointer"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Profile</h1>
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-xl font-medium text-gray-700">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
          <h2 className="text-xl font-medium text-gray-700 mb-2">Health Information</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            {randomMetricsToDisplay.map((metric, index) => (
              <p key={index} className="text-lg text-gray-600">
                <span className="font-semibold">{metric.label}:</span> {metric.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
