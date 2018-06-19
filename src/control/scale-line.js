import ScaleLineControl from 'ol/control/scaleline'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLControlComponent } from './ol-control'
import { ScaleLineUnits } from './scale-line-units'

export default createOLControlComponent(
  'ScaleLine',
  props => new ScaleLineControl({
    className: props.className,
    minWidth: props.minWidth,
    units: props.units
  }),
  {
    propTypes: {
      className: PropTypes.string,
      minWidth: PropTypes.number,
      units: PropTypes.oneOf(ScaleLineUnits)
    },
    fragileProps: [
      'className', 'minWidth', 'units'
    ]
  }
)
