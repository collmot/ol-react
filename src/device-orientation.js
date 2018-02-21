import OLDeviceOrientation from 'ol/deviceorientation'
import PropTypes from 'prop-types'
import React from 'react'

import OLPropTypes from './ol-proptypes'
import EventRegistry from './util/event-registry'

export default class DeviceOrientation extends React.Component {
  constructor (props) {
    super (props)
    this.deviceOrientation_ = new OLDeviceOrientation()
    this.events_ = new EventRegistry({
      change: "change",
      changeAlpha: "change:alpha",
      changeBeta: "change:beta",
      changeGamma: "change:gamma",
      changeHeading: "change:heading"
    }, this.deviceOrientation_)
  }

  componentDidMount () {
    this.propsMaybeChanged_(this.props, {})
  }

  componentWillReceiveProps (newProps) {
    this.propsMaybeChanged_(newProps, this.props)
  }

  componentWillUnmount () {
    this.propsMaybeChanged_({}, this.props)
  }

  propsMaybeChanged_ (newProps, oldProps) {
    if (oldProps.tracking !== newProps.tracking) {
      this.deviceOrientation_.setTracking(newProps.tracking)
    }

    this.events_.updateHandlers(newProps)
  }

  render () {
    return null
  }
}

DeviceOrientation.propTypes = {
  change: PropTypes.func,
  changeAlpha: PropTypes.func,
  changeBeta: PropTypes.func,
  changeGamma: PropTypes.func,
  changeHeading: PropTypes.func,
  tracking: PropTypes.bool
}

DeviceOrientation.defaultProps = {
  tracking: true
}
