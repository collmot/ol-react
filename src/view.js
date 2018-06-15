import Map from 'ol/map'
import OLView from 'ol/view'
import PropTypes from 'prop-types'
import React from 'react'

import { withMap } from './context'
import OLComponent from './ol-component'

class View extends OLComponent {
  constructor(props) {
    super(props);
    this.view = new OLView();

    /*
    this.view.on("change:center", this.onCenterChanged, this);
    this.view.on("change:resolution", this.onResolutionChanged, this);
    */
  }

  /*
  onCenterChanged (event) {
    this.props.onNavigation({
      center: this.view.getCenter()
    })
  }

  onResolutionChanged (event) {
    this.props.onNavigation({
      resolution: this.view.getResolution()
    })
    return true
  }
  */

  updateCenterAndResolutionFromProps_ (props) {
    this.view.setCenter(props.center);
    if (props.resolution !== undefined) {
      this.view.setResolution(props.resolution);
    } else if (props.zoom !== undefined) {
      this.view.setZoom(props.zoom);
    }
  }

  updateFromProps_ (props, isMounting) {
    if (isMounting) {
      // Update the center and the resolution of the view only when it is
      // mounted the first time but not when the properties are updated
      this.updateCenterAndResolutionFromProps_(props)
    }
  }

  componentDidMount () {
    const { map } = this.props

    if (map) {
      map.setView(this.view)
    }

    this.updateFromProps_(this.props, /* isMounting = */ true)
  }

  componentDidUpdate (prevProps) {
    this.updateFromProps_(this.props);
  }

  componentWillUnmount () {
    // Don't unset the view from the map; OpenLayers does not support it
  }
}

View.propTypes = {
	center: PropTypes.arrayOf(PropTypes.number).isRequired,
  map: PropTypes.instanceOf(Map).isRequired,
	resolution: PropTypes.number,
	zoom: PropTypes.number,
	onNavigation: PropTypes.func
}

export default withMap(View)
