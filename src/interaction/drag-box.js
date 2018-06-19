import DragBoxInteraction from 'ol/interaction/dragbox'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'DragBox',
  props => new DragBoxInteraction({
    condition: props.condition
  }),
  {
    propTypes: {
      boxdrag: PropTypes.func,
      boxend: PropTypes.func,
      boxstart: PropTypes.func,
      condition: PropTypes.func
    },
    fragileProps: ['condition'],
    events: ['boxdrag', 'boxend', 'boxstart']
  }
)
