export function createTaskItem(id) {
  const task = document.createElement('li');
  task.setAttribute('data-id', id);
  task.setAttribute('class', 'task-item');
  return task;
}
