/* eslint-disable react/destructuring-assignment, react/no-unused-state */
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Bedroom,
  Study,
  Garage,
  Living,
  Kitchen,
  Guest,
} from './Rooms';

class ReadingForm extends React.Component {
  constructor(props) {
    super(props);
    const defaultState = {
      currentStep: 1,
      bedroom: '',
      study: '',
      garage: '',
      living: '',
      kitchen: '',
      guest: '',
      units: '',
      quota: '',
    };
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    const userID = JSON.parse(localStorage.getItem('redux')).id;
    const { units } = this.state;
    axios.get(`/api/v1/users/${userID}`, { units })
      .then(response => response.data)
      .then(response => {
        if (response.code === 200) {
          this.setState({
            units: response.data.units,
            quota: (Number(response.data.units) / 30) / 6,
          });
        } else if (response.code === 401) {
          this.setState({
            errors: response.errors,
          });
        }
      });
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    // eslint-disable-next-line no-unused-vars
    this.setState = (state, callback) => { };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      bedroom, study, garage, living, kitchen, guest, units,
    } = this.state;
    const consumption = Number(bedroom)
    + Number(study)
    + Number(garage)
    + Number(living)
    + Number(kitchen)
    + Number(guest);
    const available = (units / 30) - consumption;
    const saved = Math.floor(100 - (100 * (consumption / (units / 30))));
    axios.post('/api/v1/readings', {
      bedroom, study, garage, living, kitchen, guest, consumption, available, saved,
    })
      .then(response => response.data)
      .then(response => {
        if (response.code === 400) {
          this.setState({
            errors: response.errors,
          });
        } else if (response.code === 200) {
          this.setState({
            bedroom: '',
            study: '',
            garage: '',
            living: '',
            kitchen: '',
            consumption: '',
            available: '',
            saved: '',
          });
          this.props.history.push('/readings');
        }
      });
  }

  next() {
    let { currentStep } = this.state;
    currentStep = currentStep === 6 ? 6 : currentStep + 1;
    this.setState({
      currentStep,
    });
  }

  prev() {
    let { currentStep } = this.state;
    currentStep = currentStep === 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
    });
  }

  previousButton() {
    const { currentStep } = this.state;
    if (currentStep !== 1) {
      return (
        <button
          type="button"
          id="prevBtn"
          onClick={this.prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    const { currentStep } = this.state;
    if (currentStep < 6) {
      return (
        <button
          type="button"
          id="nextBtn"
          onClick={this.next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <form id="regForm" onSubmit={this.handleSubmit}>
          <Bedroom
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            bedroom={this.state.bedroom}
          />
          <Study
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            study={this.state.study}
          />
          <Garage
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            garage={this.state.garage}
          />
          <Living
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            living={this.state.living}
          />
          <Kitchen
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            kitchen={this.state.kitchen}
          />
          <Guest
            currentStep={this.state.currentStep}
            quota={this.state.quota}
            handleChange={this.handleChange}
            guest={this.state.guest}
          />
          <div className="row justify-content-center btn-box">
            {this.previousButton()}
            {this.nextButton()}
          </div>
        </form>
      </>
    );
  }
}

ReadingForm.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(ReadingForm);
