import ScaleLineControl from 'ol/control/scaleline'
import PropTypes from 'prop-types'
import React from 'react'

import OLControl from './ol-control'
import { ScaleLineUnits } from './scale-line-units'

export default class ScaleLine extends OLControl {
  createControl (props) {
    return new ScaleLineControl({
      className: props.className,
      minWidth: props.minWidth,
      units: props.units
    })
  }
}

ScaleLine.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  minWidth: PropTypes.number,
  units: PropTypes.oneOf(ScaleLineUnits)
})

ScaleLine.olProps = [
  'className', 'minWidth', 'units'
]
