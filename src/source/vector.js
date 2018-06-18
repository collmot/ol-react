import Collection from 'ol/collection'
import VectorSource from 'ol/source/vector'
import PropTypes from 'prop-types'

import { createOLSourceComponent } from './ol-source'

export default createOLSourceComponent(
  "Vector",
  props => new VectorSource(Object.assign({
    features: new Collection()
  }, props))
)
