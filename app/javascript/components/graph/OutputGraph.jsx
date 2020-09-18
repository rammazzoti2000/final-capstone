/* eslint-disable react/destructuring-assignment */
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
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Circle;
