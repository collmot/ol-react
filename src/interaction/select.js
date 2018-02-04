import SelectInteraction from 'ol/interaction/select'
import PropTypes from 'prop-types'

import OLInteraction from './ol-interaction'

export default class Select extends OLInteraction {
  createInteraction (props) {
    return new SelectInteraction({
      condition: props.condition
    })
  }
}

Select.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  select: PropTypes.func
})

Select.olEvents = ['select']
Select.olProps = ['condition']
