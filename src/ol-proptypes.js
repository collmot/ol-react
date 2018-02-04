/**
 * @file Property type validators for OpenLayers custom typedefs.
 */

import Style from 'ol/style/style'
import PropTypes from 'prop-types'

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

OLPropTypes.Style = PropTypes.oneOfType([
  PropTypes.instanceOf(Style),
  PropTypes.object,
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.instanceOf(Style),
    PropTypes.object
  ]))
])

export default OLPropTypes
