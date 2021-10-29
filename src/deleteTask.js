export function deleteTask(itemID) {
  const items = [];
  const tasks = document.querySelectorAll('.task-item');
  items.push(...tasks);

  const task = items.find(item => item.dataset.id === itemID);

  task.remove();
}
