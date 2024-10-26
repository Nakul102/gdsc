import React from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeComponent = ({ id, label, value, min, max, units }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-gray-600 font-semibold">{label}</h2>
      <GaugeChart
        id={id}
        nrOfLevels={30}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={['#5BE12C', '#F5CD19', '#EA4228']}
        percent={value / max}
        arcPadding={0.02}
      />
      <p className="text-lg font-bold mt-2">
        {value} {units}
      </p>
    </div>
  );
};

export default GaugeComponent;
