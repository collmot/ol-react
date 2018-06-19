import RotateControl from 'ol/control/rotate'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLControlComponent } from './ol-control'

export default createOLControlComponent(
  'Rotate',
  props => new RotateControl({
    autoHide: props.autoHide,
    className: props.className,
    duration: props.duration,
    label: props.label,
    resetNorth: props.resetNorth,
    tipLabel: props.tipLabel
  }),
  {
    propTypes: {
      autoHide: PropTypes.bool,
      className: PropTypes.string,
      duration: PropTypes.number,
      label: PropTypes.node,
      resetNorth: PropTypes.func,
      tipLabel: PropTypes.string
    },
    fragileProps: [
      'autoHide', 'className', 'duration', 'label', 'resetNorth', 'tipLabel'
    ]
  }
)
