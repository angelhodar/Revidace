export function getPatientById (state) {
  return id => {
    return state.patients.find(p => p.id === id)
  }
}
