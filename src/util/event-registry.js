import Observable from 'ol/observable'

/**
 * Helper object that keeps track of event registrations for a React component
 * that is backed by an OpenLayers object. The owner of the event registry must
 * be the OpenLayers object on which the events are registered.
 */
export default class EventRegistry {
  constructor (names, owner) {
    this.handlers_ = undefined
    this.owner_ = undefined

    if (names === undefined) {
      this.names_ = {}
    } else if (names === Array.isArray(names)) {
      this.names_ = {}
      for (name of names) {
        this.names_[name] = name
      }
    } else {
      this.names_ = Object.assign({}, names)
    }

    this.owner = owner
  }

  get owner () {
    return this.owner_
  }

  set owner (value) {
    if (this.owner_ === value) {
      return
    }

    if (this.owner_ !== undefined) {
      this.updateHandlers({})
      this.handlers_ = undefined
    }

    this.owner_ = value

    if (this.owner_ !== undefined) {
      this.handlers_ = {}
    }
  }

  updateHandler (name, handler) {
    if (this.owner_ === undefined) {
      return
    }

    const oldData = this.handlers_[name]
    const { key, func } = oldData || {}

    if (handler === func) {
      // Same handler; nothing to do
      return
    }

    // Remove the old handler if there was any
    if (oldData) {
      if (Observable.unByKey) {
        /* OpenLayers 4.x */
        Observable.unByKey(key)
      } else {
        /* OpenLayers 3.x */
        this.owner_.unByKey(key)
      }
      delete this.handlers_[name]
    }

    // Add the new handler
    if (handler) {
      this.handlers_[name] = {
        key: this.owner_.on(this.names_[name], handler),
        func: handler
      }
    }
  }

  updateHandlers (handlerMap) {
    for (let name in this.names_) {
      const handler = handlerMap[name]
      this.updateHandler(name, handler)
    }
  }
}
