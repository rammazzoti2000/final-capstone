import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import reducer from '../reducers/sessions';
import Readings from '../containers/Readings';
import Home from '../containers/Home';

export const store = createStore(
  reducer, compose(persistState()),
);

export default (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/readings" exact component={Readings} />
      </Switch>
    </Router>
  </Provider>
);
