import TileLayer from 'ol/layer/tile'

import { createOLLayerComponent } from './ol-layer'

export default createOLLayerComponent(
  'Tile',
  props => new TileLayer({})
)
