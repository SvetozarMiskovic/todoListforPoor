import { recordEditID } from './recordEditID';

export function deleteTask(itemID) {
  const items = [];
  const tasks = document.querySelectorAll('.task-item');
  items.push(...tasks);

  const task = items.find(item => item.dataset.id === itemID);
  const taskContainer = task.parentElement.parentElement;

  recordEditID(taskContainer);
  task.remove();
}
