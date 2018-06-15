import TileWMSSource from 'ol/source/tilewms'

import PropTypes from 'prop-types'
import React from 'react'

import OLSource from './ol-source'

export default class TileWMS extends OLSource {
  createSource(props) {
    return new TileWMSSource(Object.assign({}, props))
  }
}

TileWMS.propTypes = {
  params: PropTypes.object.isRequired,
  url: PropTypes.string
}
