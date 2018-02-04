import TileWMSSource from 'ol/source/tilewms'

import PropTypes from 'prop-types'
import React from 'react'
import OLSourceComponent from '../ol-source-component'

export default class TileWMS extends OLSourceComponent {
  constructor(props) {
    super(props)
  }

  _createSourceFromProps(props) {
    return new TileWMSSource(Object.assign({}, props))
  }
}

TileWMS.propTypes = {
  params: PropTypes.object.isRequired,
  url: PropTypes.string
}
