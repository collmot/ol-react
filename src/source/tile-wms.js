import PropTypes from 'prop-types';
import React from 'react'
import ol from 'openlayers'
import OLSourceComponent from '../ol-source-component'

export default class TileWMS extends OLSourceComponent {
  constructor(props) {
    super(props)
  }

  _createSourceFromProps(props) {
    return new ol.source.TileWMS(Object.assign({}, props))
  }
}

TileWMS.propTypes = {
  params: PropTypes.object.isRequired,
  url: PropTypes.string
}
