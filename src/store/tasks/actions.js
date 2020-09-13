import { Tasks } from "../../services"

export const getTasks = async function ({ commit }, query) {
  const { data } = await Tasks.getTasks(query)
  commit("SET_TASKS", data)
}

export const addTask = async function ({ commit }, task) {
  commit("ADD_TASK", task)
}

export const removeTask = async function ({ commit }, task) {
  commit("REMOVE_TASK", task)
}

export const socket_updateTask = async function ({ commit }, task) {
  commit("UPDATE_TASK", task)
}

export function launchTask ({ commit }, task) {
  this._vm.$socket.client.emit("launch_task", task)
}
