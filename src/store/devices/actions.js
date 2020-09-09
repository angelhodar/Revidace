import { Devices } from "../../services"

export async function getDevices ({ commit }) {
  const { data } = await Devices.getDevices()
  commit("SET_DEVICES", data)
}

export function socket_deviceConnected ({ commit }, device) {
  console.log(`Device connected ${JSON.stringify(device)}`)
  commit("ADD_DEVICE", device)
}

export function socket_deviceDisconnected ({ commit }, socket) {
  console.log(`Device disconnected ${JSON.stringify(socket)}`)
  commit("REMOVE_DEVICE", socket)
}
