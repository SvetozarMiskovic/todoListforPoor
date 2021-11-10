import { taskSection } from './app';
import { createList } from './renderElFunctions/createList';
import { getElsAndAppend } from './getElsAndAppend';
import { saveLS } from './saveLS';
import { selectList } from './app';
export function refreshDOM(element = null) {
  const lists = document.querySelectorAll('.task-container');

  taskSection.replaceChildren();
  selectList.replaceChildren();
  if (element) {
    element.forEach(function (list) {
      createList(
        list.dataset.id,
        list.children[1].textContent,
        list.dataset.edit
      );

      const tasks = list.childNodes[2].childNodes;
      tasks.forEach(function (task) {
        getElsAndAppend(list.dataset.id, task.dataset.id, task.textContent);
      });
    });
  } else {
    lists.forEach(function (list) {
      createList(
        list.dataset.id,
        list.children[1].textContent,
        list.dataset.edit
      );

      const tasks = list.childNodes[2].childNodes;
      tasks.forEach(function (task) {
        getElsAndAppend(list.dataset.id, task.dataset.id, task.textContent);
      });
    });
  }
  saveLS();
}
