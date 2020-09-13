export function getTaskById(state) {
  return id => {
    return state.tasks.find(t => t.id === id);
  };
}
