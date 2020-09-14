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
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default Circle;
