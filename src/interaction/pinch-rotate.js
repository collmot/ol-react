import PinchRotateInteraction from 'ol/interaction/pinchrotate'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class PinchRotate extends OLInteraction {
  createInteraction (props) {
    return new PinchRotateInteraction({
      threshold: props.threshold,
      duration: props.duration
    })
  }
}

PinchRotate.propTypes = Object.assign({}, OLInteraction.propTypes, {
  threshold: PropTypes.number,
  duration: PropTypes.number
})

PinchRotate.olProps = ['duration', 'threshold']
