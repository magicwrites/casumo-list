import { connect } from 'react-redux'

import actions from './../../actions'
import Sorters from './component'

function mapStateToProperties(state, ownedProperties) {
  const { sortBy, isUpdating } = state.filters

  return {
    sortBy,
    isUpdating
  }
}

function mapDispatchToProperties(dispatch, ownedProperties) {
  return {
    onSort: (path) => dispatch(actions.sort(path)),
  }
}

export default connect(mapStateToProperties, mapDispatchToProperties)(Sorters)