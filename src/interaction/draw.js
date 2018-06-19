import DrawInteraction from 'ol/interaction/draw'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'Draw',
  props => new DrawInteraction({
    type: props.type,
    geometryFunction: props.geometryFunction
  }),
  {
    propTypes: {
      drawend: PropTypes.func,
      drawstart: PropTypes.func,
      type: PropTypes.string.isRequired,
      geometryFunction: PropTypes.func
    },
    fragileProps: ['type', 'geometryFunction'],
    events: ['drawend', 'drawstart']
  }
)
