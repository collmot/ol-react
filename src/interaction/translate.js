import Collection from 'ol/collection'
import TranslateInteraction from 'ol/interaction/translate'
import PropTypes from 'prop-types'

import OLPropTypes from '../ol-prop-types'

import { createOLInteractionComponent } from './ol-interaction'

export default createOLInteractionComponent(
  'Translate',
  props => new TranslateInteraction({
    features: props.features,
    hitTolerance: props.hitTolerance,
    layers: props.layers
  }),
  {
    events: ['translatestart', 'translateend', 'translating'],
    fragileProps: ['features', 'hitTolerance', 'layers'],
    propTypes: {
      features: PropTypes.instanceOf(Collection),
      hitTolerance: PropTypes.number,
      layers: OLPropTypes.LayerFilter,
      translatestart: PropTypes.func,
      translateend: PropTypes.func,
      translating: PropTypes.func
    }
  }
)
