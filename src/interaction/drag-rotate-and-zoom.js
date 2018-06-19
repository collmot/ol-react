import DragRotateAndZoomInteraction from 'ol/interaction/dragrotateandzoom'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'DragRotateAndZoom',
  props => new DragRotateAndZoomInteraction({
    condition: props.condition,
    duration: props.duration
  }),
  {
    propTypes: {
      condition: PropTypes.func,
      duration: PropTypes.number
    },
    fragileProps: ['condition', 'duration']
  }
)
