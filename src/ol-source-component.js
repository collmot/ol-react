import LayerBase from 'ol/layer/base'
import Map from 'ol/map'
import Source from 'ol/source/source'

import PropTypes from 'prop-types'

import OLComponent from './ol-component'

export default class OLSourceComponent extends OLComponent {
  constructor(props) {
    super(props)
    this.source = this._createSourceFromProps(props)
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }

  componentWillReceiveProps(newProps) {
    this.source = this._createSourceFromProps(newProps)
    this.context.layer.setSource(this.source)
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  _createSourceFromProps(props) {
    throw new Error("_createSouceFromProps() must be overridden in subclasses")
  }
}

OLSourceComponent.contextTypes = {
  layer: PropTypes.instanceOf(LayerBase),
  map: PropTypes.instanceOf(Map)
}

OLSourceComponent.childContextTypes = {
  source: PropTypes.instanceOf(Source)
}
