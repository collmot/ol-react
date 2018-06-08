import Collection from 'ol/collection'
import OverviewMapControl from 'ol/control/overviewmap'
import Layer from 'ol/layer/layer'
import View from 'ol/view'
import PropTypes from 'prop-types'
import React from 'react'

import OLControl from './ol-control'

export default class OverviewMap extends OLControl {
  createControl (props) {
    return new OverviewMapControl({
      className: props.className,
      collapsed: props.collapsed,
      collapseLabel: props.collapseLabel,
      collapsible: props.collapsible,
      label: props.label,
      layers: props.layers,
      tipLabel: props.tipLabel,
      view: props.view
    })
  }
}

OverviewMap.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  collapseLabel: PropTypes.string,
  collapsible: PropTypes.bool,
  label: PropTypes.node,
  layers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Layer)),
    PropTypes.instanceOf(Collection)
  ]),
  tipLabel: PropTypes.string,
  view: PropTypes.instanceOf(View)
})

OverviewMap.olProps = [
  'className', 'collapsed', 'collapseLabel', 'collapsible', 'label',
  'layers', 'tipLabel', 'view'
]
