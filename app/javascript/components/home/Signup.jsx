/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      units: '',
      target: '',
      errors: {},
      success: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      name, email, password, password_confirmation, units, target,
    } = this.state;
    axios.post('/api/v1/users', {
      user: {
        name,
        email,
        password,
        password_confirmation,
        units,
        target,
      },
    })
      .then(response => response.data)
      .then(response => {
        if (response.code === 400) {
          this.setState({
            errors: response.errors,
          });
        } else if (response.code === 200) {
          this.setState({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            units: '',
            target: '',
            errors: {},
            success: true,
          });
        }
      });
  }

  showErrors() {
    const { errors } = this.state;
    if (Object.keys(errors).size === 0) {
      return (null);
    }
    return (
      <div className="bg-danger text-white px-3">
        {Object.keys(errors).map(key => (
          <div key={key}>
            {' '}
            {key}
            {' '}
            <ul>
              {' '}
              {errors[key].map(m => <li key={m}>{m}</li>)}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
    );
  }

  render() {
    const {
      name, email, password, password_confirmation, units, target, success,
    } = this.state;
    return (
      <div className="tab-content">
        {this.showErrors()}
        <div id="new">
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
                <i className="fa fa-envelope" />
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
              <div className="right-inner-addon">
                <i className="fa fa-key" />
                <input
                  className="form-control input-lg"
                  placeholder="Password Confirmation"
                  type="password"
                  id="password_confirmation"
                  value={password_confirmation}
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
                <option>Choose monthly units</option>
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
                <option>Choose month target savings</option>
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
                type="submit"
                onClick={e => this.onSubmit(e)}
              >
                {' '}
                Create Account
              </button>
            </div>
          </div>
        </div>
        <br />
        {success ? <SweetAlert show={success} title="Power Tracker" text="Sign up successful! Proceed to login." /> : ''}
      </div>
    );
  }
}

export default Signup;
