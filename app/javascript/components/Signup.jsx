import React from 'react';
import Signin from './Signin';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      units: '',
      target: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      name, email, password, units, target,
    } = this.state;
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const {
      name, email, password, units, target,
    } = this.state;
    return (
      <div className="container text-content sign-in-up">
        <div className="row justify-content-center">
          <div className="col-md-4 col-md-offset-4">
            <br />
            {/* Nav tabs */}
            <div className="text-center">
              <div className="btn-group">
                <a href="#new" role="tab" data-toggle="tab" className="big btn btn-primary">
                  <i className="fa fa-plus" />
                  {' '}
                  Create Account
                </a>
                <a href="#user" role="tab" data-toggle="tab" className="big btn btn-success">
                  <i className="fa fa-user" />
                  {' '}
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
                      <i className="fa fa-user" />
                      <input
                        className="form-control input-lg"
                        placeholder="Name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="fa fa-envelop" />
                      <input
                        className="form-control input-lg"
                        placeholder="Email"
                        type="text"
                        id="email"
                        value={email}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="fa fa-key" />
                      <input
                        className="form-control input-lg"
                        placeholder="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select custom-select-md"
                      id="units"
                      value={units}
                      onChange={e => this.handleChange(e)}
                    >
                      <option defaultValue>Choose monthly units</option>
                      <option value="1800">1800</option>
                      <option value="2100">2100</option>
                      <option value="2400">2400</option>
                      <option value="2700">2700</option>
                      <option value="3000">3000</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select custom-select-md"
                      id="target"
                      value={target}
                      onChange={e => this.handleChange(e)}
                    >
                      <option defaultValue>Choose month target savings</option>
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
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="button"
                      onClick={e => this.onSubmit(e)}
                    >
                      <i className="fa fa-plus" />
                      {' '}
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
              <Signin />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
