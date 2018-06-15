import MousePositionControl from 'ol/control/mouseposition'
import PropTypes from 'prop-types'
import React from 'react'

import OLControl from './ol-control'

import { withMap } from '../context'
import OLPropTypes from '../ol-proptypes'

class MousePosition extends OLControl {
  createControl (props) {
    return new MousePositionControl({
      className: props.className,
      coordinateFormat: props.coordinateFormat,
      projection: props.projection,
      undefinedHTML: props.undefinedHTML
    })
  }
}

MousePosition.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  coordinateFormat: PropTypes.func,
  projection: OLPropTypes.Projection,
  undefinedHTML: PropTypes.string
})

MousePosition.olProps = [
  'className', 'coordinateFormat', 'projection', 'undefinedHTML'
]

export default withMap(MousePosition)
