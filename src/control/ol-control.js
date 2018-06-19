import Map from 'ol/map'
import PropTypes from 'prop-types'
import React from 'react'

import { withMap } from '../context'
import EventRegistry from '../util/event-registry'

export function createOLControlComponent (name, factory, options = {}) {
  const result = class extends React.Component {
    constructor (props) {
      super(props)
      this.events_ = new EventRegistry(options.events || [])
    }

    addControl_ (props) {
      const { map } = props

      this.control = this.createControl_(props)
      this.updateProps_(props, {})

      this.events_.owner = this.control
      this.events_.updateHandlers(props)

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

    render () {
      return null
    }

    createControl_ (props) {
      return factory(Object.assign({}, props))
    }

    needsNewControlInstance_ (newProps, oldProps) {
      if (this.control === undefined) {
        return true
      }

      if (newProps.map !== oldProps.map) {
        return true
      }

      const propNames = options.fragileProps || []
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
        this.events_.updateHandlers(newProps)
      }
    }

    removeControl_ (oldProps) {
      const { map } = oldProps

      if (this.control !== undefined) {
        this.updateProps_({}, oldProps)
        if (map !== undefined) {
          map.removeControl(this.control)
        }
        this.events_.owner = undefined
      }
    }

    updateProps_ (newProps, oldProps) {
      if (options.onPropsChanged) {
        options.onPropsChanged(this.interaction, newProps, oldProps)
      }
    }
  }

  result.displayName = name

  result.propTypes = Object.assign({
    map: PropTypes.instanceOf(Map).isRequired
  }, options.propTypes)

  result.defaultProps = Object.assign({}, options.defaultProps)

  return withMap(result)
}
