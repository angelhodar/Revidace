export function identifyUser ({ commit }, id) {
  this._vm.$socket.client.emit("user", id)
}

export function launchExercise ({ commit }, payload) {
  this._vm.$socket.client.emit("send_exercise", payload)
}

/* export function socket_device ({ commit }, payload) {
  console.log("New device")
} */
