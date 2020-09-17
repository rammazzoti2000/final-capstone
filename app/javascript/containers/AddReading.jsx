/* eslint-disable react/display-name */
import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import ReadingForm from '../components/addReading/ReadingForm';

export default () => (
  <main className="maxinova">
    <Head title="Add Readings" />
    <ReadingForm />
    <Navbar />
  </main>
);
