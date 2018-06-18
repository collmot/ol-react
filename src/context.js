import React from 'react'

import { wrapDisplayName } from './util/display-name'

function createHOCForContext (name, context) {
  const prefix = "with" + (name.substr(0, 1).toUpperCase()) + name.substr(1);
  const hoc = (Component) => {
    const result = React.forwardRef((props, ref) => (
      <context.Consumer>
        {value => {
          const contextVar = { [name]: value }
          return <Component ref={ref} {...props} {...contextVar} />
        }}
      </context.Consumer>
    ))
    result.displayName = wrapDisplayName(prefix, Component)
    return result
  }
  return hoc
}

export const MapContext = React.createContext()
export const LayerContext = React.createContext()

export const withMap = createHOCForContext("map", MapContext)
export const withLayer = createHOCForContext("layer", LayerContext)
