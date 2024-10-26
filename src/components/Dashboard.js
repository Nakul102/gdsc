import React from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineGraph from './LineChart';
import '../styles/styles.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = ({ list1, cholesterol, glucose, bodyTemperature, bloodPressure , medicationData, stepData }) => {
  const { logout } = useAuth0();
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="flex h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Left Menu Bar */}
      <div className="bg-gray-800 w-1/6 p-4 flex flex-col">
        <h1 className="text-white text-2xl mb-2">Menu</h1>
        <hr className="border-gray-500 mb-4" /> {/* Horizontal line */}

        <ul className="space-y-3">
          <li
            className="bg-gray-700 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition duration-200 cursor-pointer"
            onClick={() => navigate('/dashboard')} // Navigate to Dashboard
          >
            Dashboard
          </li>
          <li
            className="bg-gray-700 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition duration-200 cursor-pointer"
            onClick={() => navigate('/profile')} // Navigate to Profile
          >
            Profile
          </li>
          <li
            className="bg-gray-700 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition duration-200 cursor-pointer"
            onClick={() => logout({ returnTo: window.location.origin })} // Logout
          >
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-3">
        <div className="grid grid-cols-4 gap-3">
          {/* Card for Blood Cholesterol */}
<div className="bg-purple-500 p-4 rounded-lg shadow-md h-29 flex flex-col justify-center items-center transition-transform transform hover:scale-105">
  <h2 className="text-lg font-medium text-white">Blood Cholesterol</h2>
  <p className="text-4xl font-bold text-white">{cholesterol} mg/dL</p>
</div>

{/* Card for Blood Glucose */}
<div className="bg-orange-500 p-4 rounded-lg shadow-md h-29 flex flex-col justify-center items-center transition-transform transform hover:scale-105">
  <h2 className="text-lg font-medium text-white">Blood Glucose</h2>
  <p className="text-4xl font-bold text-white">{glucose} mg/dL</p>
</div>

{/* Card for Body Temperature */}
<div className="bg-teal-500 p-4 rounded-lg shadow-md h-29 flex flex-col justify-center items-center transition-transform transform hover:scale-105">
  <h2 className="text-lg font-medium text-white">Body Temperature</h2>
  <p className="text-4xl font-bold text-white">{bodyTemperature} °F</p>
</div>

{/* Card for Blood Pressure */}
<div className="bg-red-500 p-4 rounded-lg shadow-md h-29 flex flex-col justify-center items-center transition-transform transform hover:scale-105">
  <h2 className="text-lg font-medium text-white">Blood Pressure</h2>
  <p className="text-4xl font-bold text-white">{bloodPressure.systolic}/{bloodPressure.diastolic} mmHg</p>
</div>

          {/* Heart Rate Monitor */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-4 h-21 flex flex-col">
            <h2 className="text-lg font-medium text-white">Heart Rate Monitor</h2>
            <LineGraph list1={list1} />
          </div>

          {/* Chart containers for PieChart and BarChart */}
          <div className="chart-container">
            <div className="pie-chart-container">
              <PieChart data={medicationData} />
            </div>
            <div className="bar-chart-container">
              <BarChart data={stepData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
