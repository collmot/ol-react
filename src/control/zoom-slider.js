import ZoomSliderControl from 'ol/control/zoomslider'
import PropTypes from 'prop-types'
import React from 'react'

import OLControl from './ol-control'

export default class ZoomSlider extends OLControl {
  createControl (props) {
    return new ZoomSliderControl({
      className: props.className,
      duration: props.duration,
      maxResolution: props.maxResolution,
      minResolution: props.duration
    })
  }
}

ZoomSlider.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  duration: PropTypes.number,
  maxResolution: PropTypes.number,
  minResolution: PropTypes.number
})

ZoomSlider.olProps = [
  'className', 'duration', 'maxResolution', 'minResolution'
]
