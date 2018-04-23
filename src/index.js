import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Application from './application/component';

import actions from './actions'
import worker from './worker'
import reducer from './reducer'

import 'react-virtualized/styles.css' // info: expected to be imported once

const middleware = [
  thunk,
  createLogger({ collapsed: true })
];

const store = createStore(reducer, applyMiddleware(...middleware));

worker.connect(store.dispatch)

store.dispatch(actions.add(125000))

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
