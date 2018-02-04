import PinchZoomInteraction from 'ol/interaction/pinchzoom'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class PinchZoom extends OLInteraction {
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
