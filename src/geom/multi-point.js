import Feature from 'ol/feature'
import MultiPointGeometry from 'ol/geom/multipoint'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLGeometryComponent } from './ol-geom'

export default createOLGeometryComponent(
  'MultiPoint',
  props => new MultiPointGeometry(),
  {
    propTypes: {
      coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    },
    onPropsChanged: (geometry, props) => {
      geometry.setCoordinates(props.coordinates)
    }
  }
)
