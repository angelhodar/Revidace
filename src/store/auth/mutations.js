export function setAuthState (state, data) {
  state.userDetails = data.userDetails
  state.userToken = data.userToken
  state.isReady = data.isReady
}
