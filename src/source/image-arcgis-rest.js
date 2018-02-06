import BaseLayer from 'ol/layer/base'
import Map from 'ol/map'
import Source from 'ol/source/imagearcgisrest'

import PropTypes from 'prop-types'
import OLComponent from '../ol-component'
import * as interaction from '../interaction'

export default class ImageArcGISRest extends OLComponent {
  constructor(props) {
    super(props)
    this.source = new Source(Object.assign({}, this.props))
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }

  componentWillUnmount() {}
}

ImageArcGISRest.propTypes = {
  ratio: PropTypes.number,
  url: PropTypes.string.isRequired
}

ImageArcGISRest.defaultProps = {
  ratio: 1
}

ImageArcGISRest.contextTypes = {
  layer: PropTypes.instanceOf(BaseLayer),
  map: PropTypes.instanceOf(Map)
}

ImageArcGISRest.childContextTypes = {
  source: PropTypes.instanceOf(Source)
}
