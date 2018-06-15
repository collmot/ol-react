import MouseWheelZoomInteraction from 'ol/interaction/mousewheelzoom'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class MouseWheelZoom extends OLInteraction {
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

export default withMap(MouseWheelZoom)
