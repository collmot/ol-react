import Layer from 'ol/layer/layer'
import Map from 'ol/map'
import PropTypes from 'prop-types'
import React from 'react'

import OLComponent from '../ol-component'
import OLPropTypes from '../ol-proptypes'
import { buildStyle } from '../style'

export default class OLLayer extends OLComponent {
  constructor (props, context) {
    super(props, context)

    // Since the layer will be provided to child components as context,
    // we need to make sure that it is created right now and not later
    // in componentDidMount() -- otherwise the child components would
    // temporary see the layer being undefined at initial mount

    this.addLayer_(props)
  }

  addLayer_ (props) {
    const { map } = props

    this.layer = this.createLayer(props)
    this.updateProps_(props, {})
    this.updateLayerBaseProps_(props)

    if (this.layer !== undefined && map !== undefined) {
      map.addLayer(this.layer)
    }
  }

  componentDidMount () {
    // Nothing to do here, the current props have already been taken into
    // account in the constructor when this.addLayer_() was called
  }

  componentDidUpdate (prevProps) {
    this.propsMaybeChanged_(this.props, prevProps)
  }

  componentWillUnmount () {
    // we can remove the layer safely here as React guarantees that unmounted
    // component instances are not remounted later
    this.removeLayer_(this.props)
  }

  createLayer (props) {
    throw new TypeError('You must override createLayer() in classes derived ' +
                        'from OLLayer')
  }

  needsNewLayerInstance_ (newProps, oldProps) {
    if (this.layer === undefined) {
      return true
    }

    if (newProps.map !== oldProps.map) {
      return true
    }

    const propNames = this.constructor.olProps || []
    for (let propName of propNames) {
      if (newProps[propName] !== oldProps[propName]) {
        return true
      }
    }

    return false
  }

  propsMaybeChanged_ (newProps, oldProps) {
    if (this.needsNewLayerInstance_(newProps, oldProps)) {
      this.removeLayer_(oldProps)
      this.addLayer_(newProps)
    } else {
      if (this.layer !== undefined) {
        this.updateProps_(newProps, oldProps)
        this.updateLayerBaseProps_(newProps, oldProps)
      }
    }
  }

  removeLayer_ (oldProps) {
    const { map } = oldProps

    this.updateProps_({}, oldProps)
    this.updateLayerBaseProps_({}, oldProps)

    if (this.layer !== undefined && map !== undefined) {
      map.removeLayer(this.layer)
    }
  }

  updateLayerBaseProps_ (props) {
    if (props.hasOwnProperty("visible")) {
      this.layer.setVisible(props.visible)
    } else {
      this.layer.setVisible(true)
    }

    if (props.hasOwnProperty("zIndex")) {
      this.layer.setZIndex(props.zIndex)
    } else {
      this.layer.setZIndex(0)
    }
  }

  updateProps_ (newProps, oldProps) {
  }

  getChildContext () {
    return {
      layer: this.layer
    }
  }
}

OLLayer.propTypes = {
  map: PropTypes.instanceOf(Map).isRequired,
  visible: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired
}

OLLayer.defaultProps = {
  visible: true
}

OLLayer.childContextTypes = {
  layer: PropTypes.instanceOf(Layer)
}
