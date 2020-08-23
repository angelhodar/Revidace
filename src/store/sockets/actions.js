export function sendUserData ({ commit }, payload) {
  this._vm.$socket.client.emit("user", JSON.stringify(payload))
}
