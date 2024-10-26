import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import useWebSocket from '../hooks/useWebSocket';
import Dashboard from '../components/Dashboard';
import '../styles/styles.css';

const DashboardPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const { bloodPressure, bodyTemperature, cholesterol, glucose } = useWebSocket(); 
  const navigate = useNavigate();
  const [lineChartData, setLineChartData] = useState([34, 56, 54, 36, 62, 67, 89, 34, 12, 23, 45, 56, 78]);
  const [medicationData, setMedicationData] = useState([70, 30]);
  const [stepData, setStepData] = useState({
    stepsWalked: [1245, 1374, 2056, 2404, 3140, 2035, 1678],
    targetSteps: [8000, 8000, 8000, 8000, 8000, 8000, 8000],
  });

  // Function to generate new random line chart data
  const generateRandomLineChartData = () => {
    setLineChartData((prevData) => {
      const newData = [...prevData.slice(1), Math.floor(Math.random() * (80 - 60 + 1)) + 60];
      return newData;
    });
  };

  // Function to generate random medication data
  const generateRandomMedicationData = () => {
    const randomValue = Math.floor(Math.random() * 100);
    const randomMedicationData = [randomValue, 100 - randomValue];
    setMedicationData(randomMedicationData);
  };

  // Function to generate random step data
  const generateRandomStepData = () => {
    setStepData((prevStepData) => {
      const newStepsWalked = [...prevStepData.stepsWalked.slice(1), Math.floor(Math.random() * 5000)];
      return {
        ...prevStepData,
        stepsWalked: newStepsWalked,
      };
    });
  };

  // Set intervals for generating random data
  useEffect(() => {
    const medicationInterval = setInterval(generateRandomMedicationData, 4000); 
    const stepInterval = setInterval(generateRandomStepData, 4000);
    const lineChartInterval = setInterval(generateRandomLineChartData, 1000); // Interval for line chart data

    return () => {
      clearInterval(medicationInterval);
      clearInterval(stepInterval);
      clearInterval(lineChartInterval); // Clear line chart interval
    };
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen bg-gradient-to-r from-green-400 to-blue-500 justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to see the dashboard.</h2>
          <p className="text-gray-600 mb-2">To access your profile and dashboard, please log in.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-box">
        <h1 className="text-3xl p-6 font-bold text-gradient transition-transform transform hover:scale-105 border-b-4 border-violet-500">
          Welcome <span className="text-red-300">{user.name}</span>
        </h1>
      </div>

      <Dashboard
        lineChartData={lineChartData} 
        cholesterol={cholesterol}
        glucose={glucose}
        bloodPressure={bloodPressure}
        bodyTemperature={bodyTemperature}
        medicationData={medicationData}
        stepData={stepData}
      />
    </div>
  );
};

export default DashboardPage;
