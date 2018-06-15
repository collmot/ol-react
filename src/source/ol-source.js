import LayerBase from 'ol/layer/base'
import Map from 'ol/map'
import Source from 'ol/source/source'

import PropTypes from 'prop-types'

import OLComponent from '../ol-component'

export default class OLSource extends OLComponent {
  constructor (props, context) {
    super(props, context)

    // Since the source will be provided to child components as context,
    // we need to make sure that it is created right now and not later
    // in componentDidMount() -- otherwise the child components would
    // temporary see the source being undefined at initial mount
    this.addSource_(props)

  }

  addSource_ (props) {
    this.source = this.createSource(props)
    this.updateProps_(props, {})
    if (this.source !== undefined && this.context && this.context.layer) {
      this.context.layer.setSource(this.source)
    }
  }

  componentDidMount () {
    // Nothing to do here, the current props have already been taken into
    // account in the constructor when this.addSource_() was called
  }

  componentDidUpdate (prevProps) {
    this.propsMaybeChanged_(this.props, prevProps)
  }

  componentWillUnmount () {
    this.propsMaybeChanged_({}, this.props)
  }

  needsNewSourceInstance_ (newProps, oldProps) {
    if (this.source === undefined) {
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
    if (this.needsNewSourceInstance_(newProps, oldProps)) {
      this.removeSource_(oldProps)
      this.addSource_(newProps)
    } else {
      if (this.layer !== undefined) {
        this.updateProps_(newProps, oldProps)
      }
    }
  }

  removeSource_ (oldProps) {
  }

  updateProps_ (newProps, oldProps) {
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  createSource(props) {
    throw new Error("_createSouceFromProps() must be overridden in subclasses")
  }
}

OLSource.contextTypes = {
  layer: PropTypes.instanceOf(LayerBase)
}

OLSource.childContextTypes = {
  source: PropTypes.instanceOf(Source)
}
