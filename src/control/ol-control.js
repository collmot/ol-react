import Map from 'ol/map'
import PropTypes from 'prop-types'
import React from 'react'

import OLComponent from '../ol-component'

export default class OLControl extends React.Component {
  addControl_ (props) {
    const { map } = props

    this.control = this.createControl(props)
    this.updateProps_(props, {})

    if (this.control !== undefined && map) {
      map.addControl(this.control)
    }
  }

  componentDidMount () {
    this.addControl_(this.props)
  }

  componentDidUpdate (prevProps) {
    this.propsMaybeChanged_(this.props, prevProps)
  }

  componentWillUnmount () {
    this.removeControl_(this.props)
  }

  createControl (props) {
    throw new TypeError('You must override createControl() in classes derived ' +
                        'from OLControl')
  }

  needsNewControlInstance_ (newProps, oldProps) {
    if (this.control === undefined) {
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
    if (this.needsNewControlInstance_(newProps, oldProps)) {
      this.removeControl_(oldProps)
      this.addControl_(newProps)
    } else {
      if (this.control !== undefined) {
        this.updateProps_(newProps, oldProps)
      }
    }
  }

  removeControl_ (oldProps) {
    const { map } = oldProps

    this.updateProps_({}, oldProps)

    if (this.control !== undefined && map !== undefined) {
      map.removeControl(this.control)
    }
  }

  render () {
    return null
  }
  
  updateProps_ (newProps, oldProps) {
  }
}

OLControl.propTypes = {
  map: PropTypes.instanceOf(Map).isRequired
}

OLControl.defaultProps = {
}
