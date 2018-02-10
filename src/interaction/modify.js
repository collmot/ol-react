import Collection from 'ol/collection'
import ModifyInteraction from 'ol/interaction/modify'
import VectorSource from 'ol/source/vector'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class Modify extends OLInteraction {
  createInteraction (props) {
    if (props.features !== undefined || props.source !== undefined) {
      return new ModifyInteraction({
        condition: props.condition,
        features: props.features,
        source: props.source
      })
    } else {
      return undefined
    }
  }
}

Modify.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  modifyend: PropTypes.func,
  modifystart: PropTypes.func,
  features: PropTypes.instanceOf(Collection),
  source: PropTypes.instanceOf(VectorSource)
})

Modify.olEvents = ['modifyend', 'modifystart']
Modify.olProps = ['features', 'source']
