import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed, faLaptop, faCar, faCouch, faUtensils, faUserClock,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import {
  CircularProgressbarWithChildren, buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circle from '../graph/OutputGraph';

class DailyStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reading:
        {
          bedroom: '',
          living: '',
          study: '',
          guest: '',
          kitchen: '',
          saved: '',
          available: '',
          consumption: '',
        },
      user: {
        units: '',
      },
    };
  }

  async componentDidMount() {
    const { userId, id } = this.props;
    const { units } = this.state;
    try {
      const [userData, readingData] = await axios.all([
        axios.get(`/api/v1/users/${userId}`, { units }),
        axios.get(`/api/v1/user/${userId}/reading/${id}`, { units }),
      ]);
      if (userData.data.code === 200 && userData.data.code === 200) {
        this.setState({
          reading: readingData.data.data,
          user: userData.data.data,
        });
      }
    } catch (err) {
      throw err.message;
    }
  }

  render() {
    const { reading, user } = this.state;
    const quota = (Number(user.units) / 30);
    const consumptionPc = Math.floor(((Number(reading.consumption)) / quota) * 100);
    const availablePC = Math.floor(((Number(reading.available)) / quota) * 100);
    return (
      <>
        <div>
          <div className="daily-stats" index={reading.id}>
            <div className="row reading-header">
              <h4>{moment(reading.created_at).format('DD MMM YYYY')}</h4>
            </div>
            <div className="row graph-box">
              <div className="row">
                <div className="col">
                  <Circle>
                    <CircularProgressbarWithChildren
                      value={consumptionPc}
                      strokeWidth={5}
                      styles={buildStyles({
                        textColor: '#4b627a',
                        pathColor: '#94e490',
                        trailColor: '#D6D6D6',
                      })}
                    >
                      <div className="circle-text">
                        <strong className="circle-strong">
                          {reading.consumption}
                        </strong>
                        <br />
                        {' '}
                        Units
                      </div>
                    </CircularProgressbarWithChildren>
                  </Circle>
                  <div className="text-center">
                    <h6>Total</h6>
                    <h6>Consumption</h6>
                  </div>
                </div>
                <div className="col">
                  <Circle>
                    <CircularProgressbarWithChildren
                      value={availablePC}
                      strokeWidth={5}
                      styles={buildStyles({
                        textColor: '#4b627a',
                        pathColor: '#94e490',
                        trailColor: '#D6D6D6',
                      })}
                    >
                      <div className="circle-text">
                        <strong className="circle-strong">
                          {reading.available}
                        </strong>
                        <br />
                        {' '}
                        Units
                      </div>
                    </CircularProgressbarWithChildren>
                  </Circle>
                  <div className="text-center">
                    <h6>Available</h6>
                    <h6>Units Left</h6>
                  </div>
                </div>
                <div className="col">
                  <Circle>
                    <CircularProgressbarWithChildren
                      value={reading.saved}
                      strokeWidth={5}
                      styles={buildStyles({
                        textColor: '#4b627a',
                        pathColor: '#94e490',
                        trailColor: '#D6D6D6',
                      })}
                    >
                      <div className="circle-text">
                        <strong className="circle-strong">
                          {reading.saved}
                        </strong>
                        <br />
                        {' '}
                        %
                      </div>
                    </CircularProgressbarWithChildren>
                  </Circle>
                  <div className="text-center">
                    <h6>
                      Saved
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="rows">
              <div className="row">
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faBed} className="dayStat" size="4x" />
                    </div>
                    <div className="col">
                      <p>Bedroom</p>
                      <h4>
                        {reading.bedroom}
                        {' '}
                        Units
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faLaptop} className="dayStat" size="4x" />
                    </div>
                    <div className="col">
                      <p>Study</p>
                      <h4>
                        {reading.study}
                        {' '}
                        Units
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faCar} className="dayStat" size="4x" />
                    </div>
                    <div className="col">
                      <p>Garage</p>
                      <h4>
                        {reading.garage}
                        {' '}
                        Units
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faCouch} className="dayStat" size="4x" />
                    </div>
                    <div className="col">
                      <p>Living</p>
                      <h4>
                        {reading.living}
                        {' '}
                        units
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faUtensils} className="dayStat" size="4x" />
                    </div>
                    <div className="col">
                      <p>Kitchen</p>
                      <h4>
                        {reading.kitchen}
                        {' '}
                        Units
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col room-card">
                  <div className="row">
                    <div className="col">
                      <FontAwesomeIcon icon={faUserClock} className="dayStat" size="4x" />
                    </div>
                    <div className="col">
                      <p>Guest</p>
                      <h4>
                        {reading.guest}
                        {' '}
                        Units
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

DailyStats.propTypes = {
  userId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DailyStats;
