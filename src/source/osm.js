import OSMSource from 'ol/source/osm'
import React from 'react';

import OLSource from './ol-source'

export default class OSM extends OLSource {
  createSource(props) {
    return new OSMSource(Object.assign({}, props));
  }
}
