/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import DayStats from '../components/reading/DayStats';
import Navbar from '../components/Navbar';

class Reading extends React.Component {
  render() {
    const {
      match: {
        params: { userId, id },
      },
    } = this.props;

    return (
      <div>
        <Head />
        <DayStats userId={userId} id={id} />
        <Navbar />
      </div>
    );
  }
}

Reading.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Reading;
