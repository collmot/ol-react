import DragRotateAndZoomInteraction from 'ol/interaction/dragrotateandzoom'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class DragRotateAndZoom extends OLInteraction {
  createInteraction (props) {
    return new DragRotateAndZoomInteraction({
      condition: props.condition,
      duration: props.duration
    })
  }
}

DragRotateAndZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  duration: PropTypes.number
})

DragRotateAndZoom.olProps = ['condition', 'duration']

export default withMap(DragRotateAndZoom)
