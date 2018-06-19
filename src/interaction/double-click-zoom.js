import DoubleClickZoomInteraction from 'ol/interaction/doubleclickzoom'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'DoubleClickZoom',
  props => new DoubleClickZoomInteraction({
    delta: props.delta,
    duration: props.duration
  }),
  {
    propTypes: {
      delta: PropTypes.number,
      duration: PropTypes.number
    },
    sensitiveProps: ['delta', 'duration']
  }
)
