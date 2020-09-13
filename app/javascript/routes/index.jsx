import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import reducer from '../reducers/sessions';
import Readings from '../containers/Readings';
import Home from '../containers/Home';
import PrivateRoute from './privateRoute';
import AddReading from '../containers/AddReading';
import Reading from '../containers/Reading';

export const store = createStore(
  reducer, compose(persistState()),
);

export default (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addreading" component={AddReading} />
        <PrivateRoute path="/readings" exact component={Readings} />
        <Route path="/readings" component={Readings} />
        <Route path="/reading" component={Reading} />
      </Switch>
    </Router>
  </Provider>
);
