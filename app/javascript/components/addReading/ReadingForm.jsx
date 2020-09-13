/* eslint-disable no-underscore-dangle, no-alert */
import React from 'react';
import {
  Bedroom, Study, Garage, Living, Kitchen, Guest,
} from './Rooms';

class ReadingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      bedroom: '',
      study: '',
      garage: '',
      living: '',
      kitchen: '',
      guest: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
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
      bedroom, study, garage, living, kitchen, guest,
    } = this.state;
    alert(`Your registration detail: \n
           Bedroom: ${bedroom}\n
           Study: ${study} \n
           Garage: ${garage} \n
           Living: ${living} \n
           Kitchen: ${kitchen} \n
           Guest: ${guest}`);
  }

  _next() {
    let { currentStep } = this.state;
    switch (currentStep) {
      case 2:
        currentStep = 3;
        break;
      case 3:
        currentStep = 4;
        break;
      case 4:
        currentStep = 5;
        break;
      case 5:
        currentStep = 6;
        break;
      default:
        currentStep += 1;
    }

    this.setState({
      currentStep,
    });
  }

  _prev() {
    let { currentStep } = this.state;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
    });
  }

  /*
  * the functions for our button
  */
  previousButton() {
    const { currentStep } = this.state;
    if (currentStep !== 1) {
      return (
        <button
          type="button"
          id="prevBtn"
          onClick={this._prev}
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
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    const {
      currentStep, bedroom, study, garage, living, kitchen, guest,
    } = this.state;
    let { num } = this.props;

    return (
      <>
        <form id="regForm" onSubmit={this.handleSubmit}>
          <Bedroom
            currentStep={currentStep}
            handleChange={this.handleChange}
            bedroom={bedroom}
          />
          <Study
            currentStep={currentStep}
            handleChange={this.handleChange}
            study={study}
          />
          <Garage
            currentStep={currentStep}
            handleChange={this.handleChange}
            garage={garage}
          />
          <Living
            currentStep={currentStep}
            handleChange={this.handleChange}
            living={living}
          />
          <Kitchen
            currentStep={currentStep}
            handleChange={this.handleChange}
            kitchen={kitchen}
          />
          <Guest
            currentStep={currentStep}
            handleChange={this.handleChange}
            guest={guest}
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

export default ReadingForm;
