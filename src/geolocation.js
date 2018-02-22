import OLGeolocation from 'ol/geolocation'
import PropTypes from 'prop-types'
import React from 'react'

import OLPropTypes from './ol-proptypes'
import EventRegistry from './util/event-registry'

export default class Geolocation extends React.Component {
  constructor (props) {
    super (props)
    this.geolocation_ = new OLGeolocation()
    this.events_ = new EventRegistry({
      change: "change",
      changeAccuracy: "change:accuracy",
      changeAccuracyGeometry: "change:accuracygeometry",
      changeAltitude: "change:altitude",
      changeAltitudeAccuracy: "change:altitudeaccuracy",
      changeHeading: "change:heading",
      changePosition: "change:position",
      changeProjection: "change:projection",
      changeSpeed: "change:speed",
      changeTracking: "change:tracking",
      changeTrackingOptions: "change:trackingoptions",
      error: "error"
    }, this.geolocation_)
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
      this.geolocation_.setTracking(newProps.tracking)
    }

    if (oldProps.trackingOptions !== newProps.trackingOptions) {
      this.geolocation_.setTrackingOptions(newProps.trackingOptions)
    }

    if (oldProps.projection !== newProps.projection) {
      this.geolocation_.setProjection(newProps.projection)
    }

    this.events_.updateHandlers(newProps)
  }

  render () {
    return null
  }
}

Geolocation.propTypes = {
  change: PropTypes.func,
  changeAccuracy: PropTypes.func,
  changeAccuracyGeometry: PropTypes.func,
  changeAltitude: PropTypes.func,
  changeAltitudeAccuracy: PropTypes.func,
  changeHeading: PropTypes.func,
  changePosition: PropTypes.func,
  changeProjection: PropTypes.func,
  changeSpeed: PropTypes.func,
  changeTracking: PropTypes.func,
  changeTrackingOptions: PropTypes.func,
  error: PropTypes.func,
  projection: OLPropTypes.Projection,
  tracking: PropTypes.bool,
  trackingOptions: PropTypes.object
}

Geolocation.defaultProps = {
  tracking: true
}
