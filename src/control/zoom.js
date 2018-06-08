import ZoomControl from 'ol/control/zoom'
import PropTypes from 'prop-types'
import React from 'react'

import OLControl from './ol-control'

export default class Zoom extends OLControl {
  createControl (props) {
    return new ZoomControl({
      className: props.className,
      delta: props.delta,
      duration: props.duration,
      zoomInLabel: props.zoomInLabel,
      zoomInTipLabel: props.zoomInTipLabel,
      zoomOutLabel: props.zoomOutLabel,
      zoomOutTipLabel: props.zoomOutTipLabel
    })
  }
}

Zoom.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  delta: PropTypes.number,
  duration: PropTypes.number,
  zoomInLabel: PropTypes.node,
  zoomInTipLabel: PropTypes.string,
  zoomOutLabel: PropTypes.node,
  zoomOutTipLabel: PropTypes.string
})

Zoom.olProps = [
  'className', 'delta', 'duration', 'zoomInLabel', 'zoomInTipLabel',
  'zoomOutLabel', 'zoomOutTipLabel'
]
