import DragPanInteraction from 'ol/interaction/dragpan'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'DragPan',
  props => new DragPanInteraction()
)
