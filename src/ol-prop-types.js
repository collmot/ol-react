/**
 * @file Property type validators for OpenLayers custom typedefs.
 */

import Collection from 'ol/collection'
import Layer from 'ol/layer/layer'
import Projection from 'ol/proj/projection'
import Style from 'ol/style/style'
import PropTypes from 'prop-types'

const OLPropTypes = {}

/*
 * Custom validator funciton for ol.Extent (an array of four numbers).
 */
OLPropTypes.Extent = function (props, propName, componentName) {
  if (
    PropTypes.arrayOf(PropTypes.number)(props, propName, componentName) instanceof Error ||
    props[propName].length !== 4
  ) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    )
  }
}

OLPropTypes.AttributionLike = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.func
])

OLPropTypes.LayerCollection = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.instanceOf(Layer)),
  PropTypes.instanceOf(Collection)
])

OLPropTypes.LayerFilter = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.instanceOf(Layer)),
  PropTypes.instanceOf(Collection),
  PropTypes.func
])

OLPropTypes.Projection = PropTypes.oneOfType([
  PropTypes.instanceOf(Projection),
  PropTypes.string
])

OLPropTypes.Style = PropTypes.oneOfType([
  PropTypes.instanceOf(Style),
  PropTypes.object,
  PropTypes.func,
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.instanceOf(Style),
    PropTypes.object
  ]))
])

export default OLPropTypes