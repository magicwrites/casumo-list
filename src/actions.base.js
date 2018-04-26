import CONSTANTS from './constants'

// info: Splitted from actions file mainly for testing.
//       Seems like having a worker instance in jest
//       environment did not went well, so I have
//       modularized further.

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

export default { updateList, extendList, toggleGenre, toggleAuthorGender, startSorting, startAddition }