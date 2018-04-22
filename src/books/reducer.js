import CONSTANTS from './../constants';
import { randomizeBooks } from './randomizer';

const initialState = randomizeBooks(250000)

export default function booksReducer(state = initialState, action) {
  let updatedState = state;

  switch (action.type) {

    case CONSTANTS.ACTIONS.BOOKS_UPDATE:
      updatedState = action.payload.books;
      break;

    default:
      updatedState = state;
      break;
  }

  return updatedState;
}
