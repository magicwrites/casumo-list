import { connect } from 'react-redux';
import actions from './actions';
import Filters from './component';

function mapStateToProperties(state, ownedProperties) {
  return {
    filters: state.filters
  };
}

function mapDispatchToProperties(dispatch, ownedProperties) {
  return {
    onSortByBookName: () => dispatch(actions.sort('name')),
    onSortByBookAuthor: () => dispatch(actions.sort('author.name')),
    onFilterByBookGenre: (genre) => dispatch(actions.filterGenre(genre)),
    onFilterByAuthorGender: (gender) => dispatch(actions.filterAuthorGender(gender))
  };
}

export default connect(mapStateToProperties, mapDispatchToProperties)(Filters);
