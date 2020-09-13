export function isAuthenticated (state) {
  return state.token != null
}

export function getAccessToken (state) {
  return state.token
}

export function getUserById (state) {
  return id => {
    return state.users.find(u => u.id === id)
  }
}
