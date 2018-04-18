import CONSTANTS from './../constants'

function update(books) {
  return {
    type: CONSTANTS.ACTIONS.BOOKS_UPDATE,
    payload: { books }
  };
}

export default { update };
