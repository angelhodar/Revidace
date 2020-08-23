import Vue from "vue"

const getDevices = async (params) => {
  return await Vue.prototype.$api.get("/devices", { params })
}

const getDevice = async (id) => {
  return await Vue.prototype.$api.get(`/devices/${id}`)
}

const createDevice = async (data) => {
  return await Vue.prototype.$api.post("/devices", data)
}

const updateDevice = async (id, newData) => {
  return await Vue.prototype.$api.put(`/devices/${id}`, newData)
}

const deleteDevice = async (id) => {
  return await Vue.prototype.$api.delete(`/devices/${id}`)
}

export default { getDevices, getDevice, createDevice, updateDevice, deleteDevice }
