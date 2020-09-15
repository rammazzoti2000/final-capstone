import React from 'react';
import PropTypes from 'prop-types';

const InputGraph = ({ strokeWidth, percentage, display }) => {
  const radius = (50 - strokeWidth / 2);
  const pathDescription = `
    M 50,50 m 0,-${radius}
    a ${radius},${radius} 0 1 1 0,${2 * radius}
    a ${radius},${radius} 0 1 1 0,-${2 * radius}
  `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: '#42B5E8',
    strokeLinecap: 'round',
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${(((100 - percentage) / 100) * diameter)}px`,
  };

  return (
    <svg
      className="CircularProgressbar"
      viewBox="0 0 100 100"
      width={300}
      height={300}
    >
      <path
        className="CircularProgressbar-trail"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: '#C0C0C0',
        }}
      />

      <path
        className="CircularProgressbar-path"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={progressStyle}
      />

      <text
        className="CircularProgressbar-text"
        x={50}
        y={50}
        style={{
          fill: '#007dbc',
          fontSize: '14px',
          dominantBaseline: 'central',
          textAnchor: 'middle',
        }}
      >
        {`${display} Units`}
      </text>
    </svg>
  );
};

InputGraph.propTypes = {
  strokeWidth: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  percentage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default InputGraph;
