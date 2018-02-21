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
    this.interaction = this.createInteraction(props, this.context)
    this.events_.owner = this.interaction
    if (this.interaction !== undefined) {
      this.context.map.addInteraction(this.interaction)
    }
  }

  componentDidMount () {
    this.addInteraction_(this.props)
    this.propsMaybeChanged_(this.props, {})
  }

  componentWillReceiveProps (newProps) {
    this.propsMaybeChanged_(newProps, this.props)
  }

  componentWillUnmount () {
    this.propsMaybeChanged_({}, this.props)
    this.removeInteraction_({})
  }

  createInteraction (props) {
    throw new TypeError('You must override createInteraction() in classes derived ' +
                        'from OLInteraction')
  }

  needsNewInteractionInstance_ (newProps, oldProps) {
    if (this.interaction === undefined) {
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
      this.removeInteraction_()
      this.addInteraction_(newProps)

      if (this.interaction !== undefined) {
        // The new interaction instance is now set up as if oldProps = {},
        // so we need to call the handlers that way
        this.updateProps_(newProps, {})
        this.updateActiveState_(newProps, {})
      }
    } else {
      if (this.interaction !== undefined) {
        this.updateProps_(newProps, oldProps)
        this.updateActiveState_(newProps, oldProps)
      }
    }

    this.events_.updateHandlers(newProps)
  }

  removeInteraction_ () {
    if (this.interaction !== undefined) {
      this.context.map.removeInteraction(this.interaction)
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
  active: PropTypes.bool.isRequired
}

OLInteraction.defaultProps = {
  active: true
}

OLInteraction.contextTypes = {
  map: PropTypes.instanceOf(Map)
}
