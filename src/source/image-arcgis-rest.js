import BaseLayer from 'ol/layer/base'
import Source from 'ol/source/imagearcgisrest'

import PropTypes from 'prop-types'

import OLComponent from '../ol-component'
import * as interaction from '../interaction'

import OLSource from './ol-source'

export default class ImageArcGISRest extends OLSource {
  createSource (props) {
    return new Source(Object.assign({}, props))
  }
}

ImageArcGISRest.propTypes = {
  ratio: PropTypes.number,
  url: PropTypes.string.isRequired
}

ImageArcGISRest.defaultProps = {
  ratio: 1
}
