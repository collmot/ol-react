import PinchRotateInteraction from 'ol/interaction/pinchrotate'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'PinchRotate',
  props => new PinchRotateInteraction({
    threshold: props.threshold,
    duration: props.duration
  }),
  {
    propTypes: {
      threshold: PropTypes.number,
      duration: PropTypes.number
    },
    fragileProps: ['duration', 'threshold']
  }
)
