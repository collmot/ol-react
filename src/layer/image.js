import ImageLayer from 'ol/layer/image'

import { createOLLayerComponent } from './ol-layer'

export default createOLLayerComponent(
  'Image',
  props => new ImageLayer({})
)
