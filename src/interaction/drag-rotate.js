import DragRotateInteraction from 'ol/interaction/dragrotate'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'DragRotate',
  props => new DragRotateInteraction({
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
