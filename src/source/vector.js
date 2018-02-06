import Collection from 'ol/collection'
import BaseLayer from 'ol/layer/base'
import Map from 'ol/map'
import Source from 'ol/source/source'
import VectorSource from 'ol/source/vector'

import PropTypes from 'prop-types'
import React from 'react'
import OLComponent from '../ol-component'
import * as interaction from '../interaction'

export default class Vector extends OLComponent {
  constructor(props) {
    super(props)
    this.source = new VectorSource(
      Object.assign({
        features: new Collection()
      }, this.props)
    )
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }

  componentWillUnmount () {}
}

Vector.propTypes = {
}

Vector.defaultProps = {
}

Vector.contextTypes = {
  layer: PropTypes.instanceOf(BaseLayer),
  map: PropTypes.instanceOf(Map)
}

Vector.childContextTypes = {
  source: PropTypes.instanceOf(VectorSource)
}
