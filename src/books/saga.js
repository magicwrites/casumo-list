import { put, takeLatest, select } from 'redux-saga/effects';
import constants from './../constants';
import actions from './actions';
import workerSort from './worker-sort';

const sortWorker = new Worker(workerSort);



function* sort(action) {
  const books = yield select(state => state.books)

  debugger;

  sortWorker.postMessage(books);
  sortWorker.onmessage = (event) => {
    put(actions.update(event.data))
  }
}

function* saga() {
  yield takeLatest(constants.ACTIONS.FILTERS_SORT, sort);
}

export default saga;