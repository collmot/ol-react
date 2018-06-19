import OLFeature from 'ol/feature'
import OLSource from 'ol/source/source'
import PropTypes from 'prop-types'
import React from 'react'

import OLPropTypes from './ol-prop-types'
import { buildStyle, StylePropType } from './style'

export default class Feature extends React.Component {
  constructor (props) {
    super(props)

    // We need to create the feature here so we can pass it down to
    // child geometries with the first render
    this.feature = new OLFeature({})
    this.feature.setId(props.id)
  }

  componentDidMount () {
    this.addFeature_(this.props)
  }

  componentDidUpdate (prevProps) {
    this.propsMaybeChanged_(this.props, prevProps)
  }

  componentWillUnmount () {
    this.removeFeature_(this.props)
  }

  render () {
    const geom = React.Children.only(this.props.children)
    return geom ? React.cloneElement(geom, {
      feature: this.feature
    }) : geom
  }

  addFeature_ (props) {
    const { source } = props

    this.updateProps_(props, {})

    if (source) {
      source.addFeature(this.feature)
    }
  }

  needsNewFeatureInstance_ (newProps, oldProps) {
    const propNames = ['id', 'source']
    for (let propName of propNames) {
      if (newProps[propName] !== oldProps[propName]) {
        return true
      }
    }

    return false
  }

  propsMaybeChanged_ (newProps, oldProps) {
    if (this.needsNewFeatureInstance_(newProps, oldProps)) {
      this.removeFeature_(oldProps)
      this.addFeature_(newProps)
    } else {
      this.updateProps_(newProps, oldProps)
    }
  }

  removeFeature_ (oldProps) {
    const { source } = oldProps

    if (source !== undefined) {
      source.removeFeature(this.feature)
    }
  }

  updateProps_ (newProps, oldProps) {
    if (newProps.style !== oldProps.style) {
      this.feature.setStyle(buildStyle(newProps.style))
    }
  }
}

Feature.propTypes = {
  id: PropTypes.any.isRequired,
  source: PropTypes.instanceOf(OLSource),
  style: OLPropTypes.Style,
  children: PropTypes.element,
}
