import { recordEditID } from './recordEditID';
import { selectSort } from './app';
import { sortByNewest } from './sortByNewest';
import { sortByOldest } from './sortByOldest';
export function deleteTask(itemID) {
  const tasks = document.querySelectorAll('.task-item');
  const items = [...tasks];

  const sortValue = selectSort.value;
  const task = items.find(item => item.dataset.id === itemID);
  const taskContainer = task.parentElement.parentElement;

  task.remove();

  const editEl = recordEditID(taskContainer);
  if (sortValue === 'Newest updates') {
    sortByNewest(editEl);
  } else if (sortValue === 'Oldest updates') {
    sortByOldest(editEl);
  }
}
