import OSMSource from 'ol/source/osm'
import PropTypes from 'prop-types'

import OLPropTypes from '../ol-prop-types'

import { createOLSourceComponent } from './ol-source'

export default createOLSourceComponent(
  "OSM",
  props => new OSMSource(props),
  {
    propTypes: {
      attributions: OLPropTypes.AttributionLike,
      cacheSize: PropTypes.number,
      crossOrigin: PropTypes.string,
      maxZoom: PropTypes.number,
      opaque: PropTypes.bool,
      url: PropTypes.string,
      wrapX: PropTypes.bool
    },
    defaultProps: {
      opaque: true,
      wrapX: true
    },
    fragileProps: [
      'attributions', 'cacheSize', 'crossOrigin', 'maxZoom', 'opaque',
      'url', 'wrapX'
    ]
  }
)
