import XYZSource from 'ol/source/xyz'
import PropTypes from 'prop-types'

import { createOLSourceComponent } from './ol-source'

export default createOLSourceComponent(
  "XYZ",
  props => new XYZSource(props),
  {
    propTypes: {
      url: PropTypes.string
    }
  }
)
