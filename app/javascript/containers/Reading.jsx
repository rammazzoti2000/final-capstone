/* eslint-disable react/forbid-prop-types, react/prefer-stateless-function */
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
      <div className="maxinova">
        <Head title="Day Stats" />
        <DayStats userId={userId} id={id} />
        <Navbar />
      </div>
    );
  }
}

Reading.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Reading;
