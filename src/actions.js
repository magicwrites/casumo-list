import CONSTANTS from './constants'
import worker from './worker'

function updateList(books) {
  return {
    type: CONSTANTS.ACTIONS.UPDATE_LIST,
    payload: { books }
  };
}

function extendList(books) {
  return {
    type: CONSTANTS.ACTIONS.EXTEND_LIST,
    payload: { books }
  };
}

function startAddition(amount) {
  return {
    type: CONSTANTS.ACTIONS.START_ADDITION,
    payload: { amount }
  };
}

function startSorting(path) {
  return {
    type: CONSTANTS.ACTIONS.START_SORTING,
    payload: { path }
  };
}

function toggleGenre(genre) {
  return {
    type: CONSTANTS.ACTIONS.TOGGLE_GENRE,
    payload: { filter: genre }
  }
}

function toggleAuthorGender(gender) {
  return {
    type: CONSTANTS.ACTIONS.TOGGLE_AUTHOR_GENDER,
    payload: { filter: gender }
  }
}

const add = amount => dispatch => {
  dispatch(startAddition(amount));

  const payload = { amount }

  worker.postMessage({ payload, request: CONSTANTS.WORKER.REQUESTS.ADD })
}

const addThenSort = amount => (dispatch, getState) => {
  dispatch(startAddition(amount));

  const state = getState()
  const { books, filters } = state
  const payload = { amount, books, path: filters.sortBy }

  worker.postMessage({ payload, request: CONSTANTS.WORKER.REQUESTS.ADD_THEN_SORT })
}

const sort = path => (dispatch, getState) => {
  dispatch(startSorting(path));

  const state = getState()
  const { books } = state
  const payload = { books, path }

  worker.postMessage({ payload, request: CONSTANTS.WORKER.REQUESTS.SORT })
}

export default { updateList, extendList, add, sort, addThenSort, toggleGenre, toggleAuthorGender };
