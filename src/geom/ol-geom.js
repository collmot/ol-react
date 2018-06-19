import Feature from 'ol/feature'
import Observable from 'ol/observable'
import PropTypes from 'prop-types'

export function createOLGeometryComponent (name, factory, options = {}) {
  const result = class extends React.Component {
    addGeometry_ (props) {
      const { feature } = props

      this.geometry = this.createGeometry_(props)
      this.updateProps_(props, {})

      if (feature) {
        feature.setGeometry(this.geometry)
      }
    }

    componentDidMount () {
      this.addGeometry_(this.props)
    }

    componentDidUpdate (prevProps) {
      this.propsMaybeChanged_(this.props, prevProps)
    }

    componentWillUnmount () {
      this.removeGeometry_(this.props)
    }

    render () {
      return null
    }

    createGeometry_ (props) {
      return factory(Object.assign({}, props))
    }

    needsNewGeometryInstance_ (newProps, oldProps) {
      if (this.geometry === undefined) {
        return true
      }

      if (newProps.feature !== oldProps.feature) {
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
      if (this.needsNewGeometryInstance_(newProps, oldProps)) {
        this.removeGeometry_(oldProps)
        this.addGeometry_(newProps)
      } else {
        if (this.geometry !== undefined) {
          this.updateProps_(newProps, oldProps)
        }
      }
    }

    removeGeometry_ (oldProps) {
      const { feature } = oldProps

      // don't call updateProps_({}) here, it will cause problems as it will
      // set the coordinates of the feature to null
      if (feature !== undefined) {
        feature.setGeometry(undefined)
      }
    }

    updateProps_ (newProps, oldProps) {
      if (options.onPropsChanged) {
        options.onPropsChanged(this.geometry, newProps, oldProps)
      }
    }
  }

  result.displayName = name

  result.propTypes = Object.assign({
    feature: PropTypes.instanceOf(Feature)
  }, options.propTypes)
  result.defaultProps = Object.assign({}, options.defaultProps)

  return result
}
