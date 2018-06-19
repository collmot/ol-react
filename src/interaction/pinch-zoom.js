import PinchZoomInteraction from 'ol/interaction/pinchzoom'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'PinchZoom',
  props => new PinchZoomInteraction({
    duration: props.duration
  }),
  {
    propTypes: {
      duration: PropTypes.number
    },
    sensitiveProps: ['duration']
  }
)
