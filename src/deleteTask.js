import { recordEditID } from './recordEditID';
import { selectSort } from './app';
import { sortByNewest } from './sortByNewest';
import { sortByOldest } from './sortByOldest';
export function deleteTask(itemID) {
  const items = [];
  const tasks = document.querySelectorAll('.task-item');
  items.push(...tasks);
  const sortValue = selectSort.value;
  const task = items.find(item => item.dataset.id === itemID);
  const taskContainer = task.parentElement.parentElement;

  const editEl = recordEditID(taskContainer);
  if (sortValue == 'Newest updates') {
    sortByNewest(editEl);
  } else if (sortValue == 'Oldest updates') {
    sortByOldest(editEl);
  }
  task.remove();
}
