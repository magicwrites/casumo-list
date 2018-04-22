import { connect } from 'react-redux';
import Header from './component';

import actions from './../../../../actions'

function mapStateToProperties(state, ownedProperties) {
  const { books, filters } = state

  return {
    booksAmount: books ? books.length : 0,
    isSorted: !!filters.sortBy
  };
}

function mapDispatchToProperties(dispatch, ownedProperties) {
  return {
    onAdd: (amount) => dispatch(actions.add(amount)),
    onAddThenSort: (amount) => dispatch(actions.addThenSort(amount))
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(Header);