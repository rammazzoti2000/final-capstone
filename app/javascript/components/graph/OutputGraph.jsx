/* eslint-disable react/destructuring-assignment, react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Circle = props => (
  <div style={{ marginBottom: 20 }}>
    <div className="circular-box">
      <div className="circular-dimension">{props.children}</div>
    </div>
  </div>
);

Circle.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Circle;
