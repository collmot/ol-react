import Point from 'ol/geom/point'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLGeometryComponent } from './ol-geom'

export default createOLGeometryComponent(
  'Point',
  props => new Point(),
  {
    propTypes: {
      coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    },
    onPropsChanged: (geometry, props) => {
      geometry.setCoordinates(props.coordinates)
    }
  }
)
