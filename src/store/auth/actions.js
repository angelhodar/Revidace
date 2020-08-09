export const loginUser = async function ({ commit }, payload) {
  const { email, password } = payload
  return this.$firebase.loginWithEmail(email, password)
}

export const logoutUser = async function ({ commit }, payload) {
  await this.$firebase.logoutUser()
}
