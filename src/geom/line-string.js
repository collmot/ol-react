import Feature from 'ol/feature'
import LineStringGeometry from 'ol/geom/linestring'
import PropTypes from 'prop-types'
import React from 'react'

export default class LineString extends React.Component {
  constructor(props) {
    super(props);
    this.geometry = new LineStringGeometry();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    this.geometry.setCoordinates(props.children);
  }

  componentDidMount() {
    this.context.feature.setGeometry(this.geometry);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }

  componentWillUnmount() {
    this.context.feature.setGeometry(undefined);
  }

  render () {
    return null
  }
}

LineString.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
}

LineString.contextTypes = {
  feature: PropTypes.instanceOf(Feature)
}
