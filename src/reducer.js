import { combineReducers } from 'redux';

import booksReducer from './areas/books/reducer';
import filtersReducer from './areas/filters/reducer';

const reducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer
});

export default reducer