/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Head extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <header>
          <nav className="navbar navbar-inverse bg-blue fixed-top">
            <h1 className="navbar-brand abs">{title}</h1>
          </nav>
        </header>
      </>
    );
  }
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
