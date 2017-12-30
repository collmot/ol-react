import PropTypes from 'prop-types';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';

export default class Translate extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Select({
      features: props.features,
      hitTolerance: props.hitTolerance,
      layers: props.layers
    })
  }
}

Translate.propTypes = Object.assign({}, OLInteraction.propTypes, {
  features: PropTypes.instanceOf(ol.Collection),
  hitTolerance: PropTypes.number,
  layers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(ol.layer.Layer)),
    PropTypes.instanceOf(ol.Collection),
    PropTypes.func
  ]),

  translatestart: PropTypes.func,
  translateend: PropTypes.func,
  translating: PropTypes.func
})

Translate.olEvents = ["translatestart", "translateend", "translating"]
Translate.olProps = ["features", "hitTolerance", "layers"]
