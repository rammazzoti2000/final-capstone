import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import reducer from '../reducers/sessions';
import Home from '../containers/Home';
import Readings from '../containers/Readings';
import AddReading from '../containers/AddReading';
import Reading from '../containers/Reading';
import Report from '../containers/Report';

const store = createStore(
  reducer, compose(persistState()),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export default (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addreading" component={AddReading} />
        <Route path="/readings" component={Readings} />
        <Route path="/report" component={Report} />
        <Route path="user/:userId/reading/:id" component={Reading} />
      </Switch>
    </Router>
  </Provider>
);

export { store };
