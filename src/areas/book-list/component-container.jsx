import { connect } from 'react-redux'

import BookList from './component'

function mapStateToProperties(state, ownedProperties) {
  const { genres, genders } = state.filters.filterBy
  const { books } = state

  return {
    books: books ? books.filter(book => {
      const isFilteredByGenre = genres.find(x => x === book.genre)
      const isFilteredByAuthorGender = genders.find(x => x === book.author.gender)

      return !isFilteredByGenre && !isFilteredByAuthorGender
    }) : books
  };
}

export default connect(mapStateToProperties, null)(BookList)