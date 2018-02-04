import Collection from 'ol/collection'
import Layer from 'ol/layer/layer'
import TranslateInteraction from 'ol/interaction/translate'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class Translate extends OLInteraction {
  createInteraction (props) {
    return new TranslateInteraction({
      features: props.features,
      hitTolerance: props.hitTolerance,
      layers: props.layers
    })
  }
}

Translate.propTypes = Object.assign({}, OLInteraction.propTypes, {
  features: PropTypes.instanceOf(Collection),
  hitTolerance: PropTypes.number,
  layers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Layer)),
    PropTypes.instanceOf(Collection),
    PropTypes.func
  ]),

  translatestart: PropTypes.func,
  translateend: PropTypes.func,
  translating: PropTypes.func
})

Translate.olEvents = ['translatestart', 'translateend', 'translating']
Translate.olProps = ['features', 'hitTolerance', 'layers']
