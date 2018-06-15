import AttributionControl from 'ol/control/attribution'
import PropTypes from 'prop-types'
import React from 'react'

import OLControl from './ol-control'

import { withMap } from '../context'

class Attribution extends OLControl {
  createControl (props) {
    return new AttributionControl({
      className: props.className,
      collapsed: props.collapsed,
      collapseLabel: props.collapseLabel,
      collapsible: props.collapsible,
      label: props.label,
      tipLabel: props.tipLabel
    })
  }
}

Attribution.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  collapseLabel: PropTypes.string,
  collapsible: PropTypes.bool,
  label: PropTypes.node,
  tipLabel: PropTypes.string
})

Attribution.olProps = [
  'className', 'collapsed', 'collapseLabel', 'collapsible', 'label',
  'tipLabel'
]

export default withMap(Attribution)
