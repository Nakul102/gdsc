import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, PointElement, LineElement, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, PointElement, LineElement, LinearScale, Title, Tooltip);

const LineGraph = ({ list1 }) => {
  // Log the received data for debugging
  console.log(list1);

  const linearChartData = {
    labels: [...Array(list1.length).keys()].map(i => i + 1), // Dynamic labels based on data length
    datasets: [
      {
        label: "Steps",
        data: list1,
        borderColor: "turquoise",
        borderWidth: 1.5,
        pointRadius: 1.5,
        backgroundColor: "white",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        border: {
          color: "#d1e8e2",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        border: {
          color: "#d1e8e2",
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
      },
    },
  };

  return (
    <div className="line-container">
      <Line data={linearChartData} options={options} />
    </div>
  );
};

export default LineGraph;
