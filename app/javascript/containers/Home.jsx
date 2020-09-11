/* eslint-disable import/no-unresolved, react/display-name */
import React from 'react';
// import { Link } from 'react-router-dom';

export default () => (
  <div>
    <div>
      <nav className="navbar navbar-inverse bg-blue fixed-top">
        <h1 className="navbar-brand abs" href="#">Home</h1>
      </nav>

      <div className="container text-content sign-in-up">
        <div className="row justify-content-center">
          <div className="col-md-4 col-md-offset-4">
            <br />
            {/* Nav tabs */}
            <div className="text-center">
              <div className="btn-group">
                <a href="#new" role="tab" data-toggle="tab" className="big btn btn-primary">
                  <i className="fa fa-plus" />
                  Create Account
                </a>
                <a href="#user" role="tab" data-toggle="tab" className="big btn btn-success">
                  <i className="fa fa-user" />
                  Login
                </a>
              </div>
            </div>
            <p className="click2select">Tap to select</p>
            <div className="tab-content">
              <div className="tab-pane fade in active" id="new">
                <br />
                <fieldset>
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="fa fa-envelope" />
                      <input className="form-control input-lg" placeholder="Email" type="text" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="fa fa-key" />
                      <input className="form-control input-lg" placeholder="Password" type="password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="fa fa-key" />
                      <input className="form-control input-lg" placeholder="Confirm Password" id="" type="password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <select className="custom-select custom-select-md">
                      <option selected>Choose monthly units</option>
                      <option value="1800">1800</option>
                      <option value="2100">2100</option>
                      <option value="2400">2400</option>
                      <option value="2700">2700</option>
                      <option value="3000">3000</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className="custom-select custom-select-md">
                      <option selected>Choose month target savings</option>
                      <option value="5">5%</option>
                      <option value="10">10%</option>
                      <option value="15">15%</option>
                      <option value="20">20%</option>
                      <option value="25">25%</option>
                    </select>
                  </div>
                </fieldset>
                <hr />
                <div className="tab-content">
                  <div className="tab-pane active text-center" id="pp">
                    <button type="button" className="btn btn-primary btn-lg btn-block">
                      <i className="fa fa-plus" />
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="user">
                <br />
                <fieldset>
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="fa fa-envelope" />
                      <input className="form-control input-lg" placeholder="Email" type="text" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="fa fa-key" />
                      <input className="form-control input-lg" placeholder="Password" type="password" />
                    </div>
                  </div>
                </fieldset>
                <br />
                <div className=" text-center">
                  <button type="button" className="btn btn-primary btn-success">
                    <i className="fa fa-user" />
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="sticky-footer" className="bg-grey fixed-bottom">
        <div className="container text-center">
          <ul className="row foot-row nav nav-pills tablist" role="tablist">
            <li className="col foot-col nav-item">
              <a className="nav-link" data-toggle="pill" href="#readings">
                <i className="fas fa-chart-bar" />
                <p>Add Readings</p>
              </a>
            </li>
            <li className="col foot-col nav-item">
              <a className="nav-link" data-toggle="pill" href="#track">
                <i className="fas fa-chart-line" />
                <p>Track.it</p>
              </a>
            </li>
            <li className="col foot-col nav-item">
              <a className="nav-link" data-toggle="pill" href="#report">
                <i className="fas fa-chart-pie" />
                <p>Report</p>
              </a>
            </li>
            <li className="col foot-col nav-item">
              <a className="nav-link" data-toggle="pill" href="#more">
                <i className="fas fa-ellipsis-h" />
                <p>More</p>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
);
