import control from 'ol/control'
import interaction from 'ol/interaction'
import OLMap from 'ol/map'
import PropTypes from 'prop-types'
import React from 'react'

import { MapContext } from './context'
import OLComponent from './ol-component'

export default class Map extends React.Component {
  constructor (props) {
    super(props)
    this._target = React.createRef()

    // Since the map will be provided to child components as context,
    // we need to make sure that it is created right now and not later
    // in componentDidMount() -- otherwise the child components would
    // temporary see the map being undefined at initial mount

    this.map = new OLMap({
      loadTilesWhileAnimating: props.loadTilesWhileAnimating,
      loadTilesWhileInteracting: props.loadTilesWhileInteracting,
      interactions: props.useDefaultInteractions ? interaction.defaults() : [],
      controls: props.useDefaultControls ? control.defaults() : []
    })

    if (props.onChangeSize) {
      this.map.on('change:size', props.onChangeSize);
    }
    if (props.onSingleClick) {
      this.map.on('singleclick', props.onSingleClick);
    }
  }

  componentDidMount () {
    this.map.setTarget(this._target.current)

    if (this.props.focusOnMount) {
      this.focus()
    }
  }

  componentWillUnmount () {
    this.map.setTarget(undefined)
  }

  focus () {
    const viewport = this.map.getViewport()
    viewport.tabIndex = 0
    viewport.focus()
  }

  render () {
    return (
      <MapContext.Provider value={this.map}>
        <div
          className={this.props.className}
          style={this.props.style}
        >
          <div ref={this._target} />
          <div>
            {this.props.children}
            {this.props.view}
          </div>
        </div>
      </MapContext.Provider>
    )
  }

  updateSize () {
    this.map.updateSize()
  }
}

Map.propTypes = {
  loadTilesWhileAnimating: PropTypes.bool,
  loadTilesWhileInteracting: PropTypes.bool,
  onSingleClick: PropTypes.func,
  onChangeSize: PropTypes.func,
  view: PropTypes.element.isRequired,
  useDefaultInteractions: PropTypes.bool.isRequired,
  useDefaultControls: PropTypes.bool.isRequired,
  focusOnMount: PropTypes.bool.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ])
}

Map.defaultProps = {
  useDefaultInteractions: true,
  useDefaultControls: true,
  focusOnMount: false
}
