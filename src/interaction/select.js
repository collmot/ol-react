import SelectInteraction from 'ol/interaction/select'
import PropTypes from 'prop-types'

import { withMap } from '../context'

import OLInteraction from './ol-interaction'

class Select extends OLInteraction {
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

export default withMap(Select)
