import Collection from 'ol/collection'
import ModifyInteraction from 'ol/interaction/modify'
import Source from 'ol/source/source'
import VectorSource from 'ol/source/vector'
import PropTypes from 'prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'Modify',
  props => {
    if (props.features !== undefined) {
      return new ModifyInteraction({
        condition: props.condition,
        features: props.features
      })
    } else if (props.source !== undefined) {
      return new ModifyInteraction({
        condition: props.condition,
        source: props.source
      })
    } else {
      return undefined
    }
  },
  {
    propTypes: {
      condition: PropTypes.func,
      modifyend: PropTypes.func,
      modifystart: PropTypes.func,
      features: PropTypes.instanceOf(Collection),
      source: PropTypes.instanceOf(VectorSource)
    },
    events: ['modifyend', 'modifystart'],
    fragileProps: ['features', 'source']
  }
)
