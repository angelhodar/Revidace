import Vue from "vue"

const getPatients = async params => {
  return await Vue.prototype.$api.get("/patients", { params })
}

const getPatient = async id => {
  return await Vue.prototype.$api.get(`/patients/${id}`)
}

const createPatient = async data => {
  return await Vue.prototype.$api.post("/patients", data)
}

const updatePatient = async (id, newData) => {
  return await Vue.prototype.$api.put(`/patients/${id}`, newData)
}

const deletePatient = async id => {
  return await Vue.prototype.$api.delete(`/patients/${id}`)
}

export default { getPatients, getPatient, createPatient, updatePatient, deletePatient }
