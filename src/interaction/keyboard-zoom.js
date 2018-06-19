import KeyboardZoomInteraction from 'ol/interaction/keyboardzoom'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'KeyboardZoom',
  props => new KeyboardZoomInteraction({
    condition: props.condition,
    delta: props.delta,
    duration: props.duration
  }),
  {
    propTypes: {
      condition: PropTypes.func,
      delta: PropTypes.number,
      duration: PropTypes.number
    },
    sensitiveProps: ['condition', 'duration', 'pixelDelta'],
  }
)
