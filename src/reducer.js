import { combineReducers } from 'redux';

import CONSTANTS from './constants'

// info: A proper thing to do would be to split reducers into
//       separate files, but I let myself store everything here
//       since it is such a small application, and otherwise
//       I would have to create some kind of a nice directory
//       structure for those.
//
//       So I opted for `Less directories` way, and this
//       reducers file here is still pretty readable I think.

const toggleFilter = (items, item) => {
  return items.find(x => x === item) ? items.filter(x => x !== item) : [...items, item]
}

const createFilterByReducer = toggleAction => (state = [], action) => {
  switch (action.type) {
    case toggleAction:
      return toggleFilter(state, action.payload.filter)
    default:
      return state
  }
}

const filterByReducer = combineReducers({
  genres: createFilterByReducer(CONSTANTS.ACTIONS.TOGGLE_GENRE),
  genders: createFilterByReducer(CONSTANTS.ACTIONS.TOGGLE_AUTHOR_GENDER),
})

const sortByReducer = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.START_SORTING:
      return action.payload.path
    default:
      return state
  }
}

const updateReducer = (state = false, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.START_SORTING:
      return 'sort';
    case CONSTANTS.ACTIONS.START_ADDITION:
      return 'add';
    case CONSTANTS.ACTIONS.UPDATE_LIST:
    case CONSTANTS.ACTIONS.EXTEND_LIST:
      return false;
    default:
      return state
  }
}

const filtersReducer = combineReducers({
  filterBy: filterByReducer,
  sortBy: sortByReducer,
  update: updateReducer
})

const booksReducer = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.UPDATE_LIST:
      return action.payload.books;
    case CONSTANTS.ACTIONS.EXTEND_LIST:
      return [...action.payload.books, ...(state || [])];
    default:
      return state
  }
}

const reducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer
});

export default reducer