import { connect } from 'react-redux'

import actions from './../../actions'
import Filters from './component'

function mapStateToProperties(state, ownedProperties) {
  return {
    filters: state.filters.filterBy
  }
}

function mapDispatchToProperties(dispatch, ownedProperties) {
  return {
    onFilterByBookGenre: (genre) => dispatch(actions.toggleGenre(genre)),
    onFilterByAuthorGender: (gender) => dispatch(actions.toggleAuthorGender(gender))
  }
}

export default connect(mapStateToProperties, mapDispatchToProperties)(Filters)
