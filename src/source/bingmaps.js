import BingMapsSource from 'ol/source/bingmaps'
import PropTypes from 'prop-types'

import { createOLSourceComponent } from './ol-source'

export default createOLSourceComponent(
  "BingMaps",
  props => {
    props.key = props.apiKey
    delete props.apiKey
    return new BingMapsSource(props)
  },
  {
    propTypes: {
      apiKey: PropTypes.string.isRequired
    },
    fragileProps: ['apiKey']
  }
)
