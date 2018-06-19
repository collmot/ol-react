import OLFeature from 'ol/feature'
import Source from 'ol/source/source'
import PropTypes from 'prop-types'
import React from 'react'

import OLPropTypes from './ol-prop-types'
import { buildStyle, StylePropType } from './style'

export default class Feature extends React.Component {
  constructor (props) {
    super(props)

    this.feature = new OLFeature({})
    this.feature.setId(props.id)

    this._updateFromProps(props)
  }

  componentDidMount () {
    this.context.source.addFeature(this.feature)
  }

  componentDidUpdate () {
    this._updateFromProps(this.props)
  }

  componentWillUnmount () {
    this.context.source.removeFeature(this.feature)
  }

  render () {
    const geom = React.Children.only(this.props.children)
    return React.cloneElement(geom, {
      feature: this.feature
    })
  }

  _updateFromProps (props) {
    // Don't try to update the ID here, it won't work. We should rather
    // show a warning if the user tries to change the ID
    this.feature.setStyle(buildStyle(props.style))
  }
}

Feature.propTypes = {
  id: PropTypes.any.isRequired,
  style: OLPropTypes.Style,
  children: PropTypes.element,
}

Feature.contextTypes = {
  source: PropTypes.instanceOf(Source)
}
