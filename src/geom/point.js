import Feature from 'ol/feature'
import PointGeometry from 'ol/geom/point'
import PropTypes from 'prop-types'
import React from 'react'

export default class Point extends React.Component {
  constructor(props) {
    super(props);
    this.geometry = new PointGeometry();
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

  render() {
    return null
  }
}

Point.propTypes = {
  children: PropTypes.arrayOf(PropTypes.number).isRequired
}

Point.contextTypes = {
  feature: PropTypes.instanceOf(Feature)
}
