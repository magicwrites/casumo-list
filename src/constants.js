const CONSTANTS = {
  ACTIONS: {
    TOGGLE_GENRE: 'FILTERS_TOGGLE_GENRE',
    TOGGLE_AUTHOR_GENDER: 'FILTERS_TOGGLE_AUTHOR_GENDER',
    UPDATE_LIST: 'UPDATE_LIST',
    EXTEND_LIST: 'EXTEND_LIST',
    START_ADDITION: 'START_ADDITION',
    START_SORTING: 'START_SORTING'
  },
  WORKER: {
    REQUESTS: {
      ADD: 'ADD',
      ADD_THEN_SORT: 'ADD_THEN_SORT',
      SORT: 'SORT'
    }
  },
  GENRES: {
    DRAMA: 'drama',
    ROMANCE: 'romance',
    ACTION: 'action',
    FANTASY: 'fantasy',
    SCIFI: 'sci-fi',
    FINANCE: 'finance',
    HORROR: 'horror'
  },
  GENDERS: {
    MALE: 'male',
    FEMALE: 'female'
  },
  FORMATS: {
    DATE: 'dddd Do of MMMM YYYY'
  }
}

export default CONSTANTS