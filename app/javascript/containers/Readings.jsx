/* eslint-disable react/display-name */
import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import ReadingList from '../components/readings/ReadingList';

export default () => (
  <main>
    <Head title="Track.It" />
    <ReadingList />
    <Navbar />
  </main>
);
