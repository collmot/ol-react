import TileLayer from 'ol/layer/tile'
import PropTypes from 'prop-types'
import React from 'react'

import { withMap } from '../context'
import OLLayer from './ol-layer'

class Tile extends OLLayer {
  createLayer (props) {
    return new TileLayer({})
  }
}

export default withMap(Tile)
