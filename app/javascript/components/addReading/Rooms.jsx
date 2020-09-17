/* eslint-disable react/require-default-props, react/prop-types */
/* eslint-disable react/destructuring-assignment, react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import InputGraph from '../graph/InputGraph';

export function Bedroom(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  const quota = Number(props.quota);
  const units = !props.bedroom ? '' : (Number(props.bedroom) / quota) * 100;
  return (
    <>
      <div className="row justify-content-center reading-header">
        <h4>Take your Bedroom Reading</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.bedroom} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="bedroom"
          name="bedroom"
          type="number"
          placeholder={`Enter bedroom units between 1 to ${Math.floor(quota)}`}
          value={props.bedroom}
          onChange={props.handleChange}
          required
        />
      </div>
    </>
  );
}

Bedroom.propTypes = {
  bedroom: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export function Study(props) {
  if (props.currentStep !== 2) {
    return null;
  }

  const units = !props.study ? '' : (Number(props.study) / Number(props.quota)) * 100;
  return (
    <>
      <div className="row justify-content-center reading-header">
        <h4>Take your Study room Reading</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.study} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="study"
          name="study"
          type="number"
          placeholder={`Enter study room units between 1 to ${Math.floor(props.quota)}`}
          value={props.study}
          onChange={props.handleChange}
          required
        />
      </div>
    </>
  );
}

Study.propTypes = {
  study: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export function Garage(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  const units = !props.garage ? '' : (Number(props.garage) / Number(props.quota)) * 100;
  return (
    <>
      <header className="row justify-content-center reading-header">
        <h4>Take your Garage Reading</h4>
      </header>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.garage} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="garage"
          name="garage"
          type="number"
          placeholder={`Enter garage units between 1 to ${Math.floor(props.quota)}`}
          value={props.garage}
          onChange={props.handleChange}
          required
        />
      </div>
    </>
  );
}

Garage.propTypes = {
  garage: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export function Living(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  const units = !props.living ? '' : (Number(props.living) / Number(props.quota)) * 100;
  return (
    <>
      <header className="row justify-content-center reading-header">
        <h4>Take your Living Room Reading</h4>
      </header>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.living} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="living"
          name="living"
          type="number"
          placeholder={`Enter living room units between 1 to ${Math.floor(props.quota)}`}
          value={props.living}
          onChange={props.handleChange}
          required

        />
      </div>
    </>
  );
}

Living.propTypes = {
  living: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export function Kitchen(props) {
  if (props.currentStep !== 5) {
    return null;
  }
  const units = !props.kitchen ? '' : (Number(props.kitchen) / Number(props.quota)) * 100;
  return (
    <>
      <header className="row justify-content-center reading-header">
        <h4>Take your Kitchen Reading</h4>
      </header>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.kitchen} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="kitchen"
          name="kitchen"
          type="number"
          placeholder={`Enter kitchen units between 1 to ${Math.floor(props.quota)}`}
          value={props.kitchen}
          onChange={props.handleChange}
          required
        />
      </div>
    </>
  );
}

Kitchen.propTypes = {
  kitchen: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export function Guest(props) {
  if (props.currentStep !== 6) {
    return null;
  }
  const units = !props.guest ? '' : (Number(props.guest) / Number(props.quota)) * 100;
  return (
    <>
      <header className="row justify-content-center reading-header">
        <h4>Take your Guest Room Reading</h4>
      </header>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={units} display={props.guest} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="guest"
          name="guest"
          type="number"
          placeholder={`Enter guest room units between 1 to ${Math.floor(props.quota)}`}
          value={props.guest}
          onChange={props.handleChange}
          required
        />
      </div>
      <button className="btn btn-success btn-block">Submit</button>
    </>
  );
}

Guest.propTypes = {
  guest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  quota: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
