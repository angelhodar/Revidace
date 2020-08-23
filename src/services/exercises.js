import Vue from "vue"

const getExercises = async (params) => {
  return await Vue.prototype.$api.get("/exercises", { params })
}

const getExercise = async (id) => {
  return await Vue.prototype.$api.get(`/exercises/${id}`)
}

const createExercise = async (data) => {
  return await Vue.prototype.$api.post("/exercises", data)
}

const updateExercise = async (id, newData) => {
  return await Vue.prototype.$api.put(`/exercises/${id}`, newData)
}

const deleteExercise = async (id) => {
  return await Vue.prototype.$api.delete(`/exercises/${id}`)
}

export default { getExercises, getExercise, createExercise, updateExercise, deleteExercise }
