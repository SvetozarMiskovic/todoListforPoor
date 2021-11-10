import { addTask } from './addTask';

export function getElsAndAppend(selectValue, id, inputValue) {
  const lists = document.querySelectorAll('.task-container');
  const liste = [...lists];

  const element = liste.find(list => list.dataset.id === `${selectValue}`);
  const task = addTask(id, inputValue);

  if (task && element) {
    element.children[2].appendChild(task);
    return element;
  } else {
    return;
  }
}
