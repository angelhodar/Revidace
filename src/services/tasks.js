import Vue from "vue"

const getTasks = async (params) => {
  return await Vue.prototype.$api.get("/tasks", { params })
}

const getTask = async (id) => {
  return await Vue.prototype.$api.get(`/tasks/${id}`)
}

const createTask = async (data) => {
  return await Vue.prototype.$api.post("/tasks", data)
}

const updateTask = async (id, newData) => {
  return await Vue.prototype.$api.put(`/tasks/${id}`, newData)
}

const deleteTask = async (id) => {
  return await Vue.prototype.$api.delete(`/tasks/${id}`)
}

export default { getTasks, getTask, createTask, updateTask, deleteTask }
