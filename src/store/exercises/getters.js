export function getExerciseById (state) {
  return id => {
    return state.exercises.find(e => e.id === id)
  }
}
