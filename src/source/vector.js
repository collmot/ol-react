import Collection from 'ol/collection'
import BaseLayer from 'ol/layer/base'
import Source from 'ol/source/source'
import VectorSource from 'ol/source/vector'

import PropTypes from 'prop-types'
import React from 'react'
import * as interaction from '../interaction'

import OLSource from './ol-source'

export default class Vector extends OLSource {
  createSource(props) {
    return new VectorSource(Object.assign({
      features: new Collection()
    }, props))
  }
}
