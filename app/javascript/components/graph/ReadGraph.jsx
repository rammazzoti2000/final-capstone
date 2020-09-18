/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Circle = props => (
  <div>
    <div className="circular-boxlist">
      <div className="circular-list">{props.children}</div>
    </div>
  </div>
);

Circle.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Circle;
