import Feature from 'ol/feature'
import CircleGeometry from 'ol/geom/circle'
import PropTypes from 'prop-types'
import React from 'react'

export default class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.geometry = new CircleGeometry();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    if (props.children.length == 1) {
      // props.children[0] is the center
      this.geometry.setCenterAndRadius(props.children[0], props.radius);
    } else if (props.children.length > 1) {
      // props.children is the center
      this.geometry.setCenterAndRadius(props.children, props.radius);
    } else {
      this.geometry.setCenterAndRadius([0, 0], props.radius);
    }
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

Circle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.number).isRequired,
  radius: PropTypes.number.isRequired
}

Circle.contextTypes = {
  feature: PropTypes.instanceOf(Feature)
}
