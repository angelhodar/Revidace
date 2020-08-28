import Vue from "vue"

const getResults = async (params) => {
  return await Vue.prototype.$api.get("/results", { params })
}

const getResult = async (id) => {
  return await Vue.prototype.$api.get(`/results/${id}`)
}

const createResult = async (data) => {
  return await Vue.prototype.$api.post("/results", data)
}

const updateResult = async (id, newData) => {
  return await Vue.prototype.$api.put(`/results/${id}`, newData)
}

const deleteResult = async (id) => {
  return await Vue.prototype.$api.delete(`/results/${id}`)
}

export default { getResults, getResult, createResult, updateResult, deleteResult }
