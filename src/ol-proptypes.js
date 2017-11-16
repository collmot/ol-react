/**
 * @file Property type validators for OpenLayers custom typedefs.
 */

import { PropTypes } from 'react'

let OLPropTypes = {}

/*
 * Custom validator funciton for ol.Extent (an array of four numbers).
 */
OLPropTypes.Extent = function(props, propName, componentName) {
  if (
    PropTypes.arrayOf(PropTypes.number)(props, propName, componentName) instanceof Error ||
    props[propName].length !== 4
  ) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}

OLPropTypes.Style = React.PropTypes.oneOfType([
  React.PropTypes.instanceOf(ol.style.Style),
  React.PropTypes.object,
  React.PropTypes.arrayOf(React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(ol.style.Style),
    React.PropTypes.object
  ]))
])

export default OLPropTypes
