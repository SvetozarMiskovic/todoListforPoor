import { addTask } from './addTask';

export function getElsAndAppend(selectValue, id, inputValue) {
  const liste = [];
  const lists = document.querySelectorAll('.task-container');
  liste.push(...lists);
  const element = liste.find(list => list.dataset.id === selectValue);
  const task = addTask(id, inputValue);

  if ((task, element)) element.children[1].appendChild(task);
}
