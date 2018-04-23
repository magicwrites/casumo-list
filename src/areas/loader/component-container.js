import { connect } from 'react-redux'

import Loader from './component'

function mapStateToProperties(state, ownedProperties) {
  return {
    isUpdating: state.filters.isUpdating
  }
}

export default connect(mapStateToProperties, null)(Loader)
