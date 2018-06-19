import CircleGeometry from 'ol/geom/circle'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLGeometryComponent } from './ol-geom'

export default createOLGeometryComponent(
  'Circle',
  props => new CircleGeometry(),
  {
    propTypes: {
      center: PropTypes.arrayOf(PropTypes.number).isRequired,
      radius: PropTypes.number.isRequired
    },
    onPropsChanged: (geometry, props) => {
      geometry.setCenterAndRadius(props.center, props.radius);
    }
  }
)
