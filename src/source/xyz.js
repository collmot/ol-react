import XZYSource from 'ol/source/xyz'
import PropTypes from 'prop-types'
import React from 'react'

import OLSource from './ol-source'

export default class XYZ extends OLSource {
  createSource(props) {
    return new XYZSource(Object.assign({}, props))
  }
}

XYZ.propTypes = {
  url: PropTypes.string
}
