import XZYSource from 'ol/source/xyz'
import PropTypes from 'prop-types'
import React from 'react'

import OLSourceComponent from '../ol-source-component'

export default class XYZ extends OLSourceComponent {
  constructor(props) {
    super(props)
  }

  _createSourceFromProps(props) {
    return new XYZSource(Object.assign({}, props))
  }
}

XYZ.propTypes = {
  url: PropTypes.string
}
