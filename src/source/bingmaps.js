import BingMapsSource from 'ol/source/bingmaps'
import PropTypes from 'prop-types'
import React from 'react'

import OLSource from './ol-source'

export default class BingMaps extends OLSource {
  createSource(props) {
    let spreadedProps = Object.assign({}, props)
    spreadedProps.key = spreadedProps.apiKey
    delete spreadedProps.apiKey

    return new BingMapsSource(spreadedProps)
  }
}

BingMaps.propTypes = {
  apiKey: PropTypes.string.isRequired
}
