/* eslint-disable import/no-unresolved, react/display-name */
import React from 'react';
// import { Link } from 'react-router-dom';

export default () => (
  <div>
    <div>
      <nav className="navbar navbar-inverse bg-blue fixed-top">
        <h1 className="navbar-brand abs" href="#">Home</h1>
      </nav>
      <div className="container text-content">
        <h3>Fixed Navbar</h3>
        <div className="row">
          <div className="col-md-4">
            <p>
              A fixed navigation bar stays visible in a fixed position
              (top or bottom) independent of the page scroll.
            </p>
            <p>
              A fixed navigation bar stays visible in a fixed position
              (top or bottom) independent of the page scroll.
            </p>
          </div>
          <div className="col-md-4">
            <p>
              A fixed navigation bar stays visible in a fixed position
              (top or bottom) independent of the page scroll.
            </p>
            <p>
              A fixed navigation bar stays visible in a fixed position
              (top or bottom) independent of the page scroll.
            </p>
          </div>
          <div className="col-md-4">
            <p>
              A fixed navigation bar stays visible in a fixed position
              (top or bottom) independent of the page scroll.
            </p>
            <p>
              A fixed navigation bar stays visible in a fixed position
              (top or bottom) independent of the page scroll.
            </p>
          </div>
        </div>
      </div>
      <footer id="sticky-footer" className="bg-grey fixed-bottom">
        <div className="container text-center">
          <div className="row">
            <div className="col foot-col">
              <i className="fas fa-chart-bar" />
              <p>Add Readings</p>
            </div>
            <div className="col foot-col">
              <i className="fas fa-chart-line" />
              <p>Track.it</p>
            </div>
            <div className="col foot-col">
              <i className="fas fa-chart-pie" />
              <p>Report</p>
            </div>
            <div className="col foot-col">
              <i className="fas fa-ellipsis-h" />
              <p>More</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>

);
