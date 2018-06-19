import AttributionControl from 'ol/control/attribution'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLControlComponent } from './ol-control'

export default createOLControlComponent(
  'Attribution',
  props => new AttributionControl({
    className: props.className,
    collapsed: props.collapsed,
    collapseLabel: props.collapseLabel,
    collapsible: props.collapsible,
    label: props.label,
    tipLabel: props.tipLabel
  }),
  {
    propTypes: {
      className: PropTypes.string,
      collapsed: PropTypes.bool,
      collapseLabel: PropTypes.string,
      collapsible: PropTypes.bool,
      label: PropTypes.node,
      tipLabel: PropTypes.string
    },
    fragileProps: [
      'className', 'collapsed', 'collapseLabel', 'collapsible', 'label',
      'tipLabel'
    ]
  }
)
