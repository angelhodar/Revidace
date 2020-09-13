import decode from "jwt-decode"
import { Users } from "../../services"

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
  const { id } = decode(token)
  const { data: currentUser } = await Users.getUser(id)
  commit("setCurrentUser", currentUser)
  this.$router.push("/dashboard")
}

export const logout = async function ({ commit }) {
  commit("setAccessToken", null)
  commit("setCurrentUser", null)
  delete this.$api.defaults.headers.common.Authorization
  this.$router.replace("/login")
}

export const getUsers = async function ({ commit }) {
  const { data } = await Users.getUsers()
  commit("SET_USERS", data)
}

export function identifyUser ({ commit }, id) {
  this._vm.$socket.client.emit("user", id)
}
