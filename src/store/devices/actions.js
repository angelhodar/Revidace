import { Devices } from "../../services";

export async function getDevices({ commit }) {
  const { data } = await Devices.getDevices();
  commit("SET_DEVICES", data);
}

export function setName({ commit }, payload) {
  commit("CHANGE_DEVICE_NAME", payload)
  Devices.updateDevice(payload.id, { name: payload.name })
}

export function socket_deviceConnected({ commit, getters }, device) {
  if (getters.getDeviceById(device.id)) commit("DEVICE_CONNECTED", device);
  else commit("ADD_DEVICE", device);
}

export function socket_deviceDisconnected({ commit }, socket) {
  commit("DEVICE_DISCONNECTED", socket);
}
