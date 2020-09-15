/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { SIGNEDOUT } from '../../actions';

export class SignoutBtn extends Component {
  onSubmit(e) {
    e.preventDefault();
    axios.delete('/api/v1/users/sessions')
      .then(() => this.props.logout());
  }

  render() {
    const { login } = this.props;
    if (login === false) return <Redirect to="/" />;
    return (
      <>
        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={e => this.onSubmit(e)}
        >
          Logout
        </button>
      </>
    );
  }
}
const mapStateToProps = state => {
  const { login, id, name } = state;
  return {
    login, id, name,
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SIGNEDOUT()),
});

SignoutBtn.propTypes = {
  login: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignoutBtn);
