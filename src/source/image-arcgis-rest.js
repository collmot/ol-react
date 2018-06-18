import Source from 'ol/source/imagearcgisrest'
import PropTypes from 'prop-types'

import { createOLSourceComponent } from './ol-source'

export default createOLSourceComponent(
  "ImageArcGISRest",
  props => new Source(props),
  {
    defaultProps: {
      ratio: 1
    },
    propTypes: {
      ratio: PropTypes.number,
      url: PropTypes.string.isRequired
    }
  }
)
