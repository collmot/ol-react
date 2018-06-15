import DragPanInteraction from 'ol/interaction/dragpan'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class DragPan extends OLInteraction {
  createInteraction (props) {
    return new DragPanInteraction()
  }
}

export default withMap(DragPan)
