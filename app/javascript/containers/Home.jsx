/* eslint-disable import/no-unresolved, react/display-name */
import React from 'react';
// import { Link } from 'react-router-dom';

import Head from '../components/Head';
import Signup from '../components/Signup';
import Navbar from '../components/Navbar';

export default () => (
  <div>
    <div>
      <Head />
      <Signup />
      <Navbar />
    </div>
  </div>
);
