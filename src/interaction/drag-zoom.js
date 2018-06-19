import DragZoomInteraction from 'ol/interaction/dragzoom'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'DragZoom',
  props => new DragZoomInteraction({
    condition: props.condition,
    duration: props.duration,
    out: props.out
  }),
  {
    propTypes: {
      boxdrag: PropTypes.func,
      boxend: PropTypes.func,
      boxstart: PropTypes.func,
      condition: PropTypes.func,
      duration: PropTypes.number,
      out: PropTypes.bool
    },
    sensitiveProps: ['condition', 'duration', 'out'],
    events: ['boxdrag', 'boxend', 'boxstart']
  }
)
