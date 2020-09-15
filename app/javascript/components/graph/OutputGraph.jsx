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
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default Circle;
