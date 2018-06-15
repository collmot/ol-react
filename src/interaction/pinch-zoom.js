import PinchZoomInteraction from 'ol/interaction/pinchzoom'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class PinchZoom extends OLInteraction {
  createInteraction (props) {
    return new PinchZoomInteraction({
      duration: props.duration
    })
  }
}

PinchZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  duration: PropTypes.number
})

PinchZoom.olProps = ['duration']

export default withMap(PinchZoom)
