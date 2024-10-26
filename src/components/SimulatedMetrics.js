import React from 'react';

const SimulatedMetrics = ({ label, value, units }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-gray-600 font-semibold">{label}</h2>
      <p className="text-2xl font-bold">{value} {units}</p>
    </div>
  );
};

export default SimulatedMetrics;
