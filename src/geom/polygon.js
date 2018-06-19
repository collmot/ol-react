import PolygonGeometry from 'ol/geom/polygon'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLGeometryComponent } from './ol-geom'

export default createOLGeometryComponent(
  'Polygon',
  props => new PolygonGeometry(),
  {
    propTypes: {
      coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    },
    onPropsChanged: (geometry, props) => {
      geometry.setCoordinates(props.coordinates)
    }
  }
)
