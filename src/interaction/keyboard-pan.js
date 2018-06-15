import KeyboardPanInteraction from 'ol/interaction/keyboardpan'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class KeyboardPan extends OLInteraction {
  createInteraction (props) {
    return new KeyboardPanInteraction({
      condition: props.condition,
      duration: props.duration,
      pixelDelta: props.pixelDelta
    })
  }
}

KeyboardPan.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  duration: PropTypes.number,
  pixelDelta: PropTypes.number
})

KeyboardPan.olProps = ['condition', 'duration', 'pixelDelta']

export default withMap(KeyboardPan)
