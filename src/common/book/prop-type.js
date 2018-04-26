import PropTypes from 'prop-types'
import _ from 'lodash'

import CONSTANTS from './../../constants'

const propType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  genre: PropTypes.oneOf(_.values(CONSTANTS.GENRES)).isRequired,
  author: PropTypes.shape({
    gender: PropTypes.oneOf(_.values(CONSTANTS.GENDERS)).isRequired,
    name: PropTypes.string.isRequired
  })
})

export default propType