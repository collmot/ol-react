import ZoomToExtentControl from 'ol/control/zoomtoextent'

import PropTypes from 'prop-types'
import React from 'react'

import OLPropTypes from '../ol-prop-types'

import { createOLControlComponent } from './ol-control'

export default createOLControlComponent(
  'ZoomToExtent',
  props => new ZoomToExtentControl({
    className: props.className,
    extent: props.extent,
    label: props.label,
    tipLabel: props.tipLabel
  }),
  {
    propTypes: {
      className: PropTypes.string,
      extent: OLPropTypes.Extent,
      label: PropTypes.node,
      tipLabel: PropTypes.string
    },
    fragileProps: ['className', 'extent', 'label', 'tipLabel']
  }
)
