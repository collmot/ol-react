import FullScreenControl from 'ol/control/fullscreen'
import PropTypes from 'prop-types'
import React from 'react'

import OLControl from './ol-control'

export default class FullScreen extends OLControl {
  createControl (props) {
    return new FullScreenControl({
      className: props.className,
      keys: props.keys,
      label: props.label,
      labelActive: props.labelActive,
      source: props.source,
      tipLabel: props.tipLabel
    })
  }
}

FullScreen.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  keys: PropTypes.bool,
  label: PropTypes.node,
  labelActive: PropTypes.node,
  source: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.any
  ]),
  tipLabel: PropTypes.string
})

FullScreen.olProps = [
  'className', 'keys', 'label', 'labelActive', 'source', 'tipLabel'
]
