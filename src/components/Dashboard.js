import React from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineGraph from './LineChart';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ lineChartData, cholesterol, glucose, bodyTemperature, bloodPressure, medicationData, stepData }) => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-green-400 to-blue-500 h-screen">
      {/* Left Menu Bar */}
      <div className="bg-gray-800 md:w-1/6 p-4 flex flex-col">
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
      <div className="flex-1 p-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="bg-purple-500 p-4 rounded-lg shadow-md flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <h2 className="text-lg font-medium text-white">Blood Cholesterol</h2>
            <p className="text-4xl font-bold text-white">{cholesterol} mg/dL</p>
          </div>

          <div className="bg-orange-500 p-4 rounded-lg shadow-md flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <h2 className="text-lg font-medium text-white">Blood Glucose</h2>
            <p className="text-4xl font-bold text-white">{glucose} mg/dL</p>
          </div>

          <div className="bg-teal-500 p-4 rounded-lg shadow-md flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <h2 className="text-lg font-medium text-white">Body Temperature</h2>
            <p className="text-4xl font-bold text-white">{bodyTemperature} °F</p>
          </div>

          <div className="bg-red-500 p-4 rounded-lg shadow-md flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <h2 className="text-lg font-medium text-white">Blood Pressure</h2>
            <p className="text-4xl font-bold text-white">{bloodPressure.systolic}/{bloodPressure.diastolic} mmHg</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 md:col-span-4 flex flex-col">
            <h2 className="text-lg font-medium text-white">Heart Rate Monitor</h2>
            <LineGraph list1={lineChartData} />  {/* Pass the list1 prop for heart rate data */}
          </div>

          {/* Chart containers for PieChart and BarChart */}
          <div className="flex flex-col md:flex-row justify-between mt-2 gap-2">
            <div className="bg-gray-800 p-3 rounded-lg flex-1 h-[350px] text-white">
              <PieChart data={medicationData} />
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex-1 h-[350px] text-white">
              <BarChart data={stepData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
