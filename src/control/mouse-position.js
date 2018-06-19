import MousePositionControl from 'ol/control/mouseposition'
import PropTypes from 'prop-types'
import React from 'react'

import OLPropTypes from '../ol-prop-types'

import { createOLControlComponent } from './ol-control'

export default createOLControlComponent(
  'MousePosition',
  props => new MousePositionControl({
    className: props.className,
    coordinateFormat: props.coordinateFormat,
    projection: props.projection,
    undefinedHTML: props.undefinedHTML
  }),
  {
    propTypes: {
      className: PropTypes.string,
      coordinateFormat: PropTypes.func,
      projection: OLPropTypes.Projection,
      undefinedHTML: PropTypes.string
    },
    fragileProps: [
      'className', 'coordinateFormat', 'projection', 'undefinedHTML'
    ]
  }
)
