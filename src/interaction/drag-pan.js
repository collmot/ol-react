import DragPanInteraction from 'ol/interaction/dragpan'

import OLInteraction from './ol-interaction'

export default class DragPan extends OLInteraction {
  createInteraction (props) {
    return new DragPanInteraction()
  }
}
