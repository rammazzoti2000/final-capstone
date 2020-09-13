import React from 'react';
import InputGraph from '../graph/InputGraph'

export function Bedroom(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
    <>
      <div className="row justify-content-center reading-header">
        <h4>Take your Bedroom Reading</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.bedroom} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="bedroom"
          name="bedroom"
          type="number"
          placeholder="Enter bedroom reading"
          value={props.bedroom}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
}

export function Study(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return(
    <>
      <div className="row justify-content-center reading-header">
        <h4>Take your Study room Reading</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.study} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="study"
          name="study"
          type="number"
          placeholder="Enter study reading"
          value={props.study}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
}

export function Garage(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <>
      <div className="row justify-content-center reading-header">
        <h4>Take your Garage Reading</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.garage} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="garage"
          name="garage"
          type="number"
          placeholder="Enter garage reading"
          value={props.garage}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
}

export function Living(props) {
  if (props.currentStep !== 4) {
    return null
  }
  return(
    <>
      <div className="row justify-content-center reading-header">
        <h4>Take your Living Room Reading</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.living} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="living"
          name="living"
          type="number"
          placeholder="Enter living reading"
          value={props.living}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
}

export function Kitchen(props) {
  if (props.currentStep !== 5) {
    return null
  }
  return(
    <>
      <div className="row justify-content-center reading-header">
        <h4>Take your Kitchen Reading</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.kitchen} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="kitchen"
          name="kitchen"
          type="number"
          placeholder="Enter kitchen reading"
          value={props.kitchen}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
}

export function Guest(props) {
  if (props.currentStep !== 6) {
    return null;
  }
  return(
    <>
      <div className="row justify-content-center reading-header">
        <h4>Take your Guest Room Reading</h4>
      </div>
      <div className="row justify-content-center">
        <div className="graph-content">
          <InputGraph strokeWidth={2} percentage={props.guest} />
        </div>
      </div>
      <div className="row justify-content-center reading-input">
        <input
          className="form-control"
          id="guest"
          name="guest"
          type="number"
          placeholder="Enter guest reading"
          value={props.guest}
          onChange={props.handleChange}
        />
      </div>
    <button className="btn btn-success btn-block">Submit</button>
    </>
  );
}
