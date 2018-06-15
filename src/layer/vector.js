import VectorLayer from 'ol/layer/vector'
import PropTypes from 'prop-types'

import OLLayer from './ol-layer'

import { withMap } from '../context'
import OLPropTypes from '../ol-proptypes'
import { buildStyle } from '../style'

class Vector extends OLLayer {
  createLayer (props) {
    return new VectorLayer({
      style: buildStyle(props.style),
      updateWhileAnimating: props.updateWhileAnimating,
      updateWhileInteracting: props.updateWhileInteracting
    })
  }
}

Vector.propTypes = Object.assign({}, OLLayer.propTypes, {
  style: OLPropTypes.Style,
  updateWhileAnimating: PropTypes.bool,
  updateWhileInteracting: PropTypes.bool
})

export default withMap(Vector)
