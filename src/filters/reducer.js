import CONSTANTS from './../constants';

const initialState = {
  filterBy: {
    genres: [],
    genders: []
  },
  sortBy: null,
  isUpdating: false,
}

const toggle = (items, item) => items.find(x => x === item) ? items.filter(x => x !== item) : [...items, item]

export default function filtersReducer(state = initialState, action) {
  let updatedState = state;

  switch (action.type) {

    case CONSTANTS.ACTIONS.FILTERS_SORT:
      updatedState = { ...state, sortBy: action.payload.path, isUpdating: true };
      break;

    case CONSTANTS.ACTIONS.FILTERS_TOGGLE_GENRE:
      updatedState = {
        ...state,
        filterBy: {
          ...state.filterBy,
          genres: toggle(state.filterBy.genres, action.payload.genre)
        }
      };
      break;

    case CONSTANTS.ACTIONS.FILTERS_TOGGLE_AUTHOR_GENDER:
      updatedState = {
        ...state,
        filterBy: {
          ...state.filterBy,
          genders: toggle(state.filterBy.genders, action.payload.gender)
        }
      };
      break;

    case CONSTANTS.ACTIONS.BOOKS_UPDATE:
      updatedState = { ...state, isUpdating: false };
      break;

    default:
      updatedState = state;
      break;
  }

  return updatedState;
}
