import Map from 'ol/map'
import Observable from 'ol/observable'
import PropTypes from 'prop-types'

import OLComponent from '../ol-component'
import EventRegistry from '../util/event-registry'

export default class OLInteraction extends OLComponent {
  constructor (props) {
    super(props)
    this.events_ = new EventRegistry(this.constructor.olEvents)
  }

  addInteraction_ (props) {
    const { map } = props

    this.interaction = this.createInteraction(props)

    this.updateProps_(props, {})
    this.updateActiveState_(props, {})

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

  createInteraction (props) {
    throw new TypeError('You must override createInteraction() in classes derived ' +
                        'from OLInteraction')
  }

  needsNewInteractionInstance_ (newProps, oldProps) {
    if (this.interaction === undefined) {
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
    if (this.needsNewInteractionInstance_(newProps, oldProps)) {
      this.removeInteraction_(oldProps)
      this.addInteraction_(newProps)
    } else {
      if (this.interaction !== undefined) {
        this.updateProps_(newProps, oldProps)
        this.updateActiveState_(newProps, oldProps)
      }
      this.events_.updateHandlers(newProps)
    }
  }

  removeInteraction_ (oldProps) {
    const { map } = oldProps

    this.updateProps_({}, oldProps)
    this.updateActiveState_({}, oldProps)

    if (this.interaction !== undefined) {
      if (map !== undefined) {
        map.removeInteraction(this.interaction)
      }
      this.events_.owner = undefined
    }
  }

  updateActiveState_ (props) {
    if (props.hasOwnProperty("active")) {
      this.interaction.setActive(props.active)
    } else {
      this.interaction.setActive(true)
    }
  }

  updateProps_ (newProps, oldProps) {
  }
}

OLInteraction.propTypes = {
  active: PropTypes.bool.isRequired,
  map: PropTypes.instanceOf(Map).isRequired
}

OLInteraction.defaultProps = {
  active: true
}
