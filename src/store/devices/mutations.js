export function SET_DEVICES(state, devices) {
  state.devices = devices;
}

export function ADD_DEVICE(state, device) {
  state.devices.push(device);
}

export function DEVICE_CONNECTED(state, device) {
  state.devices.map(d => {
    if (d.id === device.id) d.socket = device.socket;
  });
}

export function CHANGE_DEVICE_NAME(state, { id, name }) {
  state.devices.map(d => {
    if (d.id === id) d.name = name;
  });
}

export function DEVICE_DISCONNECTED(state, socket) {
  state.devices.map(d => {
    if (d.socket === socket) d.socket = null;
  });
}