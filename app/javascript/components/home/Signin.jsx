/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SIGNEDIN } from '../../actions';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      success: true,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    axios.post('/api/v1/users/sessions', {
      user: {
        email,
        password,
      },
    })
      .then(response => response.data)
      .then(response => {
        if (response.code === 200) {
          this.props.login(response.user.id, response.user.name);
          this.props.history.push('/addreading');
        } else if (response.code === 400) {
          this.setState({
            errors: response.errors,
          });
        }
      });
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
    );
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

  render() {
    const { email, password } = this.state;

    return (
      <div className="tab-pane" id="user">
        <br />
        <fieldset>
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
        </fieldset>
        <br />
        <div className=" text-center">
          <button
            className="btn btn-primary btn-success"
            type="button"
            onClick={e => this.onSubmit(e)}
          >
            <i className="fa fa-user" />
            {' '}
            LOGIN
          </button>
        </div>
        <br />
        {this.showErrors()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: ((id, name) => {
    dispatch(SIGNEDIN(id, name));
  }),
});

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(Signin));
