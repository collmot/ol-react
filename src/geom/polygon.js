import Feature from 'ol/feature'
import PolygonGeometry from 'ol/geom/polygon'
import PropTypes from 'prop-types'
import React from 'react'

export default class Polygon extends React.Component {
  constructor(props) {
    super(props);
    this.geometry = new PolygonGeometry();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    this.geometry.setCoordinates([props.children]);
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

  render() {
    return null
  }
}

Polygon.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
}

Polygon.contextTypes = {
  feature: PropTypes.instanceOf(Feature)
}
