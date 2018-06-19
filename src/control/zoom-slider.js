import ZoomSliderControl from 'ol/control/zoomslider'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLControlComponent } from './ol-control'

export default createOLControlComponent(
  'ZoomSlider',
  props => new ZoomSliderControl({
    className: props.className,
    duration: props.duration,
    maxResolution: props.maxResolution,
    minResolution: props.duration
  }),
  {
    propTypes: {
      className: PropTypes.string,
      duration: PropTypes.number,
      maxResolution: PropTypes.number,
      minResolution: PropTypes.number
    },
    fragileProps: [
      'className', 'duration', 'maxResolution', 'minResolution'
    ]
  }
)
