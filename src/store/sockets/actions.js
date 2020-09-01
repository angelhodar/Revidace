export function identifyUser ({ commit }, id) {
  this._vm.$socket.client.emit("user", id)
}
