import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const HalfCircleProgressBar = ({ progress, size = 200, strokeWidth = 20, color = '#29b6f6' }) => {
  const data = [
    { value: progress },
    { value: 100 - progress },
  ];

  const COLORS = [color, '#e4e4e4'];

  return (
    <div style={{ textAlign: 'center', position: 'relative', width: size, height: size / 2 }}>
      <PieChart width={size} height={size / 2}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={size / 2 - strokeWidth}
          outerRadius={size / 2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      {/* Percentage Text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default HalfCircleProgressBar;
