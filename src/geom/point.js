import Feature from 'ol/feature';

import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class Point extends OLComponent {
  constructor(props) {
    super(props);
    this.geometry = new ol.geom.Point();
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
}

Point.propTypes = {
  children: PropTypes.arrayOf(PropTypes.number).isRequired
}

Point.contextTypes = {
  feature: PropTypes.instanceOf(Feature)
}
