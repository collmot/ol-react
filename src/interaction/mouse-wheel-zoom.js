import MouseWheelZoomInteraction from 'ol/interaction/mousewheelzoom'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'MouseWheelZoom',
  props => new MouseWheelZoomInteraction({
    duration: props.duration,
    useAnchor: props.useAnchor
  }),
  {
    propTypes: {
      duration: PropTypes.number,
      useAnchor: PropTypes.bool
    },
    fragileProps: ['duration', 'useAnchor']
  }
)
