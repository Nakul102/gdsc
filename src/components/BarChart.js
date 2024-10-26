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
        label: 'Target Steps',
        data: data?.targetSteps ?? [10000, 10000, 10000, 10000, 10000, 10000, 10000], // Fallback if targetSteps is missing
        backgroundColor: '#FFCA28',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg" style={{ height: '330px', width: '100%' }}> {/* Adjust height here */}
      <h2 className="text-gray-600 font-semibold">Step Count Progress</h2>
      <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChart;
