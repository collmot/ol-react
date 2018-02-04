import OSMSource from 'ol/source/osm'
import React from 'react';

import OLSourceComponent from '../ol-source-component'

export default class OSM extends OLSourceComponent {
  constructor(props) {
    super(props);
  }

  _createSourceFromProps(props) {
    return new OSMSource(Object.assign({}, props));
  }
}

OSM.propTypes = {
}
