/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import DailyStats from '../components/reading/DayStats';
import Navbar from '../components/Navbar';

class Reading extends React.Component {
  render() {
    const {
      match: {
        params: { userId, id },
      },
    } = this.props;
    console.log(userId, id);

    return (
      <div>
        <Head />
        <DailyStats />
        <Navbar />
      </div>
    );
  }
}

Reading.propTypes = {
  match: PropTypes.bool.isRequired,
};

export default Reading;
