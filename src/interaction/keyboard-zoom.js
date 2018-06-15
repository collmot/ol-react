import KeyboardZoomInteraction from 'ol/interaction/keyboardzoom'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class KeyboardZoom extends OLInteraction {
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

export default withMap(KeyboardZoom)
