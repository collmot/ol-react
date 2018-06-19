import LineStringGeometry from 'ol/geom/linestring'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLGeometryComponent } from './ol-geom'

export default createOLGeometryComponent(
  'LineString',
  props => new LineStringGeometry(),
  {
    propTypes: {
      coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    },
    onPropsChanged: (geometry, props) => {
      geometry.setCoordinates(props.coordinates)
    }
  }
)
