import React from 'react';
import { useHistory, Link } from "react-router-dom";
import Signout from "./home/Signout"

class Navbar extends React.Component {

  goReadings() {
    let history = useHistory();
    history.push('/readings');
  }

  render() {
    return (
      <footer id="sticky-footer" className="bg-grey fixed-bottom">
        <div className="container text-center">
          <ul className="row foot-row nav nav-pills tablist" role="tablist">
            <li className="col foot-col nav-item">
              <a onClick={() =>  window.location.href='/addreading'} className="nav-link" data-toggle="pill" href="#">
                <i className="fas fa-chart-bar" />
                <p>Add Readings</p>
              </a>
            </li>
            <li className="col foot-col nav-item">
              <a onClick={() =>  window.location.href='/readings'} className="nav-link" data-toggle="pill" href="#">
                <i className="fas fa-chart-line" />
                <p>Track.it</p>
              </a>
            </li>
            <li className="col foot-col nav-item">
              <a onClick={() =>  window.location.href='/reading'} className="nav-link" data-toggle="pill" href="#">
                <i className="fas fa-chart-pie" />
                <p>Report</p>
              </a>
            </li>
            <li className="col foot-col nav-item">
              <a className="nav-link" data-toggle="pill" href="#">
                <Signout />
                {/* <i className="fas fa-ellipsis-h" />
                <p>More</p> */}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  };
}

export default Navbar;
