import { connect } from 'react-redux'

import actions from './../../actions'
import Header from './component'

function mapStateToProperties(state, ownedProperties) {
  const { books, filters } = state

  return {
    isUpdating: filters.isUpdating,
    booksAmount: books ? books.length : 0,
    isSorted: !!filters.sortBy
  }
}

function mapDispatchToProperties(dispatch, ownedProperties) {
  return {
    onAdd: (amount) => dispatch(actions.add(amount)),
    onAddThenSort: (amount) => dispatch(actions.addThenSort(amount))
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(Header)