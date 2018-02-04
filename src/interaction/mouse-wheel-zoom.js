import MouseWheelZoomInteraction from 'ol/interaction/mousewheelzoom'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class MouseWheelZoom extends OLInteraction {
  createInteraction (props) {
    return new MouseWheelZoomInteraction({
      duration: props.duration,
      useAnchor: props.useAnchor
    })
  }
}

MouseWheelZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  duration: PropTypes.number,
  useAnchor: PropTypes.bool
})

MouseWheelZoom.olProps = ['duration', 'useAnchor']
