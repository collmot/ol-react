import DragRotateInteraction from 'ol/interaction/dragrotate'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class DragRotate extends OLInteraction {
  createInteraction (props) {
    return new DragRotateInteraction({
      condition: props.condition,
      duration: props.duration
    })
  }
}

DragRotate.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  duration: PropTypes.number
})

DragRotate.olProps = ['condition', 'duration']

export default withMap(DragRotate)
