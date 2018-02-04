import BingMapsSource from 'ol/source/bingmaps'
import PropTypes from 'prop-types'
import React from 'react'

import OLSourceComponent from '../ol-source-component'

export default class BingMaps extends OLSourceComponent {
  constructor(props) {
    super(props)
  }

  _createSourceFromProps(props) {
    let spreadedProps = Object.assign({}, props)
    spreadedProps.key = spreadedProps.apiKey
    delete spreadedProps.apiKey

    return new BingMapsSource(spreadedProps)
  }
}

BingMaps.propTypes = {
  apiKey: PropTypes.string.isRequired
}
