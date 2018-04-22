import CONSTANTS from './../constants'
import booksActions from './../books/actions'
import SorterWorker from './sorter.worker.js';

const sorterWorker = new SorterWorker();

function startSort(path) {
  return {
    type: CONSTANTS.ACTIONS.FILTERS_SORT,
    payload: { path }
  };
}

function filterGenre(genre) {
  return {
    type: CONSTANTS.ACTIONS.FILTERS_TOGGLE_GENRE,
    payload: { genre }
  }
}

function filterAuthorGender(gender) {
  return {
    type: CONSTANTS.ACTIONS.FILTERS_TOGGLE_AUTHOR_GENDER,
    payload: { gender }
  }
}

const sort = (path) => (dispatch, getState) => {
  dispatch(startSort(path));

  const books = getState().books;

  sorterWorker.postMessage({ books, path });
  sorterWorker.onmessage = (event) => {
    dispatch(booksActions.update(event.data))
  }
}

export default { sort, filterGenre, filterAuthorGender };
