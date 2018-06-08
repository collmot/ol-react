import Map from 'ol/map'
import PropTypes from 'prop-types'
import React from 'react'

import OLComponent from '../ol-component'

export default class OLControl extends OLComponent {
  addControl_ (props) {
    this.control = this.createControl(props, this.context)
    if (this.control !== undefined) {
      this.context.map.addControl(this.control)
    }
  }

  componentDidMount () {
    this.addControl_(this.props)
    this.propsMaybeChanged_(this.props, {})
  }

  componentDidUpdate (prevProps) {
    this.propsMaybeChanged_(this.props, prevProps)
  }

  componentWillUnmount () {
    this.propsMaybeChanged_({}, this.props)
    this.removeControl_({})
  }

  createControl (props) {
    throw new TypeError('You must override createControl() in classes derived ' +
                        'from OLControl')
  }

  needsNewControlInstance_ (newProps, oldProps) {
    if (this.control === undefined) {
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
    if (this.needsNewControlInstance_(newProps, oldProps)) {
      this.removeControl_()
      this.addControl_(newProps)

      if (this.control !== undefined) {
        // The new interaction instance is now set up as if oldProps = {},
        // so we need to call the handlers that way
        this.updateProps_(newProps, {})
      }
    } else {
      if (this.control !== undefined) {
        this.updateProps_(newProps, oldProps)
      }
    }
  }

  removeControl_ () {
    if (this.control !== undefined) {
      this.context.map.removeControl(this.control)
    }
  }

  updateProps_ (newProps, oldProps) {
  }
}

OLControl.propTypes = {
}

OLControl.defaultProps = {
}

OLControl.contextTypes = {
  map: PropTypes.instanceOf(Map)
}
