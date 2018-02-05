import Map from 'ol/map'
import VectorLayer from 'ol/layer/vector'
import PropTypes from 'prop-types'
import React from 'react'

import OLContainer from '../ol-container'
import OLPropTypes from '../ol-proptypes'
import { buildStyle } from '../style'

export default class Vector extends OLContainer {
  constructor (props) {
    super(props)
    this.layer = new VectorLayer({
      updateWhileAnimating: props.updateWhileAnimating,
      updateWhileInteracting: props.updateWhileInteracting,
      style: buildStyle(this.props.style),
      visible: this.props.visible
    })
    this.layer.setZIndex(props.zIndex)
  }

  getChildContext () {
    return {
      layer: this.layer
    }
  }

  componentDidMount () {
    this.context.map.addLayer(this.layer)
  }

  componentWillReceiveProps (newProps) {
    this.layer.setStyle(buildStyle(newProps.style));
    this.layer.setVisible(newProps.visible)
    this.layer.setStyle(newProps.style)
    this.layer.setZIndex(newProps.zIndex)
  }

  componentWillUnmount () {
    this.context.map.removeLayer(this.layer)
  }
}

Vector.propTypes = {
  updateWhileAnimating: PropTypes.bool,
  updateWhileInteracting: PropTypes.bool,
  style: OLPropTypes.Style,
  visible: PropTypes.bool,
  zIndex: PropTypes.number
}

Vector.defaultProps = {
  visible: true
}

Vector.contextTypes = {
  map: PropTypes.instanceOf(Map)
}

Vector.childContextTypes = {
  layer: PropTypes.instanceOf(Vector)
}
