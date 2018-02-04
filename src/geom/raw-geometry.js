import Feature from 'ol/feature'
import Geometry from 'ol/geom/geometry'
import PropTypes from 'prop-types'

import OLComponent from '../ol-component'

export default class RawGeometry extends OLComponent {
  /*
   * Allows combining a ol.geom.Geometry class with ol-react. Useful if you have
   * retrieved the object from somewhere else, and don't want to convert back
   * into an ol-react component.
   */
  componentDidMount() {
    this.context.feature.setGeometry(this.props.geometry);
  }

  componentWillUnmount() {
    this.context.feature.setGeometry(undefined);
  }
}

RawGeometry.propTypes = {
  geometry: PropTypes.instanceOf(Geometry).isRequired,
}

RawGeometry.contextTypes = {
  feature: PropTypes.instanceOf(Feature)
}
