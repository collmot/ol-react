import ol from 'openlayers';
import React from 'react';

const STYLE_KEY_FACTORIES = {
  geometry: (value) => new ol.style.Geometry(value),
  fill: (value) => new ol.style.Fill(value),
  image: (value) => new ol.style.Image(value),
  stroke: (value) => new ol.style.Stroke(value),
  text: (value) => new ol.style.Text(value),
  zIndex: (value) => value
};

export function buildStyle(style) {
  if(!style) {
    return null;
  }

  if(Array.isArray(style)) {
    return style.map(buildStyle);
  }

  if(typeof style === "function") {
    return style;
  }

  if(ol.style.Style.prototype.isPrototypeOf(style)) {
    return style;
  }

  const result = {};

  Object.keys(STYLE_KEY_FACTORIES)
        .filter((key) => !!style[key])
        .forEach((key) => {
    result[key] = STYLE_KEY_FACTORIES[key](style[key]);
  });

  return new ol.style.Style(result);
}

export const StylePropType = React.PropTypes.oneOfType([
  React.PropTypes.instanceOf(ol.style.Style),
  React.PropTypes.object,
  React.PropTypes.arrayOf(React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(ol.style.Style),
    React.PropTypes.object
  ]))
])
