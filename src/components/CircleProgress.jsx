import React from 'react';

const CircleProgress = ({ value, maxValue }) => {
  // Calculate the circumference of the circle
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke dash offset based on the value and max value
  const strokeDashoffset = ((maxValue - value) / maxValue) * circumference;

  return (
    <div className="flex justify-center items-center m-2">
      <svg className="w-14 h-14" viewBox="0 0 200 100">
        {/* Background circle */}
        <circle
          className="text-sky-100 stroke-current"
          strokeWidth="15"
          cx="60"
          cy="50"
          r={radius}
          fill="transparent"
        ></circle>
        {/* Progress circle */}
        <circle
          className="text-sky-400 stroke-current"
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          cx="50"
          cy="60"
          r={radius}
          fill="transparent"
          transform="rotate(-90 50 50)"
        ></circle>
        {/* Center text */}
        <text
          x="60"
          y="53"
          fontSize="40"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {`${Math.round((value ) * 1)}`}
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;
