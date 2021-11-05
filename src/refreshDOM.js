import { taskSection } from './app';
import { createList } from './createList';
import { getElsAndAppend } from './getElsAndAppend';
import { saveLS } from './saveLS';
import { selectList } from './app';
export function refreshDOM() {
  const lists = document.querySelectorAll('.task-container');

  taskSection.replaceChildren();
  selectList.replaceChildren();
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
  saveLS();
}
