import Collection from 'ol/collection'
import OverviewMapControl from 'ol/control/overviewmap'
import Layer from 'ol/layer/layer'
import View from 'ol/view'
import PropTypes from 'prop-types'
import React from 'react'

import OLPropTypes from '../ol-prop-types'

import { createOLControlComponent } from './ol-control'

export default createOLControlComponent(
  'OverviewMap',
  props => new OverviewMapControl({
    className: props.className,
    collapsed: props.collapsed,
    collapseLabel: props.collapseLabel,
    collapsible: props.collapsible,
    label: props.label,
    layers: props.layers,
    tipLabel: props.tipLabel,
    view: props.view
  }),
  {
    propTypes: {
      className: PropTypes.string,
      collapsed: PropTypes.bool,
      collapseLabel: PropTypes.string,
      collapsible: PropTypes.bool,
      label: PropTypes.node,
      layers: OLPropTypes.LayerCollection,
      tipLabel: PropTypes.string,
      view: PropTypes.instanceOf(View)
    },
    fragileProps: [
      'className', 'collapsed', 'collapseLabel', 'collapsible', 'label',
      'layers', 'tipLabel', 'view'
    ]
  }
)
