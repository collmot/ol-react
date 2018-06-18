import DrawInteraction from 'ol/interaction/draw'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class Draw extends OLInteraction {
  createInteraction (props) {
    return new DrawInteraction({
      type: props.type,
      geometryFunction: props.geometryFunction
    })
  }
}

Draw.propTypes = Object.assign({}, OLInteraction.propTypes, {
  drawend: PropTypes.func,
  drawstart: PropTypes.func,
  type: PropTypes.string.isRequired,
  geometryFunction: PropTypes.func
})

Draw.olEvents = ['drawend', 'drawstart']
Draw.olProps = ['type', 'geometryFunction']

export default withMap(Draw)
