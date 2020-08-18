export function isAuthenticated (state) {
  return state.token != null
}

export function getAccessToken (state) {
  return state.token
}
