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

  getChildContext () {
    return {
      feature: this.feature
    }
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
    return <React.Fragment>{this.props.children}</React.Fragment>
  }

  _updateFromProps (props) {
    this.feature.setStyle(buildStyle(props.style))
  }
}

Feature.propTypes = {
  style: OLPropTypes.Style,
  children: PropTypes.element,
  id: PropTypes.any.isRequired
}

Feature.contextTypes = {
  source: PropTypes.instanceOf(Source)
}

Feature.childContextTypes = {
  feature: PropTypes.instanceOf(OLFeature)
}
