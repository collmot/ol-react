import Feature from 'ol/feature'
import MultiPointGeometry from 'ol/geom/multipoint'
import PropTypes from 'prop-types'
import React from 'react'

export default class MultiPoint extends React.Component {
  constructor(props) {
    super(props);
    this.geometry = new MultiPointGeometry();
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

MultiPoint.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
}

MultiPoint.contextTypes = {
  feature: PropTypes.instanceOf(Feature)
}
