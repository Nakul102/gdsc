import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS,
  ArcElement,Legend,Tooltip,Title} from "chart.js"
ChartJS.register(   
  Title,
  ArcElement,
  Legend,
  Tooltip);
const PieChart = ({ data }) => {
  const pieData = {
    labels: ['Taken', 'Missed'],
    datasets: [
      {
        data: data,
        backgroundColor: ['#4CAF50', '#FF5252'],
        hoverBackgroundColor: ['#66BB6A', '#FF4081'],
      },
    ],
  };

  return (
    <div className="bg-white p-1 rounded-lg shadow-lg" style={{ height: '330px', width: '100%' }}>
      <h2 className="text-gray-600 font-semibold">Medication Adherence</h2>
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
