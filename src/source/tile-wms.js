import TileWMSSource from 'ol/source/tilewms'
import PropTypes from 'prop-types'

import { createOLSourceComponent } from './ol-source'

export default createOLSourceComponent(
  "TileWMS",
  props => new TileWMSSource(props),
  {
    propTypes: {
      params: PropTypes.object.isRequired,
      url: PropTypes.string
    }
  }
)
