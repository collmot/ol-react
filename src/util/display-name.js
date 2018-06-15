/**
 * Returns the display name of a React component.
 *
 * @param  {React.Component}  Component  the React component (class-based or
 *         stateless)
 * @return {string} the display name of the component
 */
export function getDisplayName (Component) {
  if (typeof Component === 'string') {
    return Component
  }

  if (!Component) {
    return undefined
  }

  return Component.displayName || Component.name || 'Component'
}

/**
 * Wraps the display name of a React component in a qualifier.
 *
 * @param  {string}  qualifier  the qualifier to map the component name with
 * @param  {React.Component}  Component  the React component (class-based or
 *         stateless)
 * @return {string} the wrapped display name
 */
export function wrapDisplayName (qualifier, Component) {
  const displayName = getDisplayName(Component)
  return `${qualifier}(${displayName})`
}
