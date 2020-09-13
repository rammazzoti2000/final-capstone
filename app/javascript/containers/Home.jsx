import React from 'react';
// import { Link } from 'react-router-dom';
import Head from '../components/Head';
import Signup from '../components/home/Signup';
import Signin from '../components/home/Signin';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: <Signin />,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const sector = e.target.value;
    if (sector === 'Signup') {
      this.setState(() => ({
        section: <Signup />,
      }));
    } else {
      this.setState(() => ({
        section: <Signin />,
      }));
    }
  }

  render() {
    const { section } = this.state;
    const sector = section;

    return (
      <div>
        <Head />
        <div className="container text-content sign-in-up">
          <div className="row justify-content-center">
            <div className="col-md-4 col-md-offset-4">
              <br />
              {/* Nav Tabs */}
              <div className="text-center">
                <div className="btn-group">
                  <button
                    type="button"
                    value="Signup"
                    className="big btn btn-primary"
                    onClick={e => this.handleClick(e, 'value')}
                  >
                    <i className="fa fa-plus" />
                    {' '}
                    Create Account
                  </button>
                  <button
                    type="button"
                    value="Signin"
                    className="big btn btn-success"
                    onClick={e => this.handleClick(e, 'value')}
                  >
                    <i className="fa fa-user" />
                    {' '}
                    Login
                  </button>
                </div>
              </div>
              <p className="click2select">Tap to select</p>
              {sector}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
