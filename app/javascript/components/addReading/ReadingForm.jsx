import React from 'react';

class ReadingForm extends React.Component {

  render() {
    return (
      <div>
        <form id="regForm">
          <h1>Register:</h1>
          <div className="tab">Full Name:
            <p><input placeholder="First name..." name="fname" /></p>
            <p><input placeholder="Last name..." name="lname" /></p>
          </div>
          <div className="tab">Contact Info:
            <p><input placeholder="E-mail..." name="email" /></p>
            <p><input placeholder="Phone..." name="phone" /></p>
          </div>
          <div className="tab">Birthday:
            <p><input placeholder="dd" name="dd" /></p>
            <p><input placeholder="mm" name="nn" /></p>
            <p><input placeholder="yyyy" name="yyyy" /></p>
          </div>
          <div className="tab">Login Info:
            <p><input placeholder="Username..." name="uname" /></p>
            <p><input placeholder="Password..." name="pword" type="password" /></p>
          </div>
          <div className="row justify-content-center btn-box">
            <button type="button" id="prevBtn">Prev</button>
            <button type="button" id="nextBtn">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ReadingForm;
