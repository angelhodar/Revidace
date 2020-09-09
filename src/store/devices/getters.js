export function getDeviceById (state) {
  return (id) => {
    return state.devices.find(d => d.id === id)
  }
}
