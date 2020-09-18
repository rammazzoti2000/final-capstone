import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrosshairs,
  faEnvelope,
  faUser,
  faCog,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'; // eslint-disable-next-line import/no-named-as-default
import SignoutBtn from '../home/Signout';

const Settings = () => {
  const userName = JSON.parse(localStorage.getItem('redux')).name;
  return (
    <section className="more">
      <div className="row more-list">
        <div className="col-4 container">
          <div className="img-circle hor">
            <img src={`https://robohash.org/${userName}?set=set2`} alt="Profile" />
          </div>
        </div>
        <div className="col-8 container profile-content">
          <strong className="profile-name">{userName}</strong>
        </div>
      </div>
      <div className="row more-items">
        <div className="col-4 container more-icons">
          <FontAwesomeIcon icon={faCrosshairs} className="more-icon" />
        </div>
        <div className="col-8 container more-texts">
          <strong className="more-text">Your Target</strong>
        </div>
      </div>
      <div className="row more-items">
        <div className="col-4 container more-icons">
          <FontAwesomeIcon icon={faEnvelope} className="more-icon" />
        </div>
        <div className="col-8 container more-texts">
          <strong className="more-text">Mailing List</strong>
        </div>
      </div>
      <div className="row more-items">
        <div className="col-4 container more-icons">
          <FontAwesomeIcon icon={faUser} className="more-icon" />
        </div>
        <div className="col-8 container more-texts">
          <strong className="more-text">Your Profile</strong>
        </div>
      </div>
      <div className="row more-items">
        <div className="col-4 container more-icons">
          <FontAwesomeIcon icon={faCog} className="more-icon" />
        </div>
        <div className="col-8 container more-texts">
          <strong className="more-text">Settings</strong>
        </div>
      </div>
      <div className="row more-items">
        <div className="col-4 container more-icons">
          <FontAwesomeIcon icon={faInfoCircle} className="more-icon" />
        </div>
        <div className="col-8 container more-texts">
          <strong className="more-text">Help</strong>
        </div>
      </div>
      <div className="row more-items">
        <SignoutBtn />
      </div>
    </section>
  );
};

export default Settings;
