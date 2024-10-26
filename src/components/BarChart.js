import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const barData = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Steps Walked',
        data: data?.stepsWalked ?? [1200, 1300, 1100, 1400, 1000, 1500, 1600], // Use stepsWalked data
        backgroundColor: '#FFCA28',
      },
      {
        label: 'Target Steps',
        data: data?.targetSteps ?? [10000, 10000, 10000, 10000, 10000, 10000, 10000], // Fallback if targetSteps is missing
        backgroundColor: '#FF5722', // Different color for target steps
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg" style={{ height: '330px', width: '50vw' }}>
      <h2 className="text-gray-600 font-semibold">Step Count Progress</h2>
      <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChart;
