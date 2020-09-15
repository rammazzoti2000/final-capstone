/* eslint-disable no-return-assign, jsx-a11y/anchor-is-valid, import/no-named-as-default */
import React from 'react';
import SignoutBtn from './home/Signout';

const Navbar = () => (
  <footer id="sticky-footer" className="bg-grey fixed-bottom">
    <div className="container text-center">
      <ul className="row foot-row nav nav-pills tablist" role="tablist">
        <li className="col foot-col nav-item">
          <a onClick={() => window.location.href = '/addreading'} className="nav-link" data-toggle="pill" href="#">
            <i className="fas fa-chart-bar" />
            <p>Add Readings</p>
          </a>
        </li>
        <li className="col foot-col nav-item">
          <a onClick={() => window.location.href = '/readings'} className="nav-link" data-toggle="pill" href="#">
            <i className="fas fa-chart-line" />
            <p>Track.it</p>
          </a>
        </li>
        <li className="col foot-col nav-item">
          <a onClick={() => window.location.href = '/report'} className="nav-link" data-toggle="pill" href="#">
            <i className="fas fa-chart-pie" />
            <p>Report</p>
          </a>
        </li>
        <li className="col foot-col nav-item">
          <a className="nav-link" data-toggle="pill" href="#">
            <SignoutBtn />
            {/* <i className="fas fa-ellipsis-h" />
            <p>More</p> */}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Navbar;
