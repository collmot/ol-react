import VectorLayer from 'ol/layer/vector'
import PropTypes from 'prop-types'

import OLPropTypes from '../ol-prop-types'
import { buildStyle } from '../style'

import { createOLLayerComponent } from './ol-layer'

export default createOLLayerComponent(
  'Vector',
  props => new VectorLayer({
    style: buildStyle(props.style),
    updateWhileAnimating: props.updateWhileAnimating,
    updateWhileInteracting: props.updateWhileInteracting
  }),
  {
    propTypes: {
      style: OLPropTypes.Style,
      updateWhileAnimating: PropTypes.bool,
      updateWhileInteracting: PropTypes.bool
    }
  }
)
