import { taskSection } from './app';

import { saveLS } from './saveLS';

import { refreshDOM } from './refreshDOM';

export function sortByNewest(element) {
  // When something is being added or removed
  const lists = document.querySelectorAll('.task-container');
  const liste = [...lists];

  const item = liste.find(list => list.dataset.edit === element.dataset.edit);

  taskSection.prepend(item);

  saveLS();
  refreshDOM();
}
