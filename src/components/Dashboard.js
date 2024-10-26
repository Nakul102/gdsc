import React from 'react';
import SimulatedMetrics from './SimulatedMetrics';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineGraph from './LineChart';
import '../styles/styles.css';


const Dashboard = ({ list1, cholesterol, glucose, medicationData, stepData }) => {
  return (
    <div className="flex h-screen">
      {/* Left Menu Bar */}
<div className="bg-gray-800 w-1/6 p-4 flex flex-col">
  <h1 className="text-white text-2xl mb-4">Menu</h1>
  <ul className="space-y-2">
    <li className="text-gray-300 hover:text-white cursor-pointer">Dashboard</li>
    <li className="text-gray-300 hover:text-white cursor-pointer">Profile</li>
    <li className="text-red-400 hover:text-white cursor-pointer">Logout</li>
  </ul>
</div>


      {/* Main Content Area */}
      <div className="flex-1 p-3">
        <div className="grid grid-cols-2 gap-3">
          {/* Card for Blood Cholesterol */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md h-29 flex flex-col justify-center items-center">
            <h2 className="text-lg font-medium text-white">Blood Cholesterol</h2>
            <p className="text-4xl font-bold text-white">{cholesterol} mg/dL</p>
          </div>

          {/* Card for Blood Glucose */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md h-29 flex flex-col justify-center items-center">
            <h2 className="text-lg font-medium text-white">Blood Glucose</h2>
            <p className="text-4xl font-bold text-white">{glucose} mg/dL</p>
          </div>

          {/* Heart Rate Monitor */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-2 h-21 flex flex-col">
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
