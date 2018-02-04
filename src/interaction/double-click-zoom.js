import DoubleClickZoomInteraction from 'ol/interaction/doubleclickzoom'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class DoubleClickZoom extends OLInteraction {
  createInteraction (props) {
    return new DoubleClickZoomInteraction({
      delta: props.delta,
      duration: props.duration
    })
  }

  needsNewInteractionInstance_ (newProps, oldProps) {
    if (newProps.type !== oldProps.type) {
      return true
    } else {
      return super.needsNewInteractionInstance_(newProps, oldProps)
    }
  }
}

DoubleClickZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  delta: PropTypes.number,
  duration: PropTypes.number
})

DoubleClickZoom.olProps = ['delta', 'duration']
