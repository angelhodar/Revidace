export function SET_DEVICES (state, devices) {
  state.devices = devices
}

export function ADD_DEVICE (state, device) {
  state.devices.push(device)
}

export function REMOVE_DEVICE (state, socket) {
  state.devices = state.devices.filter(d => d.socket !== socket)
}
