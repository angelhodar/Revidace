import decode from "jwt-decode"

export const loginWithEmailAndPassword = async function ({ dispatch }, credentials) {
  const res = await this.$api.post("/auth", credentials)
  dispatch("handleIncomingToken", res.data.accessToken)
}

export const loginWithSocialProvider = function ({ commit }, provider) {
  window.location.href = `${this.$api.defaults.baseURL}/auth/${provider}`
}

export const handleIncomingToken = async function ({ commit }, token) {
  commit("setAccessToken", token)
  this.$api.defaults.headers.common.Authorization = `Bearer ${token}`
  const { uid } = decode(token)
  const currentUser = await this.$api.get("/users", { params: { uid } })
  commit("setCurrentUser", currentUser.data[0])
  this.$router.push("/dashboard")
}

export const logout = async function ({ commit }, payload) {
  // await this.$api.post("/auth/logout")
  commit("setAccessToken", null)
  commit("setCurrentUser", null)
  delete this.$api.defaults.headers.common.Authorization
  this.$router.replace("/login")
}
