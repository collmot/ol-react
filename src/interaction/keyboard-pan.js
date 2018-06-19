import KeyboardPanInteraction from 'ol/interaction/keyboardpan'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'KeyboardPan',
  props => new KeyboardPanInteraction({
    condition: props.condition,
    duration: props.duration,
    pixelDelta: props.pixelDelta
  }),
  {
    propTypes: {
      condition: PropTypes.func,
      duration: PropTypes.number,
      pixelDelta: PropTypes.number
    },
    fragileProps: ['condition', 'duration', 'pixelDelta']
  }
)
