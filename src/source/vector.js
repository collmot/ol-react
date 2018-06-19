import Collection from 'ol/collection'
import VectorSource from 'ol/source/vector'
import PropTypes from 'prop-types'
import React from 'react'

import { createOLSourceComponent } from './ol-source'

export default createOLSourceComponent(
  "Vector",
  props => new VectorSource(Object.assign({
    features: new Collection()
  }, props)),
  {
    renderChildren (children) {
      // inject the source prop into every child
      return React.Children.map(
        children,
        child => (
          child ? React.cloneElement(child, { source: this.source }) : null
        )
      )
    }
  }
)
