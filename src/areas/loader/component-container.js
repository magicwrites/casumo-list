import { connect } from 'react-redux'

import Loader from './component'

function mapStateToProperties(state, ownedProperties) {
  return {
    update: state.filters.update
  }
}

export default connect(mapStateToProperties, null)(Loader)
