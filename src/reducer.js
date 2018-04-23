import { combineReducers } from 'redux';

import CONSTANTS from './constants'

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

const isUpdatingReducer = (state = false, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.START_SORTING:
    case CONSTANTS.ACTIONS.START_ADDITION:
      return true;
    case CONSTANTS.ACTIONS.UPDATE_LIST:
      return false;
    default:
      return state
  }
}

const filtersReducer = combineReducers({
  filterBy: filterByReducer,
  sortBy: sortByReducer,
  isUpdating: isUpdatingReducer
})

const booksReducer = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIONS.UPDATE_LIST:
      return action.payload.books;
    default:
      return state
  }
}

const reducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer
});

export default reducer