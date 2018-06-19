import Map from 'ol/map'
import PropTypes from 'prop-types'

import { withMap } from '../context'
import EventRegistry from '../util/event-registry'

export function createOLInteractionComponent (name, factory, options = {}) {
  const result = class extends React.Component {
    constructor (props) {
      super(props)
      this.events_ = new EventRegistry(options.events || [])
    }

    addInteraction_ (props) {
      const { map } = props

      this.interaction = this.createInteraction_(props)

      this.updateProps_(props, {})

      this.events_.owner = this.interaction
      this.events_.updateHandlers(props)

      if (this.interaction !== undefined && map) {
        map.addInteraction(this.interaction)
      }
    }

    componentDidMount () {
      this.addInteraction_(this.props)
    }

    componentDidUpdate (prevProps) {
      this.propsMaybeChanged_(this.props, prevProps)
    }

    componentWillUnmount () {
      this.removeInteraction_(this.props)
    }

    render () {
      return this.props.children ? (
        <React.Fragment>{this.props.children}</React.Fragment>
      ) : null
    }

    createInteraction_ (props) {
      return factory(Object.assign({}, props))
    }

    needsNewInteractionInstance_ (newProps, oldProps) {
      if (this.interaction === undefined) {
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
      if (this.needsNewInteractionInstance_(newProps, oldProps)) {
        this.removeInteraction_(oldProps)
        this.addInteraction_(newProps)
      } else {
        if (this.interaction !== undefined) {
          this.updateProps_(newProps, oldProps)
        }
        this.events_.updateHandlers(newProps)
      }
    }

    removeInteraction_ (oldProps) {
      const { map } = oldProps

      this.updateProps_({}, oldProps)

      if (this.interaction !== undefined) {
        if (map !== undefined) {
          map.removeInteraction(this.interaction)
        }
        this.events_.owner = undefined
      }
    }

    updateCommonProps_ (props) {
      if (props.hasOwnProperty("active")) {
        this.interaction.setActive(props.active)
      } else {
        this.interaction.setActive(true)
      }
    }

    updateProps_ (newProps, oldProps) {
      this.updateCommonProps_(newProps, oldProps)
      if (options.onPropsChanged) {
        options.onPropsChanged(this.interaction, newProps, oldProps)
      }
    }
  }

  result.displayName = name

  result.propTypes = Object.assign({
    active: PropTypes.bool.isRequired,
    map: PropTypes.instanceOf(Map).isRequired
  }, options.propTypes)

  result.defaultProps = Object.assign({
    active: true
  }, options.defaultProps)

  return withMap(result)
}
