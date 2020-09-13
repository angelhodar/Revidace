import { Tasks } from "../../services"

export const getTasks = async function ({ commit }) {
  const { data } = await Tasks.getTasks()
  commit("SET_TASKS", data)
}

export function launchTask ({ commit }, payload) {
  this._vm.$socket.client.emit("send_task", payload)
}
