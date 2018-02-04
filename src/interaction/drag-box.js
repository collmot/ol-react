import DragBoxInteraction from 'ol/interaction/dragbox'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class DragBox extends OLInteraction {
  createInteraction (props) {
    return new DragBoxInteraction({
      condition: props.condition
    })
  }
}

DragBox.propTypes = Object.assign({}, OLInteraction.propTypes, {
  boxdrag: PropTypes.func,
  boxend: PropTypes.func,
  boxstart: PropTypes.func,
  condition: PropTypes.func
})

DragBox.olEvents = ['boxdrag', 'boxend', 'boxstart']
DragBox.olProps = ['condition']
