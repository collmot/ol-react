import FullScreenControl from 'ol/control/fullscreen'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLControlComponent } from './ol-control'

export default createOLControlComponent(
  'FullScreen',
  props => new FullScreenControl({
    className: props.className,
    keys: props.keys,
    label: props.label,
    labelActive: props.labelActive,
    source: props.source,
    tipLabel: props.tipLabel
  }),
  {
    propTypes: {
      className: PropTypes.string,
      keys: PropTypes.bool,
      label: PropTypes.node,
      labelActive: PropTypes.node,
      source: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.any
      ]),
      tipLabel: PropTypes.string
    },
    fragileProps: [
      'className', 'keys', 'label', 'labelActive', 'source', 'tipLabel'
    ]
  }
)
