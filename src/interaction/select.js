import SelectInteraction from 'ol/interaction/select'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'Select',
  props => new SelectInteraction({
    condition: props.condition
  }),
  {
    propTypes: {
      condition: PropTypes.func,
      select: PropTypes.func
    },
    events: ['select'],
    sensitiveProps: ['condition']
  }
)
