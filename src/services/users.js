import Vue from "vue"

const getUsers = async params => {
  return await Vue.prototype.$api.get("/users", { params })
}

const getUser = async id => {
  return await Vue.prototype.$api.get(`/users/${id}`)
}

const createUser = async data => {
  return await Vue.prototype.$api.post("/users", data)
}

const updateUser = async (id, newData) => {
  return await Vue.prototype.$api.put(`/users/${id}`, newData)
}

const deleteUser = async id => {
  return await Vue.prototype.$api.delete(`/users/${id}`)
}

export default { getUsers, getUser, createUser, updateUser, deleteUser }
