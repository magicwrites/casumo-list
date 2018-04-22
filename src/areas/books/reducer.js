import CONSTANTS from './../../constants';

const initialState = null

export default function booksReducer(state = initialState, action) {
  let updatedState = state;

  switch (action.type) {

    case CONSTANTS.ACTIONS.UPDATE_LIST:
      updatedState = action.payload.books;
      break;

    default:
      updatedState = state;
      break;
  }

  return updatedState;
}
