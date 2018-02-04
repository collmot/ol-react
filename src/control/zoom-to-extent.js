import ZoomToExtentControl from 'ol/control/zoomtoextent'

import PropTypes from 'prop-types'
import React from 'react'

import OLPropTypes from '../ol-proptypes'
import OLControl from './ol-control'

export default class ZoomToExtent extends OLControl {
  createControl (props) {
    return new ZoomToExtentControl({
      className: props.className,
      extent: props.extent,
      label: props.label,
      tipLabel: props.tipLabel
    })
  }
}

ZoomToExtent.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  extent: OLPropTypes.Extent,
  label: PropTypes.node,
  tipLabel: PropTypes.string
})
