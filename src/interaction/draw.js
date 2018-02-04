import DrawInteraction from 'ol/interaction/draw'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class Draw extends OLInteraction {
  createInteraction (props) {
    return new DrawInteraction({
      type: props.type
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

Draw.propTypes = Object.assign({}, OLInteraction.propTypes, {
  drawend: PropTypes.func,
  drawstart: PropTypes.func,
  type: PropTypes.string.isRequired
})

Draw.olEvents = ['drawend', 'drawstart']
Draw.olProps = ['type']
