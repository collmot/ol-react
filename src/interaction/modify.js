import Collection from 'ol/collection'
import ModifyInteraction from 'ol/interaction/modify'
import Source from 'ol/source/source'
import VectorSource from 'ol/source/vector'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class Modify extends OLInteraction {
  createInteraction (props) {
    if (props.features !== undefined || props.source !== undefined) {
      return new ModifyInteraction({
        condition: props.condition,
        features: props.features,
        source: props.source
      })
    } else if (this.context && this.context.source !== undefined) {
      return new ModifyInteraction({
        condition: props.condition,
        source: this.context.source
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

Modify.contextTypes = Object.assign({}, OLInteraction.contextTypes, {
  source: PropTypes.instanceOf(Source)
})

Modify.olEvents = ['modifyend', 'modifystart']
Modify.olProps = ['features', 'source']

export default withMap(Modify)
