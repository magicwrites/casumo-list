import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import booksReducer from './books/reducer';
import filtersReducer from './filters/reducer';

import Application from './application/component';

import 'react-virtualized/styles.css';
import './style.css';

const reducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer
});

const middleware = [
  thunk,
  createLogger({ collapsed: true })
];

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
