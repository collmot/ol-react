import KeyboardZoomInteraction from 'ol/interaction/keyboardzoom'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class KeyboardZoom extends OLInteraction {
  createInteraction (props) {
    return new KeyboardZoomInteraction({
      condition: props.condition,
      delta: props.delta,
      duration: props.duration
    })
  }
}

KeyboardZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  delta: PropTypes.number,
  duration: PropTypes.number
})

KeyboardZoom.olProps = ['condition', 'duration', 'pixelDelta']
