export function identifyUser ({ commit }, id) {
  this._vm.$socket.client.emit("user", id)
}

export function launchTask ({ commit }, payload) {
  this._vm.$socket.client.emit("send_task", payload)
}

export function socket_device ({ commit }, payload) {
  console.log(`New device connected: ${payload}`)
}
