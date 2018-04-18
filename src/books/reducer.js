import _ from 'lodash';
import faker from 'faker';
import CONSTANTS from './../constants'

const randomizeBook = (x, i) => ({
  id: i + 1,
  name: _.capitalize(faker.lorem.words()),
  publishedAt: faker.date.past(),
  genre: _.sample(CONSTANTS.BOOK.GENRES),
  author: {
    gender: Math.random() > 0.5 ? CONSTANTS.GENDERS.MALE : CONSTANTS.GENDERS.FEMALE,
    name: faker.name.findName()
  }
});

const initialState = _.range(25000).map(randomizeBook);

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
