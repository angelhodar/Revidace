export function SET_TASKS(state, tasks) {
  state.tasks = tasks;
}

export function ADD_TASK(state, task) {
  state.tasks.push(task);
}

export function UPDATE_TASK(state, task) {
  state.tasks.map(t => {
    if (t.id === task.id) t.data = task.data;
  });
}

export function REMOVE_TASK(state, task) {
  state.tasks = state.tasks.filter(t => t.id !== task.id);
}
