/* eslint-disable react/display-name */
import React from 'react';
import Head from '../components/reading/Head';
import Navbar from '../components/Navbar';
import ReadingList from '../components/reading/ReadingList';

export default () => (
  <div>
    <Head />
    <ReadingList />
    <Navbar />
  </div>
);
