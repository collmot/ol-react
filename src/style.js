import Geometry from 'ol/geom/geometry'
import Fill from 'ol/style/fill'
import Image from 'ol/style/image'
import Stroke from 'ol/style/stroke'
import Style from 'ol/style/style'
import Text from 'ol/style/text'

import ol from 'openlayers';
import PropTypes from 'prop-types';

const STYLE_KEY_FACTORIES = {
  geometry: (value) => new Geometry(value),
  fill: (value) => new Fill(value),
  image: (value) => new Image(value),
  stroke: (value) => new Stroke(value),
  text: (value) => new Text(value),
  zIndex: (value) => value
};

export function buildStyle(style) {
  if (!style) {
    return null;
  }

  if (Array.isArray(style)) {
    return style.map(buildStyle);
  }

  if (typeof style === "function") {
    return style;
  }

  if (Style.prototype.isPrototypeOf(style)) {
    return style;
  }

  const result = {};

  Object.keys(STYLE_KEY_FACTORIES)
        .filter((key) => !!style[key])
        .forEach((key) => {
    result[key] = STYLE_KEY_FACTORIES[key](style[key]);
  });

  return new Style(result);
}
