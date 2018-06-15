import ImageLayer from 'ol/layer/image'
import PropTypes from 'prop-types'

import OLLayer from './ol-layer'

import { withMap } from '../context'

class Image extends OLLayer {
  createLayer (props) {
    return new ImageLayer({})
  }
}

export default withMap(Image)
