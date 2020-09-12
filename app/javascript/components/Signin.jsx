import React from 'react';

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

  render() {
    return (
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
            {' '}
            LOGIN
          </button>
        </div>
      </div>
    );
  }
}

export default Signin;
