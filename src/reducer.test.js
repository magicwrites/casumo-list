import reducer from './reducer'
import actions from './actions.base'
import * as domain from './domain'

import CONSTANTS from './constants'

// info: Each individual sub-reducer could and SHOULD be tested,
//       but I have given myself liberty of storing everything
//       in a single file, so I test everything as a whole
//
//       Also, I skipped out the simpler ones just to save time.

const someTestState = {
  books: [],
  filters: {
    filterBy: {
      genres: [CONSTANTS.GENRES.HORROR, CONSTANTS.GENRES.ROMANCE],
      genders: [CONSTANTS.GENDERS.FEMALE],
    },
    sortBy: null,
    update: false
  }
}

const areBookListsEqual = (a, b) => {
  return a.reduce((isThere, book) => {
    return isThere ? !!b.find(x => x.id === book.id) : false
  }, true)
}

describe('books reducer', () => {
  it('should be able to update (aka replace) list', () => {
    const state = { ...someTestState }
    const books = domain.randomizeBooks(3)
    const action = actions.updateList(books)

    const stateUpdated = reducer(state, action)
    const areAllBooksInState = areBookListsEqual(books, stateUpdated.books)

    expect(areAllBooksInState).toBe(true)
  })

  it('should be able to extend (not replace) list', () => {
    const books = domain.randomizeBooks(3)
    const state = { ...someTestState, books }
    const booksExtension = domain.randomizeBooks(2)
    const action = actions.extendList(books)

    const stateUpdated = reducer(state, action)
    const areAllBooksInState = areBookListsEqual([ ...books, ...booksExtension ], stateUpdated.books)

    expect(areAllBooksInState).toBe(true)
  })
})

const areGenreListsEqual = (a, b) => {
  return a.reduce((isThere, genre) => {
    return isThere ? !!b.find(x => x === genre) : false
  }, true)
}

describe('filters reducer toggling', () => {
  it('should add filter if it wasnt there previously', () => {
    const state = { ...someTestState }
    const action = actions.toggleGenre(CONSTANTS.GENRES.FINANCE)

    const stateUpdated = reducer(state, action)

    const expectedGenres = [ ...state.filters.filterBy.genres, CONSTANTS.GENRES.FINANCE ]
    const hasAllExpectedGenres = areGenreListsEqual(expectedGenres, stateUpdated.filters.filterBy.genres)

    expect(hasAllExpectedGenres).toBe(true)
  })

  it('should remove filter if it was there previously', () => {
    const state = { ...someTestState }
    const action = actions.toggleGenre(CONSTANTS.GENRES.HORROR)

    const stateUpdated = reducer(state, action)

    const expectedGenres = state.filters.filterBy.genres.filter(x => x !== CONSTANTS.GENRES.HORROR)
    const hasAllExpectedGenres = areGenreListsEqual(expectedGenres, stateUpdated.filters.filterBy.genres)

    expect(hasAllExpectedGenres).toBe(true)
  })
})

